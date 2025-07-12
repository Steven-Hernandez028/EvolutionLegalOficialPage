import { blogService } from "@/services/blog.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const result = await blogService.GetTags();
        return NextResponse.json(result)
    } catch {
        return NextResponse.json({ message: 'error al tratar de recuperar los blogs' }, { status: 500 })
    }
}