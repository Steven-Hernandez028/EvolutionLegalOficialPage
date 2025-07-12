

import { blogService } from "@/services/blog.service";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    try {
        const blog = await blogService.incrementViews(id);
        return NextResponse.json({message: 'on view'});

    } catch (error) {
        console.log(error)
    }
}