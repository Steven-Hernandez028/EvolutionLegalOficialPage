"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, BookOpen, Users, Scale, ArrowRight } from "lucide-react"
import Image from "next/image"

export function LawyerSection() {
  const { t } = useLanguage();

  const lawyers = [
    {
      id: 1,
      name: t("ceo[0].name"),//"Fundadora",,
      title: t("ceo[0].lawyerTitle"),//"Fundadora",
      image : t("ceo[0].image"),//"Fundadora",
      description: t("ceo[0].lawyerDescription"),//"Abogada fundadora y CEO de Evolution Legal con más de 15 años de experiencia en derecho civil y penal."
    },
    {
      id: 2,
      name:  t("ceo[1].name"),//"Fundadora",,
      title: t("ceo[1].lawyerTitle"),//"Co-Fundador",
      image:  t("ceo[1].image"),//"Fundadora",
      description: t("ceo[1].lawyerDescription"),//"Abogada fundadora y CEO de Evolution Legal con más de 15 años de experiencia en derecho civil y penal."
    }
  ]

  return (
    <section id="lawyer" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            {
              t("lawyer.section.title")
            }
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
               {
              t("lawyer.section.subtitle")
            }
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
             {
              t("lawyer.section.description")
            }
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                  
         
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {lawyer.name}
                      </h3>
                      <p className="text-accent font-semibold text-lg">
                        {lawyer.title}
                      </p>
                    </div>

                    <p className="text-primary/70 leading-relaxed">
                      {lawyer.description}
                    </p>

                  
                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>{t("common.showMore")}</span> 
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      

      </div>
    </section>
  )
}