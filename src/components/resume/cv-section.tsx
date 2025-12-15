"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, Loader2 } from "lucide-react"
import jsPDF from "jspdf"

export function CVSection() {
    const [isGenerating, setIsGenerating] = useState(false)

    const generatePDF = async () => {
        setIsGenerating(true)
        try {
            const doc = new jsPDF()
            const pageWidth = doc.internal.pageSize.getWidth()
            const pageHeight = doc.internal.pageSize.getHeight()

            // --- Colors ---
            const sidebarColor = "#1e293b" // Slate-800
            const primaryColor = "#2563eb" // Blue-600
            const textColorDark = "#334155" // Slate-700
            const textColorLight = "#ffffff"
            const textColorGray = "#64748b" // Slate-500

            // --- Layout Config ---
            const sidebarWidth = 70
            const margin = 10
            const mainContentX = sidebarWidth + margin + 5
            const mainContentWidth = pageWidth - sidebarWidth - (margin * 2)

            // --- Draw Sidebar ---
            doc.setFillColor(sidebarColor)
            doc.rect(0, 0, sidebarWidth, pageHeight, "F")

            // ================== SIDEBAR CONTENT ==================

            let sidebarY = 20

            // 1. Profile Image
            try {
                const img = new Image()
                img.src = "/images/profile-real.jpg"
                await new Promise((resolve, reject) => {
                    img.onload = resolve
                    img.onerror = reject
                })
                const imgSize = 40
                const imgX = (sidebarWidth - imgSize) / 2

                doc.addImage(img, "JPEG", imgX, sidebarY, imgSize, imgSize)
                doc.setDrawColor(textColorLight)
                doc.setLineWidth(1)
                doc.rect(imgX - 1, sidebarY - 1, imgSize + 2, imgSize + 2, "S")

                sidebarY += imgSize + 15
            } catch (e) {
                console.error("Could not load profile image", e)
                sidebarY += 10
            }

            // 2. Contact Info
            doc.setTextColor(textColorLight)
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("CONTACT", 10, sidebarY)
            sidebarY += 5

            doc.setDrawColor(primaryColor)
            doc.line(10, sidebarY, sidebarWidth - 10, sidebarY)
            sidebarY += 8

            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)

            // Details
            doc.text("mungaimoses394@gmail.com", 10, sidebarY)
            sidebarY += 6
            doc.text("+254 741 152 893", 10, sidebarY)
            sidebarY += 6
            doc.text("Nairobi, Kenya", 10, sidebarY)
            sidebarY += 6
            doc.text("Dob: 20 July 2000", 10, sidebarY)
            sidebarY += 6
            // Socials
            doc.text("github.com/Mosesmungai", 10, sidebarY)
            sidebarY += 6
            doc.text("linkedin.com/in/moses-mungai-g", 10, sidebarY)
            sidebarY += 15

            // 3. Education
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("EDUCATION", 10, sidebarY)
            sidebarY += 5
            doc.line(10, sidebarY, sidebarWidth - 10, sidebarY)
            sidebarY += 8

            doc.setFontSize(10)
            doc.text("Fullstack Certification", 10, sidebarY)
            sidebarY += 5
            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            doc.setTextColor(200, 200, 200)
            doc.text("PowerLearn Project", 10, sidebarY)
            sidebarY += 5
            doc.text("Aug 2024 (16 Weeks)", 10, sidebarY)
            sidebarY += 10
            doc.setTextColor(textColorLight)

            doc.setFont("helvetica", "bold")
            doc.setFontSize(10)
            doc.text("Diploma in IT", 10, sidebarY)
            sidebarY += 5
            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            doc.setTextColor(200, 200, 200)
            doc.text("Kabete National Polytechnic", 10, sidebarY)
            sidebarY += 5
            doc.text("Completed 2023", 10, sidebarY)
            sidebarY += 10
            doc.setTextColor(textColorLight)

            doc.setFont("helvetica", "bold")
            doc.setFontSize(10)
            doc.text("High School", 10, sidebarY)
            sidebarY += 5
            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            doc.setTextColor(200, 200, 200)
            doc.text("J.G Kiereini", 10, sidebarY)
            sidebarY += 5
            doc.text("Completed 2020", 10, sidebarY)
            sidebarY += 15
            doc.setTextColor(textColorLight)

            // 4. Skills
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("SKILLS", 10, sidebarY)
            sidebarY += 5
            doc.line(10, sidebarY, sidebarWidth - 10, sidebarY)
            sidebarY += 8

            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            const skills = [
                "React & Next.js",
                "TypeScript / JavaScript",
                "Node.js & Python",
                "Tailwind CSS",
                "PostgreSQL & Prisma",
                "Docker / Git",
                "Linux / Networking"
            ]
            skills.forEach(skill => {
                doc.text(`• ${skill}`, 10, sidebarY)
                sidebarY += 6
            })

            // Languages
            sidebarY += 10
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("LANGUAGES", 10, sidebarY)
            sidebarY += 5
            doc.line(10, sidebarY, sidebarWidth - 10, sidebarY)
            sidebarY += 8
            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            doc.text("English (Professional)", 10, sidebarY)
            sidebarY += 6
            doc.text("Swahili (Native)", 10, sidebarY)

            // ================== MAIN CONTENT ==================

            let mainY = 20

            // Header Name
            doc.setTextColor(0, 0, 0)
            doc.setFont("helvetica", "bold")
            doc.setFontSize(28)
            doc.text("MOSES MUNGAI", mainContentX, mainY)
            mainY += 10

            doc.setTextColor(primaryColor)
            doc.setFontSize(16)
            doc.text("FULL STACK DEVELOPER", mainContentX, mainY)
            mainY += 15

            // Summary
            doc.setTextColor(textColorDark)
            doc.setFont("helvetica", "normal")
            doc.setFontSize(10)
            const summary = "Innovative Full Stack Developer passionate about building scalable, user-centric web applications. Expert in modern frontend architecture and robust backend systems. Proven track record of optimizing performance and delivering complex projects on time."
            const splitSummary = doc.splitTextToSize(summary, mainContentWidth)
            doc.text(splitSummary, mainContentX, mainY)
            mainY += (splitSummary.length * 5) + 10

            // Experience Section
            doc.setFont("helvetica", "bold")
            doc.setFontSize(14)
            doc.setTextColor(0, 0, 0)
            doc.text("PROFESSIONAL EXPERIENCE", mainContentX, mainY)
            mainY += 4
            doc.setLineWidth(0.5)
            doc.setDrawColor(200, 200, 200)
            doc.line(mainContentX, mainY, pageWidth - margin, mainY)
            mainY += 8

            // Job 1
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("Senior Full Stack Developer", mainContentX, mainY)
            doc.setFont("helvetica", "normal")
            doc.setFontSize(10)
            doc.setTextColor(primaryColor)
            doc.text("Freelance / Self-Employed", mainContentX, mainY + 5)
            doc.setTextColor(textColorGray)
            doc.text("2023 - Present", pageWidth - margin - 30, mainY)

            mainY += 10
            doc.setTextColor(textColorDark)
            const job1Desc = [
                "• Architected & deployed 5+ scalable apps using Next.js & Cloudflare.",
                "• Boosted client SEO rankings, driving a 40% organic traffic increase.",
                "• Integrated secure payment gateways handling $10k+ monthly."
            ]
            job1Desc.forEach(line => {
                doc.text(line, mainContentX, mainY)
                mainY += 5
            })
            mainY += 10

            // Job 2
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.setTextColor(0, 0, 0)
            doc.text("Software Developer Intern", mainContentX, mainY)
            doc.setFont("helvetica", "normal")
            doc.setFontSize(10)
            doc.setTextColor(primaryColor)
            doc.text("Attachment / Internship", mainContentX, mainY + 5)
            doc.setTextColor(textColorGray)
            doc.text("May 2023 - Aug 2023", pageWidth - margin - 40, mainY)

            mainY += 10
            doc.setTextColor(textColorDark)
            const job2Desc = [
                "• Collaborated on responsive UI development using React.",
                "• Conducted code reviews and participated in agile sprints.",
                "• Optimized database schemas for faster query performance."
            ]
            job2Desc.forEach(line => {
                doc.text(line, mainContentX, mainY)
                mainY += 5
            })
            mainY += 15

            // Projects Section
            doc.setFont("helvetica", "bold")
            doc.setFontSize(14)
            doc.setTextColor(0, 0, 0)
            doc.text("KEY PROJECTS", mainContentX, mainY)
            mainY += 4
            doc.setDrawColor(200, 200, 200)
            doc.line(mainContentX, mainY, pageWidth - margin, mainY)
            mainY += 8

            // Project 1
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.text("E-Commerce Platform", mainContentX, mainY)
            mainY += 5
            doc.setFont("helvetica", "normal")
            doc.setFontSize(10)
            doc.setTextColor(textColorDark)
            doc.text("Built a high-performance store handling 10k users. Reduced checkout drop-off by 25%.", mainContentX, mainY)
            mainY += 10

            // Project 2
            doc.setFont("helvetica", "bold")
            doc.setFontSize(12)
            doc.setTextColor(0, 0, 0)
            doc.text("Decentralized Voting System", mainContentX, mainY)
            mainY += 5
            doc.setFont("helvetica", "normal")
            doc.setFontSize(10)
            doc.setTextColor(textColorDark)
            doc.text("Architected a secure voting mechanism on Ethereum using Solidity & React.", mainContentX, mainY)

            // Footer Slogan
            mainY += 20
            doc.setFont("helvetica", "italic")
            doc.setFontSize(10)
            doc.setTextColor(primaryColor)
            doc.text('"Turning Vision Into Reality."', mainContentX, mainY)

            doc.save("Moses_Mungai_CV.pdf")

        } catch (error) {
            console.error("Failed to generate PDF", error)
            alert("Failed to generate PDF. Please try again.")
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <section id="cv" className="container flex flex-col items-center py-12 px-4 md:py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex w-full max-w-4xl flex-col items-center gap-6 rounded-2xl border bg-card p-8 text-center shadow-sm md:flex-row md:justify-between md:text-left"
            >
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 md:justify-start">
                        <FileText className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold">Curriculum Vitae</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Want a deeper dive into my professional background? Download my full verified CV.
                    </p>
                </div>

                <button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                >
                    {isGenerating ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    )}
                    {isGenerating ? "Generating..." : "Download Verified CV"}
                </button>
            </motion.div>
        </section>
    )
}
