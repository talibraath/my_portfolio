import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.greeting}>Hello, I'm Talib Husain</h3>
              <div className={styles.decorativeLine}></div>
            </div>
            
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
              I am a Software Developer and AI Enthusiast specializing in full-stack web development and intelligent systems.
With hands-on experience in the MERN stack, Django Rest Framework, and Generative AI, I build scalable applications, AI chatbots, and automation tools. Currently in my final year at FAST-NU, I focus on data science, machine learning, and deep learning, with 1.5+ years of experience delivering real-world solutions through freelance and academic collaborations.
              </p>
              <p className={styles.bio}>
                With proficiency in frameworks like Next.js, Laravel, Flutter, and languages including Python, Java, C++,
                and Go, I am well-equipped to handle both development and data-driven tasks. I have over 1.5+ years of
                experience in freelancing, where I've collaborated with professors and students on projects, assignments,
                research, and journal papers.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>Talib Husain</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>talib.raath@gmail.com</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Lahore, Pakistan</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Education:</span>
                <span className={styles.value}>B.S. Computer Science, FAST-NUCES</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>My Journey</h4>

              <div className={styles.timelineItems}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Software Developer - Internship at Pluginfy Technologies</h5>
                    <p className={styles.timelinePeriod}>June 2024 - August 2024</p>
                    <p>Built WordPress AI chatbot plugins, boosting satisfaction by 60%.

Designed efficient database schemas and contributed to cloud-based deployment solutions.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Freelance Developer</h5>
                    <p className={styles.timelinePeriod}>September 2023 - Present</p>
                    <p>
                      Working on diverse projects covering NEXT.js stack development, Generative AI, and AI Agent, machine learning, and data science.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>B.S. Computer Science</h5>
                    <p className={styles.timelinePeriod}>August 2021 - May 2025</p>
                    <p>FAST-National University of Computer and Emerging Sciences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
