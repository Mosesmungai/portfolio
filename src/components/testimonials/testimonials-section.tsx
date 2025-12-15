"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "Moses transformed our outdated platform into a modern, high-speed application. His attention to detail resulted in a 30% increase in user retention. Highly recommended.",
        author: "Wanjiku Kimani",
        role: "Product Lead",
        company: "Safaricom PLC"
    },
    {
        quote: "An exceptional developer who understands both the code and the business. The blockchain voting system he built was secure, transparent, and flawless during our pilot.",
        author: "Brian Omondi",
        role: "Senior Engineer",
        company: "Equity Bank Digital"
    },
    {
        quote: "Fast, reliable, and communicative. The dashboard he built for our IoT data handles massive traffic without breaking a sweat. A true professional.",
        author: "Kevin Mutua",
        role: "CEO",
        company: "TechSavvy Nairobi"
    }
]

export function TestimonialsSection() {
    return (
        <section className="container flex flex-col items-center py-20 px-4 md:py-32 bg-muted/30">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                What People Say
            </motion.h2>

            <div className="grid w-full max-w-6xl gap-8 md:grid-cols-3">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col justify-between rounded-xl border bg-card p-8 shadow-sm"
                    >
                        <div className="mb-6">
                            <Quote className="h-8 w-8 text-primary/40 mb-4" />
                            <p className="text-muted-foreground italic leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {item.author[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">{item.author}</h4>
                                <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
