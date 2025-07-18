


 "use client"
 export default function  AboutPage () {
  return (
    <>
    </>
  )
 }

// import { motion } from "framer-motion"
// import { Target, Eye, Heart, Shield, Award, Users, Clock, CheckCircle } from "lucide-react"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { useLanguage } from "@/contexts/language-context"
// import Image from "next/image"

// export default function AboutPage() {
//   const { t } = useLanguage()

//   const values = [
//     {
//       icon: Heart,
//       title: t("about.values.integrity"),
//       description: "Actuamos con honestidad y transparencia en cada caso, manteniendo los más altos estándares éticos.",
//     },
//     {
//       icon: Award,
//       title: t("about.values.excellence"),
//       description:
//         "Buscamos la excelencia en cada aspecto de nuestro trabajo, desde la investigación hasta la representación.",
//     },
//     {
//       icon: Shield,
//       title: t("about.values.commitment"),
//       description: "Nos comprometemos completamente con cada cliente, dedicando el tiempo y recursos necesarios.",
//     },
//     {
//       icon: CheckCircle,
//       title: t("about.values.transparency"),
//       description: "Mantenemos comunicación clara y honesta sobre el progreso y expectativas de cada caso.",
//     },
//   ]

//   const stats = [
//     { number: "10+", label: t("hero.stats.experience") },
//     { number: "7+", label: t("hero.stats.countries") },
//     { number: "98%", label: t("hero.stats.satisfaction") },
//     { number: "24/7", label: t("company.hours") },
//   ]

//   return (
//     <div className="min-h-screen bg-secondary">
//       <Navbar />

//       {/* Header */}
//       <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
//             <div className="flex justify-center mb-6">
//               <Image
//                 src="/logo.avif"
//                 alt="Evolution Legal Advantage Logo"
//                 width={80}
//                 height={80}
//                 className="rounded-full"
//               />
//             </div>
//             <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("about.title")}</h1>
//             <div className="text-2xl text-accent font-semibold">{t("about.subtitle")}</div>
//             <p className="text-xl text-white/80 max-w-3xl mx-auto">{t("about.description")}</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Mission */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg"
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
//                   <Target className="h-6 w-6 text-accent" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-primary">{t("about.mission.title")}</h2>
//               </div>
//               <p className="text-primary/80 leading-relaxed">{t("about.mission.content")}</p>
//             </motion.div>

//             {/* Vision */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg"
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
//                   <Eye className="h-6 w-6 text-accent" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-primary">{t("about.vision.title")}</h2>
//               </div>
//               <p className="text-primary/80 leading-relaxed">{t("about.vision.content")}</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-primary">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-4">{t("about.values.title")}</h2>
//             <p className="text-xl text-white/80 max-w-3xl mx-auto">
//               Los principios que guían nuestro trabajo y definen nuestra identidad profesional.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-secondary rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <value.icon className="h-8 w-8 text-accent" />
//                 </div>
//                 <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
//                 <p className="text-primary/70 text-sm leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Memberships */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-primary mb-4">{t("about.memberships.title")}</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center"
//             >
//               <h3 className="font-bold text-primary mb-2">AEI</h3>
//               <p className="text-primary/80 text-sm">{t("about.memberships.aei")}</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center"
//             >
//               <h3 className="font-bold text-primary mb-2">AEA</h3>
//               <p className="text-primary/80 text-sm">{t("about.memberships.aea")}</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center"
//             >
//               <h3 className="font-bold text-primary mb-2">Colegio de Abogados</h3>
//               <p className="text-primary/80 text-sm">{t("about.memberships.colegio")}</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Resultados</h2>
//             <p className="text-xl text-primary/80 max-w-3xl mx-auto">
//               Los números que respaldan nuestro compromiso con la excelencia legal.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
//                 <div className="text-primary/80 font-medium">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Preview */}
//       <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-primary mb-4">Nuestro Equipo</h2>
//             <p className="text-xl text-primary/80 max-w-3xl mx-auto">
//               Profesionales dedicados con la experiencia y pasión necesarias para defender tus derechos.
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative w-full h-96 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Equipo LegalStudio"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-3xl font-bold text-primary">Experiencia que Marca la Diferencia</h3>
//               <p className="text-primary/80 leading-relaxed">
//                 Nuestro equipo está formado por abogados especializados en diferentes áreas del derecho, unidos por el
//                 compromiso de brindar el mejor servicio legal a nuestros clientes.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <Users className="h-5 w-5 text-accent" />
//                   <span className="text-primary/80">Equipo multidisciplinario</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="h-5 w-5 text-accent" />
//                   <span className="text-primary/80">Disponibilidad 24/7</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Award className="h-5 w-5 text-accent" />
//                   <span className="text-primary/80">Certificaciones profesionales</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
