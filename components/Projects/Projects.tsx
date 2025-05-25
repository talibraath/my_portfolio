"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Projects.module.css"
import { ExternalLink, Github } from "lucide-react"

type ProjectCategory = "all" | "fullstack" | "ai" | "aiagent" | "mobile"

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
      id: 2,
      title: "SkillsMap Navigator",
      description: "Built an interactive web tool to connect job seekers with relevant training courses and job opportunities, aligning with their skill sets.",
      image: "/projects/skillsnavigator.png",
      category: ["fullstack", "ai"],
      technologies: ["React", "Node.js", "openai", "Express"],
      liveUrl: "https://skillmapnavigator.com/",
      githubUrl: "https://github.com/talibraath/SkillsMap-Navigator",
    },



       {
      id: 3,
      title: "Ai Scorer",
      description: "AI Writing Scorer is a sophisticated tool that leverages the power of GPT-4 to provide detailed, objective analysis of written content. Whether you're a student, professional writer, or content creator, our platform helps you understand your writing's strengths and areas for improvement.The tool evaluates multiple aspects of writing including clarity, coherence, grammar, style, and engagement, providing actionable feedback that helps you refine your writing skills over time.",
      image: "/projects/ai-scorer.png",
      category: ["fullstack","ai"],
      technologies: ["Next.js", "Nodejs","OpenAI", "TypeScript", "TailwindCSS"],
      liveUrl: "http://ai-scorer.vercel.app/",
      githubUrl: "https://github.com/talibraath/ai-scorer",
    },



    {
      id: 1,
      title: "Costarica Star Villas",
      description: "Implemented a chatbot integration on WordPress to automate lead generation and enhance customer engagement, send a chat summary of every potential lead to the reservation team and make a booking.",
      image: "/projects/costarica.png",
      category: ["aiagent"],
      technologies: ["Wordpress","Chatbot","Ai Agent", "Openai", "Assistant", "Gmail API"],
      liveUrl: "https://costaricastarvillas.com/",
    },
    {
      id: 3,
      title: "SmartHire",
      description: "Developed a web-based recruitment system using Next.js and Django Rest Framework, automating job postings and facilitating AI-driven candidate screening and scheduling interviews.",
      image: "/projects/smarthire.png",
      category: ["fullstack","ai"],
      technologies: ["Next.js", "Django Rest Framework","openai", "TypeScript", "MongoDB", "TailwindCSS"],
      liveUrl: "https://smarthirre.ai/",
      githubUrl: "https://github.com/talibraath/SmartHire",
    },

    {
      id: 6,
      title: "MerrimackValley Roofing & Gutter Cleaning",
      description: "Implemented a chatbot integration on WordPress to automate lead generation and enhance customer engagement, and send a chat summary of each potential lead.",
      image: "/projects/merrimack.png",
      category: ["aiagent"],
      technologies: ["AI", "Chatbot", "AI Agent", "Lead Generation","Openai"],
      liveUrl: "https://merrimackvalleyroofing.com/",
    },
    {
      id: 4,
      title: "Sigod",
      description: "SiGod is a ChatGPT-style AI chatbot using OpenAI and Pinecone for smart, context-aware conversations.",
      image: "/projects/sigod.png",
      category: ["ai", "aiagent"],
      technologies: ["Next.js", "Openai", "Pinecone", "TypeScript", "MongoDB"],
      liveUrl: "https://sigod.com/",
      githubUrl: "https://github.com/talibraath/Sigod",
    },
    {
      id: 5,
      title: "Ai Expense Report",
      description: "Created an AI-driven expense reporting application with ReactJS and Node.js, significantly reducing manual data entry time.",
      image: "/projects/aiexpensereport.png",
      category: ["ai","fullstack"],
      technologies: ["ReactJS", "Node.js","OCR", "OpenCV"],
      liveUrl: "https://aiexpensereport.netlify.app/",    },
    {
      id: 7,
      title: "write on Time",
      description: "Developed an AI-powered email generation tool leveraging the MERN stack and OpenAI API, improving email creation efficiency by approximately 40%.",
      image: "/projects/write_on_time.png",
      category: ["ai", "fullstack"],
      technologies: ["React.js", "Openai", "Node.js", "Gmail API"],
      liveUrl: "https://writeontime.netlify.app/",
      githubUrl: "https://github.com/talibraath/Write-on-Time",
    },
   
   
    {
      id: 8,
      title: "Novelty Logistics",
      description: "Developed a logistics management website to enhance shipment tracking, logistics operations, and customer experience.",
      image: "/projects/novelty_logistics.png",
      category: ["fullstack"],
      technologies: ["NEXT.js", "Node.js", "Firebase", "Google Forms"],
      liveUrl: "https://noveltylogistics.vercel.app/",
      githubUrl: "https://github.com/talibraath/Novelty-logistics",
    },
    {
      id: 9,
      title: "Predict Weather",
      description: "Developed a weather prediction application using open weather api to provide accurate weather forecasts.",
      image: "/projects/predict_weather.png",
      category: ["fullstack"],
      technologies: ["React", "API", "Open Weather API"],
      liveUrl: "https://predictweather.netlify.app/",
      githubUrl: "https://github.com/talibraath/WeatherApp",
    },

    {
      id: 9,
      title: "Dastan-e-Sukhan",
      description: "A Streamlit app that generates Urdu poetry using LSTM and Seq2Seq models.",
      image: "/projects/dastan-e-sukhan.png",
      category: ["ai"],
      technologies: ["Python","Seq2seq","NLP", "Streamlit", "Urdu Language Processing"],
      liveUrl: "https://dastan-e-sukhan.streamlit.app/",
      githubUrl: "https://github.com/talibraath/Dastan-e-Sukhan",
    },

    {
      id: 9,
      title: "Arabic to English",
      description: "A neural machine translation app using Seq2Seq architecture for accurate Arabic to English translation.",
      image: "/projects/arabic_trans.png",
      category: ["ai"],
      technologies: ["Python","Seq2seq","NLP", "Streamlit", "Urdu Language Processing"],
      liveUrl: "https://englishtoarabic.streamlit.app/",
      githubUrl: "https://github.com/talibraath/english-to-arabic",
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
            className={`${styles.categoryBtn} ${activeCategory === "aiagent" ? styles.active : ""}`}
            onClick={() => setActiveCategory("aiagent")}
          >
            Ai Agent & Chatbot
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
