"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import styles from "./Services.module.css"
import { Code, Smartphone, Database, Cloud, PenTool, Brain } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const Services = () => {
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

  const services: Service[] = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications with modern technologies.",
      features: [
        "Full-stack development with MERN/MEAN",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "CMS development",
        "Performance optimization",
      ],
    },

  
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native development",
        "Flutter applications",
        "Native app integration",
        "App store deployment",
        "Mobile UI/UX design",
      ],
    },

    {
      icon: <Brain size={40} />,
      title: "AI Agent Development",
      description: "Building intelligent agents that interact, understand, and automate tasks using advanced AI capabilities.",
      features: [
        "Custom AI chatbots and voice agents",
        "Context-aware conversation design",
        "Integration with CRMs and APIs",
        "Multi-language support",
        "OpenAI, RAG, and LLM fine-tuning"
      ],
    },
    {
      icon: <Brain size={40} />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions using cutting-edge AI technologies.",
      features: [
        "Machine learning models",
        "Natural Language Processing",
        "Computer Vision solutions",
        "Predictive analytics",
        "AI integration with apps",
      ],
    },
    {
      icon: <Database size={40} />,
      title: "Data Science",
      description: "Extracting insights and value from complex data sets.",
      features: [
        "Data analysis and visualization",
        "Statistical modeling",
        "Big data processing",
        "Business intelligence",
        "ETL pipeline development",
      ],
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Solutions",
      description: "Deploying and managing applications on cloud platforms.",
      features: [
        "AWS/Azure/GCP architecture",
        "Serverless applications",
        "Cloud migration",
        "DevOps automation",
        "Scalable infrastructure",
      ],
    },
   
  ]

  return (
    <section id="services" className={`section ${styles.services}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          I offer a wide range of services to help businesses and individuals bring their ideas to life. Here's what I
          can do for you.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
