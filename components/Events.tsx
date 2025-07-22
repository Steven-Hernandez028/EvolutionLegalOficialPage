import { motion } from "framer-motion";
import { Bell, Calendar, Clock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";


interface INewEvents {
    setSelectedEvent: (value: any) => void;
    selectedEvent : any
}

export interface EventDTO {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
}
export default function NewsEvents({ selectedEvent, setSelectedEvent } : INewEvents) {

    const [events, setEvents] = useState<EventDTO[]>([]);

    const fetchData = async()=>{
        try{

            const res = await fetch('/api/event', {method: 'GET'})
            const data = await res.json();
            setEvents(data)

        }catch(error)
        {
            console.log(error)
        }
    }



    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">Próximos Eventos</h2>
                        <p className="text-primary/80 max-w-2xl mx-auto">
                            Únete a nuestros eventos educativos y talleres especializados.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events && events?.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={()=>setSelectedEvent(event)}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                        <Bell className="h-6 w-6 text-accent" />
                                    </div>
                                    <div
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${event.type === "Online" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                                            }`}
                                    >
                                        {event.type}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-primary mb-3">{event.title}</h3>

                                <div className="space-y-2 text-sm text-primary/70">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(event.date).toLocaleDateString("es-ES")}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ExternalLink className="h-4 w-4" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}