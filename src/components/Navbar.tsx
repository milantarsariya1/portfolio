"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = "unset";
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => handleLinkClick(e, "hero")}>
          <span className="text-gradient">Milan</span>
          <span className={styles.logoDot}></span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#about" className={styles.link} onClick={(e) => handleLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.link} onClick={(e) => handleLinkClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link} onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={styles.resumeBtn}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Hire Me
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </li>
        </ul>

        {/* Burger Button for Mobile */}
        <button 
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </button>

        {/* Mobile Navigation Drawer */}
        <ul className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ""}`}>
          <li>
            <a href="#about" className={styles.link} onClick={(e) => handleLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.link} onClick={(e) => handleLinkClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link} onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={styles.resumeBtn}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
