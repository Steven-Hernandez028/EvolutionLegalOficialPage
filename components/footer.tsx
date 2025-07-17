"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Scale, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Footer() {
  const { t } = useLanguage()
  const whatsappNumber = "18092611453"
  const whatsappNumberToShow = "+1 (809) 261-1453"
  const email = "contact@evolutionlegaladvantage.com"
  const address = "Puerto Plata RD, Canadá y Estados Unidos"

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-2">
                   <Image
                              src="/logo.avif"
                              alt="Evolution Legal Advantage Logo"
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                <span className="text-2xl font-bold text-white">{t("company.name")}</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                {t("company.slogan")} 
                {/* {t("company.tagline")} */}
              </p>

              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/legalstudio_oficial"
                  target="_blank"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com/legalstudio"
                  target="_blank"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
        
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Navegación</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#lawyer" className="text-white/80 hover:text-accent transition-colors">
                    Nuestra Abogada Fundadora
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Nuestros Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/80 hover:text-accent transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#instagram" className="text-white/80 hover:text-accent transition-colors">
                    Instagram
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Derecho Civil
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Derecho Penal
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Derecho Corporativo
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Derecho Familiar
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Derecho Laboral
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-accent transition-colors">
                    Mediación
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white/80">{address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <Link href={`tel:${whatsappNumber}`} className="text-white/80 hover:text-accent transition-colors">
                    {whatsappNumberToShow}
                  </Link>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <Link href={`mailto:${email}`} className="text-white/80 hover:text-accent transition-colors">
                    {email}
                  </Link>
                </div> */}
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  {/* Actualizar la información de contacto */}
                  <div className="text-white/80">
                    <div>Lunes - Domingo</div>
                    <div>{t("company.hours")}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              {/* Actualizar el enlace de WhatsApp */}
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios legales")}`}
                target="_blank"
                className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{t("common.whatsapp")}</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Actualizar el copyright */}
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} {t("company.name")}. Todos los derechos reservados.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/cookies" className="hover:text-accent transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
