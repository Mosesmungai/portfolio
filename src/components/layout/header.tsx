"use client"
import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { LoadingOverlay } from "@/components/ui/loading-overlay"

export function Header() {
    const { setTheme, theme } = useTheme()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleNavigation = async (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        setIsLoading(true)

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 700))

        setIsLoading(false)

        // Find the element and scroll to it
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const NavLink = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <a
            href={`#${id}`}
            onClick={(e) => handleNavigation(e, id)}
            className={className}
        >
            {children}
        </a>
    )

    return (
        <>
            <LoadingOverlay isVisible={isLoading} />
            <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="mr-4 hidden md:flex">
                        <NavLink id="hero" className="mr-6 flex items-center space-x-2">
                            <span className="hidden font-bold sm:inline-block">Home</span>
                        </NavLink>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <NavLink id="about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</NavLink>
                            <NavLink id="skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</NavLink>
                            <NavLink id="projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</NavLink>
                            <NavLink id="contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</NavLink>
                        </nav>
                    </div>

                    {/* Mobile Controls Container (Menu + Theme) */}
                    <div className="flex flex-1 items-center justify-end md:justify-end gap-2">

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isMobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ opacity: 0, rotate: -90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-4 w-4" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ opacity: 0, rotate: 90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: -90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-4 w-4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden border-b bg-background overflow-hidden"
                        >
                            <nav className="container flex flex-col items-end space-y-4 py-6 px-4">
                                {["About", "Skills", "Projects", "Contact"].map((item) => (
                                    <NavLink
                                        key={item.toLowerCase()}
                                        id={item.toLowerCase()}
                                        className="text-lg font-medium transition-colors hover:text-primary pr-2 border-r-2 border-transparent hover:border-primary text-right w-full"
                                    >
                                        {item}
                                    </NavLink>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}
