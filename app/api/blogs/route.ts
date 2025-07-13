import { blogService } from "@/services/blog.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const page = Number.parseInt(searchParams.get("page") || "1")
        const limit = Number.parseInt(searchParams.get("limit") || "10")
        const search = searchParams.get("search") || undefined
        const tag = searchParams.get("tag") || undefined
        const category = (searchParams.get("category") as any) || undefined

        const result = await blogService.searchBlogs({ search,tag,category }, { page, limit })
        return NextResponse.json(result)
    } catch {
        return NextResponse.json({ message: 'error al tratar de recuperar los blogs' }, { status: 500 })
    }
}