"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./Testimonials.module.css"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  text: string
  rating: number
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate",
      image: "/testimonials/Sarah.jpg",
      text: "Working with Talib was an absolute pleasure. His technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule and exceeded our expectations in every way.",
      rating: 5,
    },
    {
      id: 2,
      name: "Barry James",
      position: "PM",
      company: "Merrimack Valley Roofing & Gutters",
      image: "/testimonials/download.png",
      text: "Talib's work on our AI agent was outstanding. He has a deep understanding of AI technologies and implemented solutions that significantly improved our customer support and lead collection processing efficiency.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "WebSolutions Inc.",
      image: "/testimonials/Emily.avif",
      text: "I've worked with many developers, but Talib stands out for his attention to detail and commitment to quality. He's not just a coder but a true problem solver who understands business needs.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder",
      company: "StartupLaunch",
      image: "/testimonials/davidKim.jpg",
      text: "Talib helped us build our MVP in record time. His full-stack skills and ability to quickly understand our vision were invaluable. I highly recommend him for any challenging project.",
      rating: 5,
    },
  ]

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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }))
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Don't just take my word for it. Here's what my clients have to say about working with me.
        </p>

        <div className={`${styles.testimonialSlider} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.quoteIcon}>
              <Quote size={40} />
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>{testimonials[activeIndex].text}</p>
              <div className={styles.testimonialRating}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.star} ${i < testimonials[activeIndex].rating ? styles.active : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImageContainer}>
                <div className={styles.authorImage}>
                  {imageErrors[testimonials[activeIndex].id] ? (
                    <div className={styles.fallbackInitial}>
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                  ) : (
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className={styles.image}
                      onError={() => handleImageError(testimonials[activeIndex].id)}
                      priority
                    />
                  )}
                </div>
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{testimonials[activeIndex].name}</h4>
                <p className={styles.authorPosition}>
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className={styles.indicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button className={styles.controlBtn} onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
