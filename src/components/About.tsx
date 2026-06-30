import styles from "./About.module.css";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js / Express",
  "CSS / CSS Modules",
  "REST / GraphQL APIs",
  "SQL / MongoDB",
  "Git & GitHub",
  "UI/UX Design (Figma)",
];

const experience = [
  {
    role: "Lead Full-Stack Developer",
    company: "StartUp Studio",
    duration: "2024 - Present",
    desc: "Led a team of three frontend engineers to refactor a legacy React app into a Next.js App Router workspace, improving performance metrics by 40% and SEO rankings.",
  },
  {
    role: "Front-end Engineer",
    company: "WebAgency Co.",
    duration: "2022 - 2024",
    desc: "Designed and engineered client websites, implementing high-fidelity designs from Figma. Integrated robust content management systems and optimized image pipelines.",
  },
  {
    role: "Junior Full-Stack Developer",
    company: "Freelance & Open Source",
    duration: "2020 - 2022",
    desc: "Built custom e-commerce templates and content portals for small business clients. Contributed regularly to open-source UI libraries and tools.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>
        <span className={styles.headingNumber}>01.</span> About Me
        <span className={styles.headingLine}></span>
      </h2>

      <div className={styles.content}>
        {/* Left Side: Bio & Skills */}
        <div className={styles.bio}>
          <p>
            Hello! My name is Alex, and I build high-performance web products that live on the intersection of engineering and design. My passion for web development began when I experimented with customizing browser themes and CSS inject scripts.
          </p>
          <p>
            Fast-forward to today, and I have worked in agency setups, agile start-up ecosystems, and as a freelance developer. I focus on writing clean, modular, and maintainable code to create interfaces that feel alive and responsive.
          </p>
          
          <h3 className={styles.skillsTitle}>Technologies I Work With:</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <span className={styles.skillDot}></span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Timeline Experience */}
        <div>
          <h3 className={`${styles.skillsTitle}`} style={{ marginTop: 0, marginBottom: '2rem' }}>
            Work History
          </h3>
          <div className={styles.timeline}>
            {experience.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineNode}></div>
                <h4 className={styles.timeTitle}>
                  {item.role} <span className={styles.timeCompany}>@ {item.company}</span>
                </h4>
                <span className={styles.timeDuration}>{item.duration}</span>
                <p className={styles.timeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
