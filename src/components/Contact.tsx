"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>
        <span className={styles.headingLine}></span>
        <span className={styles.headingNumber}>03.</span> Get In Touch
        <span className={styles.headingLine}></span>
      </h2>

      <p className={styles.desc}>
        I am currently looking for new opportunities, freelance collaborations, or open-source projects.
        Whether you have a question or just want to say hello, feel free to send a message!
      </p>

      {status === "success" ? (
        <div className={styles.successMessage}>
          <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`${styles.form} glass`} style={{ padding: '2.5rem', borderRadius: '16px' }}>
          {/* Name Input */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={styles.input}
            />
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
          </div>

          {/* Email Input */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
          </div>

          {/* Message Input */}
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className={styles.textarea}
            />
            <label htmlFor="message" className={`${styles.label} ${styles.textareaLabel}`}>
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === "sending"} 
            className={styles.submitBtn}
          >
            {status === "sending" ? (
              <>
                Sending...
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  className="pulse-slow-animation"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </>
            ) : (
              <>
                Send Message
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}
