"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Blog.module.css"
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from "@/data/blogData"

const Blog = () => {
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

  // Display only the first 3 blog posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className={`section ${styles.blog}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          I share my knowledge and experiences through articles on web development, data science, and AI. Check out my
          latest posts.
        </p>

        <div className={styles.blogGrid}>
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`${styles.blogCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.blogImage}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.blogCategory}>{post.category}</div>
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className={styles.blogReadTime}>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
