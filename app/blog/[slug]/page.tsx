import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blogData"
import styles from "./page.module.css"
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react'
import Markdown from "@/components/Markdown/Markdown"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }
  
  return {
    title: `${post.title} | Portfolio Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
  
  return (
    <main className={styles.blogPostPage}>
      <div className="container">
        <article className={styles.blogPost}>
          <div className={styles.blogHeader}>
            <div className={styles.blogMeta}>
              <span className={styles.blogCategory}>{post.category}</span>
              <span className={styles.blogDate}>
                <Calendar size={16} />
                {post.date}
              </span>
              <span className={styles.blogReadTime}>
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
            
            <h1 className={styles.blogTitle}>{post.title}</h1>
            
            {post.author && (
              <div className={styles.authorInfo}>
                <User size={20} />
                <span>{post.author}</span>
              </div>
            )}
            
            {post.tags && (
              <div className={styles.tagsList}>
                {post.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className={styles.featuredImage}>
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className={styles.image}
              priority
            />
          </div>
          
          <div className={styles.blogContent}>
            <Markdown content={post.content || post.excerpt} />
          </div>
        </article>
        
        {relatedPosts.length > 0 && (
          <div className={styles.relatedPosts}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <Link 
                  href={`/blog/${relatedPost.slug}`} 
                  key={relatedPost.id}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={180}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
                    <div className={styles.relatedMeta}>
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <div className={styles.navigation}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </div>
    </main>
  )
}
