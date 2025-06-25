
"use client"

import { motion } from "framer-motion"


export function Timeline() {
  
    const timeline = [
      {
        year: "2010",
        event: "Graduación en Derecho",
        description: "Inicio de la carrera profesional en derecho",
      },
      {
        year: "2015",
        event: "Especialización Inmobiliaria",
        description: "Enfoque en derecho inmobiliario y due diligence",
      },
      {
        year: "2018",
        event: "Fundación de Evolution Legal",
        description: "Establecimiento del estudio legal especializado",
      },
      {
        year: "2020",
        event: "Expansión Internacional",
        description: "Presencia en Canadá y Estados Unidos",
      },
      {
        year: "2023",
        event: "Reconocimiento Profesional",
        description: "Membresías en asociaciones internacionales",
      },
    ]
  
    return (

        <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-primary mb-4">Trayectoria Profesional</h2>
                    <p className="text-xl text-primary/80 max-w-3xl mx-auto">
                        Un recorrido de dedicación, crecimiento y logros en el ámbito legal.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 rounded-full" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                    <div className="bg-white rounded-xl p-6 shadow-lg">
                                        <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{item.event}</h3>
                                        <p className="text-primary/70">{item.description}</p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />

                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
