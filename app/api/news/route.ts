import { newService } from "@/services/new.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const page = Number.parseInt(searchParams.get("page") || "1")
        const limit = Number.parseInt(searchParams.get("limit") || "10")

        const result = await newService.searchNews({ page, limit })
        return NextResponse.json(result)
    } catch {
        return NextResponse.json({ message: 'error al tratar de recuperar las noticias' }, { status: 500 })
    }
}