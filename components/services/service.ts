import { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  process: string[]
  duration: string
  price: string
}