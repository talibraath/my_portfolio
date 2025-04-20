"use client"

import { useEffect, useState } from "react"
import styles from "./CustomCursor.module.css"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [lastUpdateTime, setLastUpdateTime] = useState(0)
  const throttleMs = 10 // Throttle cursor updates for better performance

  useEffect(() => {
    const mMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      if (currentTime - lastUpdateTime > throttleMs) {
        setPosition({ x: e.clientX, y: e.clientY })
        setHidden(false)
        setLastUpdateTime(currentTime)
      }
    }

    const mLeave = () => {
      setHidden(true)
    }

    const mDown = () => {
      setClicked(true)
    }

    const mUp = () => {
      setClicked(false)
    }

    const handleLinkHoverOn = () => {
      setLinkHovered(true)
    }

    const handleLinkHoverOff = () => {
      setLinkHovered(false)
    }

    // Use passive event listeners for better performance
    document.addEventListener("mousemove", mMove, { passive: true })
    document.addEventListener("mouseleave", mLeave)
    document.addEventListener("mousedown", mDown)
    document.addEventListener("mouseup", mUp)

    // Only add hover listeners to links and buttons in the viewport
    const addHoverListeners = () => {
      const links = document.querySelectorAll("a, button")
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHoverOn)
        link.addEventListener("mouseleave", handleLinkHoverOff)
      })
    }

    // Initial setup
    addHoverListeners()

    // Setup mutation observer to handle dynamically added links
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", mMove)
      document.removeEventListener("mouseleave", mLeave)
      document.removeEventListener("mousedown", mDown)
      document.removeEventListener("mouseup", mUp)

      const links = document.querySelectorAll("a, button")
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverOn)
        link.removeEventListener("mouseleave", handleLinkHoverOff)
      })

      observer.disconnect()
    }
  }, [lastUpdateTime])

  // Use transform for better performance instead of top/left
  const cursorStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
  }

  const cursorDotStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
  }

  const cursorClasses = `
    ${styles.cursor} 
    ${clicked ? styles.clicked : ""} 
    ${linkHovered ? styles.linkHovered : ""}
  `

  const cursorDotClasses = `
    ${styles.cursorDot} 
    ${clicked ? styles.clicked : ""} 
    ${linkHovered ? styles.linkHovered : ""}
  `

  return (
    <>
      <div className={cursorClasses} style={cursorStyle}></div>
      <div className={cursorDotClasses} style={cursorDotStyle}></div>
    </>
  )
}

export default CustomCursor
