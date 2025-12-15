"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experience = [
    {
        company: "Freelance / Self-Employed",
        role: "Senior Full Stack Developer",
        date: "2023 - Present",
        description: "Delivering custom web solutions for international clients.",
        achievements: [
            "Architected and deployed 5+ scalable web applications using Next.js and Cloudflare, reducing hosting costs by 30%.",
            "Improved client SEO rankings, driving a 40% increase in organic traffic through performance optimization and semantic HTML.",
            "Integrated complex payment gateways (Stripe/PayPal), handling over $10k in monthly transactions securely."
        ]
    },
    {
        company: "Tech Solutions Ltd (Placeholder)",
        role: "Frontend Developer",
        date: "2021 - 2023",
        description: "Collaborated with cross-functional teams to build responsive user interfaces.",
        achievements: [
            "Reduced initial page load time by 60% by implementing code-splitting and asset optimization.",
            "Developed a reusable component library, increasing team development velocity by 25%.",
            "Mentored 2 junior developers, conducting code reviews and improving code quality standards."
        ]
    }
]

export function ExperienceSection() {
    return (
        <section id="experience" className="container flex flex-col items-center py-20 px-4 md:py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                Work Experience
            </motion.h2>

            <div className="w-full max-w-4xl relative border-l border-muted ml-4 md:ml-0">
                {experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-12 ml-6 md:ml-8 relative"
                    >
                        {/* Dot */}
                        <span className="absolute -left-[35px] top-0 md:-left-[43px] flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                            <Briefcase className="h-2 w-2 md:h-3 md:w-3 text-primary-foreground" />
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                {item.date}
                            </span>
                        </div>

                        <h4 className="text-lg font-semibold text-muted-foreground mb-4">{item.company}</h4>

                        <ul className="space-y-3 list-disc list-outside ml-4 text-muted-foreground">
                            {item.achievements.map((achievement, i) => (
                                <li key={i} className="pl-1">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
