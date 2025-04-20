"use client"

import { useEffect, useRef } from "react"
import styles from "./ParticleBackground.module.css"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles: Particle[] = []
  const particleCount = 60 // Reduced particle count for better performance
  const connectionDistance = 150
  const colors = ["#4ADEDE", "#C084FC", "#8B5CF6", "#3ABFF8"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let lastTime = 0
    const targetFPS = 30 // Limit FPS for better performance

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const drawParticles = (timestamp: number) => {
      // Throttle frame rate for better performance
      if (timestamp - lastTime < 1000 / targetFPS) {
        animationFrameId = requestAnimationFrame(drawParticles)
        return
      }
      lastTime = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(")", `, ${particle.opacity})`)
        ctx.fill()

        // Connect particles - only check every other particle for performance
        if (i % 2 === 0) {
          for (let j = i + 1; j < particles.length; j += 2) {
            const dx = particles[j].x - particle.x
            const dy = particles[j].y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              const opacity = 1 - distance / connectionDistance
              ctx.beginPath()
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }

        // Connect to mouse - only for particles close to mouse
        if (mouseX && mouseY) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance * 1.2) {
            const opacity = 1 - distance / (connectionDistance * 1.2)
            ctx.beginPath()
            ctx.strokeStyle = particle.color.replace(")", `, ${opacity * 0.3})`)
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()

            // Slight attraction to mouse
            particle.x += dx * 0.01
            particle.y += dy * 0.01
          }
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    handleResize()
    drawParticles(0)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}

export default ParticleBackground
