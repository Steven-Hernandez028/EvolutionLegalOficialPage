import { blogService } from "@/services/blog.service";
import { resourceService } from "@/services/resources.service";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
     const result = await resourceService.incrementViews(data.id);
        return NextResponse.json({message : 'valor incrementado'})
    } catch {
        return NextResponse.json({ message: 'error al tratar de recuperar los recursos' }, { status: 500 })
    }
}