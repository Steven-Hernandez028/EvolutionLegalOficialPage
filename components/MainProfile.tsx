"use client"

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion"
import Image from "next/image"

export  interface FounderProps { 
  url  : string  
}
export function MainProfile({ url } : FounderProps) {
    const { t } = useLanguage();

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-start md:gap-10">

                    {/* Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-0 md:w-[300px] md:flex-shrink-0"
                    >
                        <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                            <Image
                                src={t(`${url}.image`)}
                                alt="Abigail Santos de Thibodeau"
                                width={300}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                            <div className="w-full h-full bg-gray-300"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="space-y-6 text-justify">
                            <div dangerouslySetInnerHTML={{ __html: t(`${url}.MainProfileDescription`) }} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
