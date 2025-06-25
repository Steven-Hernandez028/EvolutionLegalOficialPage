"use client"

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion"
import Image from "next/image"

export function MainProfile() {
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
                            {/* <Image
                                src="/placeholder.svg?height=400&width=300"
                                alt="Dra. María González"
                                width={300}
                                height={400}
                                className="object-cover w-full h-full"
                            /> */}
                            <div className="w-full h-full bg-gray-300"></div>
                        </div>
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="space-y-6 text-justify">
                            <h2 className="text-4xl font-bold text-primary">Mi Historia: Una Pasión Global por el Derecho</h2>
                            <p className="text-xl text-primary/80 leading-relaxed">
                                Mi camino en el mundo del derecho se inició con una profunda pasión por el estudio y un inquebrantable deseo de servir. Desde mis comienzos, he tenido el privilegio de trabajar en diversos sectores económicos, lo que me ha proporcionado una visión integral y una base sólida como profesional. Estas experiencias me han permitido comprender a fondo las necesidades únicas de cada cliente, capacitándome para ofrecer soluciones jurídicas efectivas y verdaderamente personalizadas.                            </p>
                            <p className="text-xl text-primary/80 leading-relaxed">
                                A lo largo de mi carrera, he colaborado con un amplio abanico de empresas y particulares, adquiriendo valiosos conocimientos y habilidades que aplico diariamente en Evolution Legal. Mi compromiso con la comunidad jurídica y mi insaciable sed de aprendizaje me han llevado a ir más allá de las fronteras. He tenido la fortuna de viajar a más de siete países, incluyendo Cuba, México, Perú, Colombia, Estados Unidos, Canadá y, por supuesto, mi amada República Dominicana. Cada cultura legal que he explorado me ha brindado nuevas perspectivas e ideas innovadoras que he integrado en la firma, enriqueciendo constantemente la calidad de nuestros servicios.
                                Esta experiencia internacional es la que nos distingue y nos convierte en la firma legal elegida y preferida por los extranjeros en la República Dominicana. Gracias a estas implementaciones internacionales, nos esforzamos por crear un ambiente donde nuestros clientes de otras latitudes se sientan verdaderamente como en casa, comprendidos y respaldados por un enfoque legal que trasciende fronteras.
                            </p>
                            <p className="text-xl text-primary/80 leading-relaxed">
                                Estoy profundamente arraigada a mis valores familiares y mantengo un firme compromiso ético con la sociedad. Creo fervientemente en la importancia de la integridad, la justicia y la transparencia en todas las facetas de mi vida profesional. Mi dedicación al estudio y al aprendizaje constante me impulsa a mantenerme siempre al día con los cambios y avances en el campo del derecho, garantizando que siempre reciba el mejor asesoramiento y representación posible.
                                En Evolution Legal, nuestra aspiración es inspirar confianza y brindar tranquilidad a nuestros clientes, asegurándoles que sus intereses están en manos de profesionales dedicados, apasionados y con una visión global.
                                Gracias por acompañarnos en este viaje y permitirnos ser parte de sus éxitos y logros.                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
