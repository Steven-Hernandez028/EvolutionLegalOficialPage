
import { blogService } from "@/services/blog.service";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;

    try {
        const blog = await blogService.GetCommentsByBlogId(id);
        if (!blog) {
            return NextResponse.json({ error: "Resource not found" }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ error: "Failed to fetch Resources" }, { status: 500 });
    }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const data = await request.json();
    const { id } = await props.params;
    try {
        const blog = await blogService.addCommentToBlog(data, id);
        return NextResponse.json({message: 'guardado'});

    } catch (error) {
        console.log(error)
    }
}