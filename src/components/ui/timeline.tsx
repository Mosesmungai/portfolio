"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
    children: React.ReactNode
    className?: string
}

export function Timeline({ children, className }: TimelineProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div ref={ref} className={cn("relative flex w-full max-w-4xl flex-col pl-8 md:pl-0", className)}>
            <motion.div
                className="absolute left-[15px] top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:-ml-px"
                style={{ scaleY, transformOrigin: "top" }}
            >
                <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
            </motion.div>
            {children}
        </div>
    )
}

interface TimelineItemProps {
    children: React.ReactNode
    side?: "left" | "right"
    className?: string
}

export function TimelineItem({ children, side = "left", className }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "relative mb-8 flex w-full flex-col md:mb-16 md:w-1/2",
                // Mobile: Always left aligned content (pl-4 relative to parent pl-8) -> Total visible indent
                // Desktop: Alternating
                side === "right" ? "md:self-end md:pl-12" : "md:pr-12",
                className
            )}
        >
            <div
                className={cn(
                    "absolute top-0 h-4 w-4 rounded-full border-2 border-primary bg-background",
                    // Mobile: Dot position relative to item start. 
                    // Item starts at pl-8 (32px) of parent. Line is at 15px.
                    // Dot center needs to be at 15px. Dot w=16px (half=8).
                    // 32px (item start) + x (dot pos) + 8 = 15.
                    // 40 + x = 15 => x = -25px.
                    // Desktop: kept as before
                    side === "left" ? "left-[-25px] md:right-[-8px] md:left-auto" : "left-[-25px] md:left-[-8px]"
                )}
            />
            {children}
        </motion.div>
    )
}
