"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { getRoleBasedRedirect } from "@/lib/utils"

export default function Home() {
  const { user, userData, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log("[Home] useEffect triggered", { user, userData, loading });
    if (!loading) {
      if (user && userData) {
        console.log("[Home] Redirecting to role-based page", userData.role);
        router.push(getRoleBasedRedirect(userData.role))
      } else {
        console.log("[Home] Redirecting to /login");
        router.push("/login")
      }
    }
  }, [user, userData, loading, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}

