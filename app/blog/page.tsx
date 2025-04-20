import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blogData"
import styles from "./page.module.css"
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: "Blog | Portfolio",
  description: "Read my latest articles on web development, data science, and AI.",
}

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <div className="container">
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>All Articles</h1>
          <p className={styles.blogDescription}>
            Explore my thoughts, tutorials, and insights on web development, programming, and technology.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
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
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.backToHome}>
          <Link href="/#blog" className={styles.backLink}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
