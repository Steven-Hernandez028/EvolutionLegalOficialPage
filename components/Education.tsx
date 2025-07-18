"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useEffect, useState } from "react"


export  interface FounderProps { 
  url  : string  
}
export function Education( { url } : FounderProps ) {
    const { t, getArrayObjects,language} = useLanguage();
  
  const [education, setEducation] = useState<any>([]);
  
  useEffect(()=>{
    setEducation( getArrayObjects("ceo[0].educationList"))
  }, [language])

  return (
 
    <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t("founder.education")}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto"> {t(`${url}.educationSubtitle`)}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu :any, index : any) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-primary/80 mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">{edu.year}</span>
                  <span className="text-sm text-primary/60 bg-accent/10 px-2 py-1 rounded">{edu.honor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  )
}

