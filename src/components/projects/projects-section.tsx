"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
    {
        title: "High-Performance E-Commerce",
        description: "Built a scalable platform handling 10k+ monthly users. Optimized core web vitals and reduced checkout drop-off by 25% through a streamlined custom Stripe integration.",
        tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
        links: { demo: "#", code: "#" },
        image: "/images/ecommerce.png"
    },
    {
        title: "AI-Powered Task Manager",
        description: "Developed an intelligent workflow tool using OpenAI. Resulted in an average of 5 hours saved per week for beta users by automating task prioritization.",
        tags: ["React", "Python", "FastAPI", "OpenAI"],
        links: { demo: "#", code: "#" },
        image: "/images/dashboard.png"
    },
    {
        title: "Real-time Chat Infrastructure",
        description: "Engineered a low-latency communication system supporting 1000+ concurrent connections. Achieved <50ms message delivery using optimized Redis Pub/Sub.",
        tags: ["Next.js", "Socket.io", "Redis", "Tailwind"],
        links: { demo: "#", code: "#" },
        image: "/images/chat.png"
    },
    {
        title: "Interactive 3D Experience",
        description: "A showcase of WebGL performance optimization. Increased user session duration by 40% compared to standard portfolios through engaging React Three Fiber interactions.",
        tags: ["Three.js", "React Three Fiber", "GSAP"],
        links: { demo: "#", code: "#" },
        image: "/images/portfolio-v1.png"
    },
    {
        title: "Decentralized Voting System",
        description: "Architected a tamper-proof voting mechanism on Ethereum. Eliminated potential for voter fraud while ensuring 100% transparency of 500+ processed dummy votes.",
        tags: ["Solidity", "Web3.js", "React", "Hardhat"],
        links: { demo: "#", code: "#" },
        image: "/images/blockchain.png"
    },
    {
        title: "IoT Smart Home Hub",
        description: "Real-time data visualization dashboard processing 1000+ MQTT messages/sec. Enabled sub-second latency control of IoT devices with zero data loss reliability.",
        tags: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
        links: { demo: "#", code: "#" },
        image: "/images/dashboard.png"
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="container flex flex-col items-center py-20 px-4 md:py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                Featured Projects
            </motion.h2>

            <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, _index) => (
                    <motion.div
                        key={_index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: _index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
