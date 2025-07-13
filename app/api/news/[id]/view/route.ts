

import { blogService } from "@/services/blog.service";
import { newService } from "@/services/new.service";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    try {
        console.log(id)
        const blog = await newService.incrementViews(id);
        return NextResponse.json({message: 'on view'});

    } catch (error) {
        console.log(error)
    }
}