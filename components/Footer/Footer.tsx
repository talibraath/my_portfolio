import Link from "next/link"
import styles from "./Footer.module.css"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <span>Talib</span>Husain
            </Link>
            <p>
              Software Developer & AI Enthusiast specializing in creating exceptional digital experiences that
              combine beautiful design with powerful agentic functionality.
            </p>
            <div className={styles.social}>
              <Link
                href="https://github.com/talibraath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/talibraath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/talibraath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/talibraath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link href="mailto:talib.raath@gmail.com" aria-label="Email">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="#services">Web Development</Link>
              </li>
              <li>
                <Link href="#services">Mobile App Development</Link>
              </li>
              <li>
                <Link href="#services">AI & Machine Learning</Link>
              </li>
              <li>
                <Link href="#services">Data Science</Link>
              </li>
              <li>
                <Link href="#services">UI/UX Design</Link>
              </li>
              <li>
                <Link href="#services">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>Lahore, Pakistan</p>
            <p>talib.raath@gmail.com</p>
            <p>+92 321 7330477</p>
            <Link href="#contact" className={styles.contactBtn}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Talib Raath. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
