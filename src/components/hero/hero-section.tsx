"use client"

import { AnimatedText } from "./animated-text"
import { Scene3D } from "./scene-3d"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-20">
            <div className="container z-10 flex flex-col items-center px-4 text-center md:px-6">
                <AnimatedText text="I build scalable web applications for forward-thinking brands" />
                <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Hi, I&apos;m Moses Mungai. Full Stack Developer specializing in converting complex problems into elegant, high-performance solutions that drive growth.
                </p>

            </div>
            <div className="relative mt-8 h-[300px] w-full max-w-4xl md:h-[400px]">
                <Scene3D />
            </div>
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <ArrowDown className="h-8 w-8 text-foreground" />
            </motion.div>
        </section>
    )
}
