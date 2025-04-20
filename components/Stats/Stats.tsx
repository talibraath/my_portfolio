"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import styles from "./Stats.module.css"
import { Code, Users, Award, Coffee } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  increment: number
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: StatItem[] = [
    {
      icon: <Code size={32} />,
      value: 0,
      label: "Projects Completed",
      increment: 1,
    },
    {
      icon: <Users size={32} />,
      value: 0,
      label: "Happy Clients",
      increment: 1,
    },
    {
      icon: <Award size={32} />,
      value: 0,
      label: "Years Experience",
      increment: 0.1,
    },
    {
      icon: <Coffee size={32} />,
      value: 0,
      label: "Cups of Coffee",
      suffix: "+",
      increment: 10,
    },
  ]

  const finalValues = [110, 40, 4, 1000]
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0))

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

  useEffect(() => {
    if (!isVisible) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCurrentValues((prev) => {
          const newValues = [...prev]
          if (newValues[index] < finalValues[index]) {
            newValues[index] = Math.min(newValues[index] + stat.increment, finalValues[index])
          }
          return newValues
        })
      }, 30)
    })

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [isVisible])

  return (
    <section id="stats" className={styles.stats} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.iconWrapper}>{stat.icon}</div>
              <h3 className={styles.statValue}>
                {Math.floor(currentValues[index])}
                {currentValues[index] % 1 > 0 && `.${(currentValues[index] % 1).toFixed(1).split(".")[1]}`}
                {stat.suffix || ""}
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
