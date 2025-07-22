"use client"


import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function FounderPage() {
  useEffect(()=>{
    redirect('founder/abigail-santos-de-thibodeau');

  }, []);
  
  return (
    <div className="min-h-screen bg-secondary">
        redirigiendo....
    </div>
  )
}
