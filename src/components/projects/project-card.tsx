"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    links: {
        demo: string
        code: string
    }
    image?: string // TODO: Pass image URL here
}

export function ProjectCard({ title, description, tags, links, image }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg"
        >
            {/* TODO: Add Image Here. Example: <Image src={image} alt={title} fill className="object-cover" /> */}
            <div className="aspect-video w-full bg-muted/50 transition-colors group-hover:bg-muted flex items-center justify-center text-muted-foreground">
                {image ? (
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                ) : (
                    <span>Project Image Placeholder</span>
                )}
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mb-4 text-muted-foreground">{description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Link
                        href={links.code}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <Github className="h-4 w-4" />
                        Code
                    </Link>
                    <Link
                        href={links.demo}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
