"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { useEffect, useState } from "react"

 
export  interface FounderProps { 
  url  : string  
}
export function Specializations(  { url } : FounderProps ) {

    const { t,getArrayObjects,getArrayStrings,language } = useLanguage();
    const [specializations, setSpecializations ] = useState<string[]>([]);
    const [achievements, setAchievements ] = useState<any>([]);
    
    useEffect(()=>{
          setSpecializations(getArrayStrings(`${url}.specializations`));
          setAchievements(getArrayObjects(`${url}.achievements`));

    }, [language])




  return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">{t("founder.specializations")}</h2>
              <div className="grid gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-primary/80 font-medium">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">{t("founder.achievements")}</h2>
              <div className="space-y-6">
                {achievements.map((achievement : any, index : any) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-accent font-bold">{achievement.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-1">{achievement.title}</h3>
                        <p className="text-primary/70 text-sm">{achievement.organization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
