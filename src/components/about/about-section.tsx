"use client"

import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <section id="about" className="container flex flex-col items-center py-20 px-4 md:py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                My Journey
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12 h-64 w-64 overflow-hidden rounded-full border-4 border-muted"
            >
                <img src="/images/profile-real.jpg" alt="Profile" className="h-full w-full object-cover" />
            </motion.div>

            <Timeline>
                <TimelineItem side="left">
                    <h3 className="text-xl font-bold">The Beginning</h3>
                    <p className="mt-2 text-muted-foreground">
                        Started coding with simple HTML & CSS, fascinated by how lines of code could create visual experiences on the screen.
                    </p>
                </TimelineItem>
                <TimelineItem side="right">
                    <h3 className="text-xl font-bold">Deep Dive into React</h3>
                    <p className="mt-2 text-muted-foreground">
                        Immersed myself in the React ecosystem, mastering hooks, state management, and modern component patterns.
                    </p>
                </TimelineItem>
                <TimelineItem side="left">
                    <h3 className="text-xl font-bold">Full Stack Evolution</h3>
                    <p className="mt-2 text-muted-foreground">
                        Expanded my skills to the backend with Node.js and databases, becoming a capable problem solver across the entire stack.
                    </p>
                </TimelineItem>
                <TimelineItem side="right">
                    <h3 className="text-xl font-bold">Future Tech</h3>
                    <p className="mt-2 text-muted-foreground">
                        Currently exploring 3D web experiences with Three.js and pushing the boundaries of interactive UI design.
                    </p>
                </TimelineItem>
            </Timeline>
        </section>
    )
}
