"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "technologies",
        "projects",
        "experience",
        "testimonials",
        "blog",
        "contact",
      ]

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>TH</span>
          <span className={styles.logoText}>
            <span>Talib</span>Husain
          </span>
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="#home" onClick={closeMenu} className={activeSection === "home" ? styles.active : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu} className={activeSection === "about" ? styles.active : ""}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={closeMenu} className={activeSection === "skills" ? styles.active : ""}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={closeMenu} className={activeSection === "services" ? styles.active : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={closeMenu} className={activeSection === "projects" ? styles.active : ""}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                onClick={closeMenu}
                className={activeSection === "experience" ? styles.active : ""}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMenu} className={activeSection === "contact" ? styles.active : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
