"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Projects.module.css"
import { ExternalLink, Github } from "lucide-react"

type ProjectCategory = "all" | "fullstack" | "ai" | "devops" | "mobile"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Monarch Studio",
      description: "Innovative platform that separates song components like vocals and chords.",
      image: "/projects/monaarch.png",
      category: ["fullstack", "ai"],
      technologies: ["React", "Node.js", "TensorFlow", "Express"],
      liveUrl: "https://www.monaarch.org/",
      githubUrl: "https://github.com/saadrehman171000/Monarch-Studio",
    },
    {
      id: 2,
      title: "Agency App",
      description: "A comprehensive agency management application with client and project tracking.",
      image: "/projects/AgencyWebsite.png",
      category: ["fullstack"],
      technologies: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
      liveUrl: "https://agency-app-tau.vercel.app/",
      githubUrl: "https://github.com/saadrehman171000/Agency-App",
    },
    {
      id: 3,
      title: "FiberFlow",
      description: "Modern e-commerce platform for digital products with secure payment processing.",
      image: "/projects/Fiberflow.png",
      category: ["fullstack"],
      technologies: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
      liveUrl: "https://fiber-flow.vercel.app/",
      githubUrl: "https://github.com/saadrehman171000/FiberFlow",
    },
    {
      id: 4,
      title: "Fight Detection System",
      description: "AI system that detects fights in videos using TensorFlow Object Detection.",
      image: "/projects/fightDetection.jpeg",
      category: ["ai"],
      technologies: ["Python", "TensorFlow", "OpenCV", "Tkinter"],
      githubUrl: "https://github.com/saadrehman171000/Fight-Detection-System",
    },
    {
      id: 5,
      title: "OCR Petition Validator",
      description: "A web app for validating petition signatures with advanced OCR capabilities.",
      image: "/projects/ocr_petition_validator_image.png",
      category: ["ai", "fullstack"],
      technologies: ["React.js", "Flask", "MongoDB", "Google Cloud Vision API"],
      githubUrl: "https://github.com/saadrehman171000/OCR-Petition-Validator",
    },
    {
      id: 6,
      title: "CBT Therapy Bot",
      description: "AI-based therapy bot combining CBT techniques to provide mental health support.",
      image: "/projects/CBTbot.jpg",
      category: ["ai"],
      technologies: ["Next.js", "TypeScript", "FastAPI", "Google Gemini API"],
      liveUrl: "https://expo.dev",
      githubUrl: "https://github.com/saadrehman171000/CBT-Therapy-Bot",
    },
    {
      id: 7,
      title: "DevOps Hub",
      description: "Platform to learn about DevOps practices including CI/CD, Kubernetes, Docker, and more.",
      image: "/projects/DevopsHub.png",
      category: ["devops"],
      technologies: ["DevOps", "CI/CD", "Kubernetes", "Docker"],
      liveUrl: "https://devops-hub-woad.vercel.app/",
      githubUrl: "https://github.com/saadrehman171000/DevOps-Hub",
    },
    {
      id: 8,
      title: "AI Music Generation",
      description: "AI-based music creation platform for generating and transforming music styles.",
      image: "/projects/AiMusicGeneration.png",
      category: ["ai"],
      technologies: ["AI Algorithms", "Music Style Transfer", "Next.js"],
      liveUrl: "https://music-ai-delta.vercel.app/",
      githubUrl: "https://github.com/saadrehman171000/AI-Music-Generation",
    },

    {
      id: 9,
      title: "Music Therapy Dementia App",
      description: "React Native app designed to support dementia patients through personalized music playlists, therapeutic tools, and cognitive stimulation.",
      image: "/projects/DementiaApp.png",
      category: ["mobile"],
      technologies: ["React Native", "Expo", "Node.js", "Firebase", "Voice Recognition API", "Text-to-Speech API"],
      liveUrl: "https://expo.dev",
      githubUrl: "https://github.com/saadrehman171000/Music-Therapy-Dementia-App",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "all" ? styles.active : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => setActiveCategory("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "ai" ? styles.active : ""}`}
            onClick={() => setActiveCategory("ai")}
          >
            AI & ML
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "devops" ? styles.active : ""}`}
            onClick={() => setActiveCategory("devops")}
          >
            DevOps
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "mobile" ? styles.active : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
