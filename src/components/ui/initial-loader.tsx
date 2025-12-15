"use client"

import { useEffect, useState } from "react"
import { LoadingOverlay } from "@/components/ui/loading-overlay"

export function InitialLoader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate initial load
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 800) // Slightly longer than nav for initial impact

        return () => clearTimeout(timer)
    }, [])

    return <LoadingOverlay isVisible={isLoading} />
}
