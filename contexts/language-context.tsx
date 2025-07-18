"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getArrayObjects: (key: string) => any[]
  getArrayStrings: (key: string) => string[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      // Check if k is an array index, e.g., items[0]
      const arrayMatch = k.match(/^(\w+)\[(\d+)\]$/)
      if (arrayMatch) {
        const prop = arrayMatch[1]
        const index = parseInt(arrayMatch[2], 10)
        value = value?.[prop]?.[index]
      } else {
        value = value?.[k]
      }
    }

    return (typeof value === "string" ? value : key)
  }

  const getArrayObjects = (key: string): any[] => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      // Check if k is an array index, e.g., items[0]
      const arrayMatch = k.match(/^(\w+)\[(\d+)\]$/)
      if (arrayMatch) {
        const prop = arrayMatch[1]
        const index = parseInt(arrayMatch[2], 10)
        value = value?.[prop]?.[index]
      } else {
        value = value?.[k]
      }
    }

    // Verificar que el valor sea un array y que contenga objetos
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && value[0] !== null) {
      return value
    }

    // Si no es un array de objetos, retornar array vacío
    return []
  }

  const getArrayStrings = (key: string): string[] => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      // Check if k is an array index, e.g., items[0]
      const arrayMatch = k.match(/^(\w+)\[(\d+)\]$/)
      if (arrayMatch) {
        const prop = arrayMatch[1]
        const index = parseInt(arrayMatch[2], 10)
        value = value?.[prop]?.[index]
      } else {
        value = value?.[k]
      }
    }

    // Verificar que el valor sea un array y que contenga strings
    if (Array.isArray(value) && value.every(item => typeof item === "string")) {
      return value
    }

    // Si no es un array de strings, retornar array vacío
    return []
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, getArrayObjects, getArrayStrings }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}