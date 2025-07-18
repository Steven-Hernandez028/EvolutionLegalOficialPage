"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { BottomBar } from "@/components/bottom-bar"
import { useRef, useEffect } from "react"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const slideTransition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
}

export default function ExclusiveClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  // Define page order for directional sliding
  const pageOrder = [
    "/exclusive-client-view",
    "/exclusive-client-view/home",
    "/exclusive-client-view/about",
    "/exclusive-client-view/founder",
    "/exclusive-client-view/schedule",
    "/exclusive-client-view/blog",
    "/exclusive-client-view/news",
    "/exclusive-client-view/resources",
    "/exclusive-client-view/contact",
    "/exclusive-client-view/links",
    "/exclusive-client-view/privacy",
    "/exclusive-client-view/terms",
    "/exclusive-client-view/cookies",
  ]

  const currentIndex = pageOrder.indexOf(pathname)
  const prevIndex = useRef(currentIndex)

  useEffect(() => {
    prevIndex.current = currentIndex
  }, [currentIndex])

  const direction = currentIndex > prevIndex.current ? 1 : -1

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div className="relative z-40">
        <NavbarAndTopBar/>
        
      </div>
      <br />
      <br />
      <br />
      {/* 
       */}
      <div ref={containerRef} className="min-h-screen relative z-10 pt-16 pb-20 ">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={pathname}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full min-h-screen"
          > 
            {children}
            <br />
            <br />
            <br />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-50">
        <BottomBar />
      </div>
    </div>
  )
}
