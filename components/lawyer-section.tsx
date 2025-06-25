"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Users, Scale } from "lucide-react"
import Image from "next/image"

export function LawyerSection() {
  return (
    <section id="lawyer" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Dra. María González - Abogada Fundadora"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-accent/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-primary">Certificada</div>
                  <div className="text-sm text-primary/70">Colegio de Abogados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold"
              >
                Nuestra Fundadora
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-primary"
              >
                Abigail Santos de Thibodeau
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-primary/80 leading-relaxed"
              >
                Bienvenido a Evolution Legal. Gracias por estar aquí. Soy Abigail Santos de Thibodeau, abogada fundadora y CEO de esta firma legal. Quiero compartirte un poco sobre mi trayectoria y la esencia que impulsa a nuestro equipo.
              </motion.p>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Educación</h4>
                  <p className="text-primary/70 text-sm">Magna Cum Laude, Universidad Nacional</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Clientes</h4>
                  <p className="text-primary/70 text-sm">500+ casos exitosos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Especialización</h4>
                  <p className="text-primary/70 text-sm">Derecho Civil y Penal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Reconocimientos</h4>
                  <p className="text-primary/70 text-sm">Abogada del Año 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="border-l-4 border-accent pl-6 italic text-primary/80 text-lg"
            >
              "Mi compromiso es brindar a cada cliente la representación legal que merece, con dedicación personal y
              resultados que superen sus expectativas."
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
