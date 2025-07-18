"use client"


import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function FounderPage() {
  useEffect(()=>{
    redirect('founder/1');

  }, []);
  
  return (
    <div className="min-h-screen bg-secondary">
        redirigiendo....
    </div>
  )
}
