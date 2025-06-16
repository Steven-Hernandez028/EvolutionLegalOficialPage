import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LegalStudio - Servicios Legales Profesionales",
  description:
    "Defendemos tus derechos con experiencia, dedicación y resultados comprobados. Tu caso merece la mejor representación legal.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>

          <LanguageProvider>
            {children}
            <CookieConsent />
          </LanguageProvider>

      </body>
    </html>
  )
}
