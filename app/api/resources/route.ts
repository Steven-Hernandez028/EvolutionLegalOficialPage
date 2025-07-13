import { blogService } from "@/services/blog.service";
import { resourceService } from "@/services/resources.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
     
        const result = await resourceService.getAllResources();
        return NextResponse.json(result)
    } catch {
        return NextResponse.json({ message: 'error al tratar de recuperar los recursos' }, { status: 500 })
    }
}