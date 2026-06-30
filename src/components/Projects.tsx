import Image from "next/image";
import styles from "./Projects.module.css";

const projectsList = [
  {
    title: "Nova Commerce",
    desc: "A high-performance headless commerce dashboard with interactive checkout flows, stripe integrations, and real-time inventory management dashboards.",
    image: "/images/nova_commerce.png",
    tags: ["Next.js", "React 19", "Stripe", "CSS Modules"],
    github: "#",
    live: "#",
  },
  {
    title: "Quantum Analytics",
    desc: "A telemetry and data visualization platform displaying server logs and metrics in real-time. Features glassmorphic widgets and interactive charts.",
    image: "/images/quantum_analytics.png",
    tags: ["TypeScript", "Next.js", "Recharts", "WebSockets"],
    github: "#",
    live: "#",
  },
  {
    title: "Aura Design System",
    desc: "An open-source token manager and component framework designed to automate style syncing between Figma variables and production CSS systems.",
    image: "/images/aura_design_system.png",
    tags: ["React", "CSS Variables", "Figma API", "Rollup"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>
        <span className={styles.headingNumber}>02.</span> Featured Work
        <span className={styles.headingLine}></span>
      </h2>

      <div className={styles.grid}>
        {projectsList.map((project, index) => (
          <div key={index} className={`${styles.card} glass`}>
            {/* Project Image */}
            <div className={styles.imageWrapper}>
              <div className={styles.imageOverlay}></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={project.image ? styles.projectImage : ""}
              />
            </div>

            {/* Project Details */}
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.desc}</p>
              
              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className={styles.links}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkItem}
                >
                  <svg 
                    className={styles.linkIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkItem}
                >
                  <svg 
                    className={styles.linkIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
