"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import styles from "./Skills.module.css"

type SkillCategory = "frontend" | "backend" | "database" | "tools" | "ai" | "cloud"

interface Skill {
  name: string
  icon: string
  level: number
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const skills: Record<SkillCategory, Skill[]> = {
    frontend: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "Next.js", icon: "▲", level: 85 },
      { name: "TypeScript", icon: "📘", level: 80 },
      { name: "HTML/CSS", icon: "🎨", level: 95 },
      { name: "JavaScript", icon: "🟨", level: 90 },
      { name: "Redux", icon: "🔄", level: 85 },
      { name: "Tailwind CSS", icon: "🌊", level: 88 },    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Django Rest Framework", icon: "🔌", level: 85 },
      { name: "Python", icon: "🐍", level: 80 },
      { name: "C++", icon: "⚙️", level: 85 },
      { name: "REST API", icon: "🔌", level: 90 },
      { name: "Ai Agent", icon: "🤖", level: 75 },],
    database: [
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "MySQL", icon: "🐬", level: 80 },
      { name: "Firebase", icon: "🔥", level: 80 },
      { name: "Supabase", icon: "⚡", level: 75 },
    ],
    tools: [
      { name: "Git", icon: "📊", level: 90 },
      { name: "Linux", icon: "🐧", level: 80 },
      { name: "VS Code", icon: "📝", level: 95 },
    ],
    ai: [
      { name: "TensorFlow", icon: "🧠", level: 80 },
      { name: "PyTorch", icon: "🔥", level: 75 },
      { name: "Ai Agent", icon: "🤖", level: 75 },
      { name: "NLP", icon: "💬", level: 75 },
      { name: "Machine Learning", icon: "🤖", level: 85 },
      { name: "Data Science", icon: "📊", level: 80 },
      { name: "Deep Learning", icon: "🔮", level: 75 },
    ],
    cloud: [
      { name: "AWS", icon: "☁️", level: 75 },
      { name: "Azure", icon: "☁️", level: 70 },
      { name: "Google Cloud", icon: "☁️", level: 65 },
      { name: "Vercel", icon: "▲", level: 85 },
      { name: "Netlify", icon: "🌐", level: 80 },
      { name: "Heroku", icon: "🟣", level: 80 },
    ],
  }

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          I've acquired a diverse set of skills throughout my journey as a developer. Here's a comprehensive overview of
          my technical expertise.
        </p>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "frontend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "backend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("backend")}
          >
            Backend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "database" ? styles.active : ""}`}
            onClick={() => setActiveCategory("database")}
          >
            Database
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "tools" ? styles.active : ""}`}
            onClick={() => setActiveCategory("tools")}
          >
            Tools
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "ai" ? styles.active : ""}`}
            onClick={() => setActiveCategory("ai")}
          >
            AI & ML
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "cloud" ? styles.active : ""}`}
            onClick={() => setActiveCategory("cloud")}
          >
            Cloud
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillBarWrapper}>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
