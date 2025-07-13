import type { Event, EventRegistration } from "@prisma/client"
import { BaseService } from "./base.service";


export interface EventDTO {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
}

export interface EventRegistrationDTO {
    attendeeName: string;
    attendeeEmail: string;
    attendeePhone: string;
    company: string;
    notes: string;
    eventId: string;

}

export class EventService extends BaseService<EventRegistration> {

 async SubscribeToEvent(Body: EventRegistrationDTO): Promise<boolean | undefined> {
        try {
            const event = await this.prisma.event.findFirst({
                include: { registrations: true },
                where: { id: Body.eventId },
            })
            
            if (!event) {
                throw new Error('Este Evento no existe actualmente')
            }

            if (event.registrations.filter(a => a.status == 'CONFIRMED').length + 1 > (event.maxAttendees ?? 100)) {
                throw new Error('Este evento esta completo');
            }

            if (event.registrations.find(a => a.attendeeEmail === Body.attendeeEmail && a.status === 'CONFIRMED')) {
                throw new Error('Este correo ha sido confirmado para este evento');
            }
            
            const SetUpData = { ...Body, eventId: event.id }
            const data = await this.prisma.eventRegistration.create({ data: SetUpData })
            return true;
            
        } catch (error) {
            console.error('Error en SubscribeToEvent:', error);
            throw error;
        }
    }


    async GetAllEvent(): Promise<any> {

        const data = await this.prisma.event.findMany({
            where: { status: { in: ['ACTIVE', 'SCHEDULED'] } }
        })
        const results = data.map((a: Event) => {
            const eventDTO: EventDTO = {
                id: a.id,
                title: a.title,
                date: a.startDate.toISOString().split('T')[0],
                time: a.startDate.toISOString().split('T')[1],
                location: a.location ?? "Virtual",
                type: a.type

            }
            return eventDTO
        })

        return results
    }

}

export const eventService = new EventService();