import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.greeting}>Hello, I'm Usman Saleem</h3>
              <div className={styles.decorativeLine}></div>
            </div>
            
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
              I am a Software Developer and AI Enthusiast specializing in full-stack web development and intelligent systems.
With hands-on experience in the MERN stack and Generative AI, I build scalable applications, AI chatbots, and automation tools. I have 1.5+ years of experience delivering real-world solutions through freelance and academic collaborations. As part of my Final Year Project, I’m building Capital Valley — a platform that connects startups with investors, featuring secure messaging, idea upvoting, and AI-powered recommendations to support early-stage innovation.
              </p>
              <p className={styles.bio}>
                With proficiency in frameworks like Next.js, MERN, and languages including Python, Java, C++,
                and C, I am well-equipped to handle both development and data-driven tasks. I have over 1.5+ years of
                experience in freelancing, where I've collaborated with professors and students on projects, assignments,
                research, and journal papers.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>Usman Saleem</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>chusman3638@gmail.com</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Gujranwala, Pakistan</span>
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
                    <h5>Software Developer - Internship at Innoscript Technologies</h5>
                    <p className={styles.timelinePeriod}>June 2024 - August 2024</p>
                    <p>As a Web Developer, I build responsive, scalable web apps using React, Node.js, and MongoDB.
I focus on clean code, smooth user experiences, and cloud deployment.</p>
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
