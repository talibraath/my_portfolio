import styles from "./Experience.module.css"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer Intern",
      company: "Pluginfy Technologies",
      period: "June 2024 - August 2024",
      description: [
        "Built WordPress AI chatbot plugins, boosting satisfaction by 60%.",
        "Designed efficient database schemas and contributed to cloud-based deployment solutions.",
        "Collaborate with cross-functional teams to deliver high-quality software solutions.",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "October 2023 - Present",
      description: [
        "Develop diverse projects covering NEXT.js stack development,Ai Agent, machine learning, and data science.",
        "Create Lead capturing and appointment booking ai agents.",
        "Implement AI models using TensorFlow and other machine learning frameworks.",
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST-National University of Computer and Emerging Sciences",
      period: "August 2021 - May 2025",
      description:
        "Developing strong skills in programming, algorithms, and data structures, alongside improving teamwork and communication abilities.",
    },
    {
      degree: "Intermediate - Pre Engineering",
      institution: "Government College of Science, Wahdat Rd, Lahore",
      period: "August 2019 - April 2021",
      description:
        "Gained a strong foundation in science and mathematics, laying the groundwork for academic journey in computer science.",
    },
  ]

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className={styles.content}>
          <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <ul className={styles.description}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationSection}>
            <h3 className={styles.sectionTitle}>Education</h3>

            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{edu.degree}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{edu.institution}</span>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.eduDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
