"use client"

import { Phone, Mail, Github, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
    return (
        <section id="contact" className="container flex flex-col items-center py-12 px-4 md:py-16">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-12">
                {/* Email */}
                <a href="mailto:mungaimoses394@gmail.com" className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                        <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium">mungaimoses394@gmail.com</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/254741152893" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary group-hover:bg-green-500/10 transition-colors">
                        <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-medium">+254 741 152 893</span>
                </a>

                {/* LinkedIn Placeholder */}
                <a href="https://www.linkedin.com/in/moses-mungai-g/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-[#0a66c2] transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary group-hover:bg-[#0a66c2]/10 transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                </a>

                {/* GitHub Placeholder */}
                <a href="https://github.com/Mosesmungai" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary group-hover:bg-foreground/10 transition-colors">
                        <Github className="h-5 w-5" />
                    </div>
                    <span className="font-medium">GitHub</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Nairobi, Kenya</span>
                </div>
            </div>
        </section>
    )
}
