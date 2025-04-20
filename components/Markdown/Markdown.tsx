"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import styles from "./Markdown.module.css"

interface MarkdownProps {
  content: string
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ...props }) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ...props }) => <h3 className={styles.heading3} {...props} />,
          h4: ({ node, ...props }) => <h4 className={styles.heading4} {...props} />,
          h5: ({ node, ...props }) => <h5 className={styles.heading5} {...props} />,
          h6: ({ node, ...props }) => <h6 className={styles.heading6} {...props} />,
          p: ({ node, ...props }) => <p className={styles.paragraph} {...props} />,
          a: ({ node, ...props }) => <a className={styles.link} {...props} />,
          ul: ({ node, ...props }) => <ul className={styles.list} {...props} />,
          ol: ({ node, ...props }) => <ol className={styles.orderedList} {...props} />,
          li: ({ node, ...props }) => <li className={styles.listItem} {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className={styles.blockquote} {...props} />,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className={styles.codeBlock}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={styles.inlineCode} {...props}>
                {children}
              </code>
            )
          },
          table: ({ node, ...props }) => <table className={styles.table} {...props} />,
          thead: ({ node, ...props }) => <thead className={styles.tableHead} {...props} />,
          tbody: ({ node, ...props }) => <tbody className={styles.tableBody} {...props} />,
          tr: ({ node, ...props }) => <tr className={styles.tableRow} {...props} />,
          th: ({ node, ...props }) => <th className={styles.tableHeader} {...props} />,
          td: ({ node, ...props }) => <td className={styles.tableCell} {...props} />,
          img: ({ node, ...props }) => <img className={styles.image} {...props} />,
          hr: ({ node, ...props }) => <hr className={styles.hr} {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
