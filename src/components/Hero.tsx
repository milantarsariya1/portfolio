"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow}></div>
      <div className={styles.glowSecond}></div>
      
      <div className={styles.container}>
        <div>
          <p className={styles.intro}>Hi, my name is</p>
          <h1 className={`${styles.title} text-gradient`}>Milan Tarsariya</h1>
          <h2 className={styles.subtitle}>I build exceptional digital interfaces.</h2>
          <p className={styles.description}>
            I am a full-stack developer specializing in engineering high-performance,
            visually stunning, and interactive web applications. Currently, I build next-generation applications with React, Next.js, and TypeScript.
          </p>
          
          <div className={styles.ctas}>
            <a 
              href="#projects" 
              className={styles.btnPrimary} 
              onClick={(e) => handleScrollTo(e, "projects")}
            >
              Explore Projects
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a 
              href="#contact" 
              className={styles.btnSecondary} 
              onClick={(e) => handleScrollTo(e, "contact")}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={styles.visualWrapper}>
          <div className={`${styles.windowCard} glass float-animation`}>
            <div className={styles.windowHeader}>
              <div className={`${styles.dot} ${styles.dotRed}`}></div>
              <div className={`${styles.dot} ${styles.dotYellow}`}></div>
              <div className={`${styles.dot} ${styles.dotGreen}`}></div>
              <span className={styles.windowTitle}>profile.ts</span>
            </div>
            <div className={styles.windowBody}>
              <div>
                <span className={styles.lineNum}>01</span>
                <span className={styles.syntaxKeyword}>const</span>{" "}
                <span className={styles.syntaxName}>developer</span> = &#123;
              </div>
              <div>
                <span className={styles.lineNum}>02</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>name</span>:{" "}
                <span className={styles.syntaxString}>&quot;Milan Tarsariya&quot;</span>,
              </div>
              <div>
                <span className={styles.lineNum}>03</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>role</span>:{" "}
                <span className={styles.syntaxString}>&quot;Full-Stack Developer&quot;</span>,
              </div>
              <div>
                <span className={styles.lineNum}>04</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>techStack</span>: [
              </div>
              <div>
                <span className={styles.lineNum}>05</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.syntaxString}>&quot;Next.js&quot;</span>,{" "}
                <span className={styles.syntaxString}>&quot;React&quot;</span>,{" "}
                <span className={styles.syntaxString}>&quot;TypeScript&quot;</span>,
              </div>
              <div>
                <span className={styles.lineNum}>06</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.syntaxString}>&quot;Node.js&quot;</span>,{" "}
                <span className={styles.syntaxString}>&quot;CSS/CSS Modules&quot;</span>
              </div>
              <div>
                <span className={styles.lineNum}>07</span>
                &nbsp;&nbsp;],
              </div>
              <div>
                <span className={styles.lineNum}>08</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>hardWorker</span>:{" "}
                <span className={styles.syntaxValue}>true</span>,
              </div>
              <div>
                <span className={styles.lineNum}>09</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>problemSolver</span>:{" "}
                <span className={styles.syntaxValue}>true</span>,
              </div>
              <div>
                <span className={styles.lineNum}>10</span>
                &nbsp;&nbsp;<span className={styles.syntaxName}>passion</span>:{" "}
                <span className={styles.syntaxString}>&quot;Crafting immersive UX&quot;</span>
              </div>
              <div>
                <span className={styles.lineNum}>11</span>
                &#125;;
              </div>
              <div style={{ marginTop: '1rem' }}>
                <span className={styles.lineNum}>12</span>
                <span className={styles.syntaxComment}>{"// Click below to chat!"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
