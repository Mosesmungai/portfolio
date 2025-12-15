"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const skillCategories = [
    {
        title: "Frontend Development",
        description: "I craft responsive, high-performance user interfaces with a focus on accessibility and smooth interactions. My expertise lies in building complex single-page applications using modern React patterns.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
        title: "Backend Architecture",
        description: "I design scalable server-side systems and efficient database schemas. I specialize in building secure RESTful APIs and microservices that handle data reliably at scale.",
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Python", "Go", "GraphQL", "Redis"]
    },
    {
        title: "DevOps & Tools",
        description: "I streamline development workflows and ensure system reliability through robust CI/CD pipelines, containerization, and cloud infrastructure management.",
        skills: ["Git", "Docker", "AWS", "Figma", "Vercel", "GitHub Actions", "Networking", "Linux", "Kubernetes"]
    }
]

export function SkillsSection() {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])

    const toggleCategory = (title: string) => {
        setExpandedCategories(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        )
    }

    return (
        <section id="skills" className="container flex flex-col items-center py-20 px-4 md:py-32 bg-muted/50">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                Skills & Technologies
            </motion.h2>

            <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3">
                {skillCategories.map((category, index) => {
                    const isExpanded = expandedCategories.includes(category.title)

                    return (
                        <motion.div
                            key={category.title}
                            layout
                            onClick={() => toggleCategory(category.title)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${isExpanded ? "ring-2 ring-primary" : ""
                                }`}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold">{category.title}</h3>
                                {isExpanded ? (
                                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {category.skills.slice(0, isExpanded ? undefined : 4).map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {!isExpanded && category.skills.length > 4 && (
                                    <span className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground text-muted-foreground">
                                        +{category.skills.length - 4} more
                                    </span>
                                )}
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-4"
                                    >
                                        <div className="pt-4 border-t">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {!isExpanded && (
                                <div className="mt-auto pt-4 text-center text-xs text-muted-foreground/50 opacity-0 transition-opacity group-hover:opacity-100">
                                    Click to view details
                                </div>
                            )}
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
