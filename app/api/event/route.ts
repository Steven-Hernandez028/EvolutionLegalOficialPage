import { eventService } from "@/services/event.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const result = await eventService.GetAllEvent();
        return NextResponse.json(result)
    } catch(error) {
        console.error('Error en GET:', error); // Log del error
        return NextResponse.json({ 
            message: error instanceof Error ? error.message : 'Error al tratar de recuperar los eventos' 
        }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const res = await request.json();
        const result = await eventService.SubscribeToEvent(res);
        console.log('Resultado:', result)
        return NextResponse.json(result)
    } catch(error) {
        console.error('Error en POST:', error); 
        
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        console.error('Mensaje de error:', errorMessage); 
    
        return NextResponse.json({ 
            message: errorMessage 
        }, { status: 500 })
    }
}