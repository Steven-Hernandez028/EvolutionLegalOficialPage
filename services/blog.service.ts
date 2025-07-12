import { BaseService } from "./base.service"
import type { Blog, BlogConfiguration, BlogStatus, Prisma, Comment } from "@prisma/client"
import { PaginationOptions } from "./interfaces/pagination.options"
import { Value } from "@radix-ui/react-select"

export interface CreateBlogDto {
    title: string
    excerpt?: string
    content: string
    categoryId?: string
    tags?: string
    featuredImage?: string
    status?: BlogStatus
    authorId: string
    metaDescription?: string
}

export interface UpdateBlogDto {
    id?: string;
    title?: string
    excerpt?: string
    content?: string
    slug?: string
    categoryId?: string
    publishedAt?: Date | null
    tags?: string
    featuredImage?: string
    status?: BlogStatus
    isFeatured?: boolean
    metaDescription?: string
}

export interface BlogSearchOptions {
    search?: string
    categoryId?: string
    status?: BlogStatus
    isFeatured?: boolean
    authorId?: string
    category?: string;
    tag?: string;
}


interface BlogDTO {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    featuredImage: any
    tags: string[]
    status: string
    isFeatured: boolean
    views: number
    publishedAt: string
    metaDescription: string
    metaKeywords: string[]
    createdAt: string
    updatedAt: string
    authorId: string
    categoryId: string
    author: AuthorDTO
    category: CategoryDTO
    _count: Count
}

interface AuthorDTO {
    id: string
    name: string
    email: string
    password: string
    role: string
    avatar: any
    isActive: boolean
    lastLoginAt: string
    createdAt: string
    updatedAt: string
}

interface Count {
    comments: number
}
interface CategoryDTO {
    id: string
    name: string
    slug: string
    description: string
    color: string
    isActive: boolean
    createdAt: string
    updatedAt: string
}
export interface NewCommentInput {
    author: string
    email: string
    content: string
}

export interface BlogResponse {
    id: string
    slug: string;
    title: string
    excerpt: string
    author: string
    date: string
    category: string
    status: string
    views: number
    comments: number,
    image?: string | null;
    readTime: number
    featured: boolean
}
export interface SearchBlogsDTORequest {
    data: BlogResponse[];
    total: number
    page: number
    limit: number
    totalPages: number
}

export interface BlogPost {
    id: string
    title: string
    content: string
    excerpt: string
    image?: string | null
    date: string // formato ISO, e.g. "2025-02-02"
    readTime: number // minutos de lectura
    author: string
    category: string
    tags: string[]
}
export interface BlogComment {
    id: string
    postId: string
    author: string
    email: string
    content: string
    date: string
}
export interface CreateCommentDto {
    authorName: string
    authorEmail: string
    content: string
    blogId?: string
    newsId?: string
    ipAddress?: string
    userAgent?: string
}
export class BlogService extends BaseService<Blog> {
    async createBlog(data: CreateBlogDto): Promise<Blog> {

        const slug = this.generateSlug(data.title)

        const existingBlog = await this.prisma.blog.findUnique({
            where: { slug },
        })

        if (existingBlog) {
            throw new Error("Blog with this title already exists")
        }

        return this.prisma.blog.create({
            data: {
                ...data,
                tags: data.tags ? data.tags.split(",").map(tag => tag.trim()) : [],
                slug,
                publishedAt: data.status === "PUBLISHED" ? new Date() : null,
            },
        })
    }

    async getBlogsByFeatureConfiguration(): Promise<BlogResponse[]> {
        const latestConfig = await this.prisma.blogConfiguration.findFirst({
            orderBy: { createdAt: "desc" },
        })
        if (!latestConfig) {
            return []
        }

        const { MinViews, MinComments, Duration } = latestConfig

        const dateThreshold = new Date()
        dateThreshold.setDate(dateThreshold.getDate() - Duration)

        const blogs = await this.prisma.blog.findMany({
            where: {

                views: { gte: MinViews },
                comments: {
                    some: {},
                },
                status: "PUBLISHED",
                createdAt: { gte: dateThreshold },
            },
            include: {
                comments: true,
                author: true,
                category: true,
            },
        })

        const filteredBlogs = blogs.filter(blog => blog.comments.filter(a => a.status === 'APPROVED').length >= MinComments)

        const result: BlogResponse[] = filteredBlogs.map(blog => {
            const blogResponse: BlogResponse = {
                id: blog.id,
                slug: blog.slug,
                title: blog.title,
                excerpt: blog.excerpt || "",
                author: blog.author.name || "",
                date: blog.createdAt.toISOString(),
                category: blog.category?.name || "",
                status: blog.status,
                views: blog.views || 0,
                comments: blog.comments.length || 0,
                image: blog.featuredImage,
                readTime: this.calcularTiempoLectura(blog.content),
                featured: true
            }

            return blogResponse;
        });

        return result
    }


    async findBySlug(slug: string): Promise<BlogPost | null> {

        const data = await this.prisma.blog.findUnique({
            where: { slug }, include: {
                author: true,
                category: true,
                comments: {
                    where: { status: "APPROVED" },
                    orderBy: { createdAt: "asc" },
                },
            }
        });
        if (!data) return null;

        const response: BlogPost = {
            id: data.id,
            title: data.title,
            content: data.content,
            excerpt: data.excerpt ?? "",
            date: data.createdAt.toISOString(),
            readTime: this.calcularTiempoLectura(data.content),
            author: data.author.name,
            category: data.category?.name ?? "",
            tags: data.tags,
            image: data.featuredImage
        }

        return response

    }
    async getAllCategories(): Promise<any> {
        return this.prisma.category.findMany({ where: { isActive: true } });
    }
    async findById(id: string): Promise<BlogPost | null> {


        const data = await this.prisma.blog.findUnique({
            where: { id: id },
            include: {
                author: true,
                category: true,
                comments: {
                    where: { status: "APPROVED" },
                    orderBy: { createdAt: "asc" },
                },
            }
        });
        if (!data) return null;

        const response: BlogPost = {
            id: data.id,
            title: data.title,
            content: data.content,
            excerpt: data.excerpt ?? "",
            date: data.createdAt.toISOString(),
            readTime: this.calcularTiempoLectura(data.content),
            author: data.author.name,
            category: data.category?.name ?? "",
            tags: data.tags,
            image: data.featuredImage
        }

        return response
    }
    async searchBlogs( searchOptions : BlogSearchOptions,paginationOptions: PaginationOptions): Promise<SearchBlogsDTORequest> {
        const { search, tag, category } = searchOptions

        const where: Prisma.BlogWhereInput = {}

        if (search) {
            where.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { excerpt: { contains: search, mode: "insensitive" } },
                { content: { contains: search, mode: "insensitive" } },
            ]
        }


        if (tag) {
            if (where.tags) {
                where.tags.has = tag
            }
        }

        if(category)
        {
            if(where.category)
            {
                where.category.slug = category
            }
        }

        const results = await this.paginate<BlogDTO>(this.prisma.blog, paginationOptions, where, {
            author: true,
            category: true,

            _count: {
                select: {
                    comments: {
                        where: { status: "APPROVED" },
                    },
                },
            },
        })
        const latestConfig = await this.prisma.blogConfiguration.findFirst({
            orderBy: { createdAt: "desc" },
        })
        const reponse = results.data.map((value: BlogDTO) => {

            const blogResponse: BlogResponse = {
                id: value.id,
                slug: value.slug,
                title: value.title,
                excerpt: value.excerpt || "",
                author: value.author.name || "",
                date: value.createdAt,
                category: value.category.name || "",
                status: TraduceStatusToSpanish(value.status || "DRAFT"),
                views: value.views || 0,
                comments: value._count.comments || 0,
                image: value.featuredImage,
                featured: this.IsBlogFeatured(latestConfig, value),
                readTime: this.calcularTiempoLectura(value.content)
            }
            return blogResponse
        });



        function TraduceStatusToSpanish(value: string): string {
            switch (value) {
                case "DRAFT":
                    return "Borrador";
                case "PUBLISHED":
                    return "Publicado";
                case "ARCHIVED":
                    return "Archivado";
                default:
                    return value;
            }

        }

        const reponseSearchBlogs: SearchBlogsDTORequest = {
            total: results.total,
            page: results.page,
            limit: results.limit,
            totalPages: results.totalPages,
            data: reponse,
        }


        return reponseSearchBlogs;
    }

    IsBlogFeatured(configuration: BlogConfiguration | null, Blog: BlogDTO): boolean {
        if (!configuration) return false;


        return Blog._count.comments >= configuration.MinComments
            && Blog.views >= configuration.MinViews
            && this.IsValidBlogDateForFeaturing(Blog.createdAt, configuration.Duration)
    }

    IsValidBlogDateForFeaturing(startDate: string, dias: number): boolean {
        if (!startDate || isNaN(dias)) return false;

        const fechaInicio = new Date(startDate);

        const ahoraUTC = new Date();
        const offsetEnMilisegundos = 4 * 60 * 60 * 1000;
        const ahoraUTCMenos4 = new Date(ahoraUTC.getTime() - offsetEnMilisegundos);

        const diferenciaMs = ahoraUTCMenos4.getTime() - fechaInicio.getTime();
        const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        return diferenciaDias <= dias;
    }
    
    calcularTiempoLectura(texto: string, palabrasPorMinuto: number = 200): number {
        if (!texto || typeof texto !== 'string') {
            return 0
        }
        const palabras = texto.match(/\b\w+\b/g);
        const totalPalabras = palabras ? palabras.length : 0;
        const minutos = totalPalabras / palabrasPorMinuto;
        const minutosEnteros = Math.ceil(minutos);

        return minutosEnteros;

    }
    async addCommentToBlog(data: CreateCommentDto, id: string): Promise<any> {
        const Comment: CreateCommentDto = {
            content: data.content,
            authorName: data.authorName,
            authorEmail: data.authorEmail,
            blogId: id,
        }
        await this.prisma.comment.create({ data: Comment })
    }
    async GetCommentsByBlogId(blogId: string): Promise<BlogComment[] | null> {
        const results = await this.prisma.comment.findMany({
            where: { blogId: blogId, status: 'APPROVED' }
        })
        const dataParsed = results.map((value: Comment) => {
            const data: BlogComment = {
                id: value.id,
                postId: value.blogId ?? "",
                author: value.authorName,
                email: value.authorEmail,
                content: value.content,
                date: value.createdAt.toISOString()
            }
            return data;
        })

        return dataParsed
    }

    async incrementViews(slug: string): Promise<void> {
        await this.prisma.blog.update({
            where: { slug },
            data: {
                views: {
                    increment: 1,
                },
            },
        })
    }


    eliminarDuplicados(estructura: { tags: string[] }[]): string[] {
        const conjuntoUnico = new Set<string>();

        for (const objeto of estructura) {
            for (const tag of objeto.tags) {
                conjuntoUnico.add(tag);
            }
        }

        return Array.from(conjuntoUnico);
    }


    async GetTags(): Promise<any> {
        const tags = await this.prisma.blog.findMany({
            select: { tags: true },
            where: { status: 'PUBLISHED' }
        })


        return this.eliminarDuplicados(tags)
    }

    async GetCategories(): Promise<any> {
        return this.prisma.category.findMany({ where: { isActive: true } })
    }


}

export const blogService = new BlogService()




