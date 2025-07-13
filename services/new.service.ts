import { BlogStatus, News, NewsConfiguration, Prisma, Comment } from "@prisma/client";
import { BaseService } from "./base.service";
import { PaginationOptions } from "./interfaces/pagination.options"
export interface NewsSearchOptions {
    search?: string
    categoryId?: string
    status?: BlogStatus
    isFeatured?: boolean
    authorId?: string
    category?: string;
    tag?: string;
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
export interface NewsSearchOptions {
    search?: string
    categoryId?: string
    status?: BlogStatus
    isFeatured?: boolean
    authorId?: string
    category?: string;
    tag?: string;
}
interface NewDTO {
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
export interface CreateCommentDto {
    authorName: string
    authorEmail: string
    content: string
    blogId?: string
    newsId?: string
    ipAddress?: string
    userAgent?: string
}
export interface NewsComment {
    id: string
    postId: string
    author: string
    email: string
    content: string
    date: string
}
export interface NewPost {
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
export class NewService extends BaseService<News> {

    async searchNews(paginationOptions: PaginationOptions): Promise<SearchBlogsDTORequest> {

        const where: Prisma.BlogWhereInput = {}


        const results = await this.paginate<NewDTO>(this.prisma.news, paginationOptions, where, {
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
        const reponse = results.data.map((value: NewDTO) => {

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
                featured: this.IsNewFeatured(latestConfig, value),
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

    IsNewFeatured(configuration: NewsConfiguration | null, Blog: NewDTO): boolean {
        if (!configuration) return false;


        return Blog._count.comments >= configuration.MinComments
            && Blog.views >= configuration.MinViews
            && this.IsValidNewDateForFeaturing(Blog.createdAt, configuration.Duration)
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
    IsValidNewDateForFeaturing(startDate: string, dias: number): boolean {
        if (!startDate || isNaN(dias)) return false;

        const fechaInicio = new Date(startDate);

        const ahoraUTC = new Date();
        const offsetEnMilisegundos = 4 * 60 * 60 * 1000;
        const ahoraUTCMenos4 = new Date(ahoraUTC.getTime() - offsetEnMilisegundos);

        const diferenciaMs = ahoraUTCMenos4.getTime() - fechaInicio.getTime();
        const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        return diferenciaDias <= dias;
    }


    async findBySlug(slug: string): Promise<NewPost | null> {

        const data = await this.prisma.news.findUnique({
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

        const response: NewPost = {
            id: data.id,
            title: data.title,
            content: data.content ?? "",
            excerpt: data.excerpt ?? "",
            date: data.createdAt.toISOString(),
            readTime: this.calcularTiempoLectura(data.content ?? ""),
            author: data.author.name,
            category: data.category?.name ?? "",
            tags: data.tags,
            image: data.featuredImage
        }

        return response

    }
    async incrementViews(slug: string): Promise<void> {
        await this.prisma.news.update({
            where: { slug },
            data: {
                views: {
                    increment: 1,
                },
            },
        })
    }
    async addCommentToBlog(data: CreateCommentDto, id: string): Promise<any> {
        const Comment: CreateCommentDto = {
            content: data.content,
            authorName: data.authorName,
            authorEmail: data.authorEmail,
            newsId: id,
        }
        const news = await this.prisma.news.findUnique({
            where: { slug: id }
        })
        if (news) {
            Comment.newsId = news.id
        }

        await this.prisma.comment.create({ data: Comment })
    }
    async GetCommentsByNewId(newsId: string): Promise<NewsComment[] | null> {

        const news = await this.prisma.news.findUnique({
            where: { slug: newsId }
        })

        console.log(news)
        if (news) {

            const results = await this.prisma.comment.findMany({
                where: { newsId : news.id, status: 'APPROVED' }
            })
            console.log(newsId)

            const dataParsed = results.map((value: Comment) => {
                const data: NewsComment = {
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
        else {
            return null;
        }
    }
}

export const newService = new NewService();