"use client"

import { useRef, useState, useEffect } from "react"
import "./HomePage.css"

export default function HomePage() {
  const [showNavbar, setShowNavbar] = useState(false)

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const tasksRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setShowNavbar(heroBottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="home-page">

      {/* Animated Background */}
      <div className="animated-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>

        <div className="glow-dot glow-1"></div>
        <div className="glow-dot glow-2"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? "navbar-visible" : ""}`}>
        <div className="navbar-container">

          <div className="navbar-logo">
            Google Ambassador
          </div>

          <ul className="navbar-menu">
            <li>
              <button
                onClick={() => scrollToSection(heroRef)}
                className="nav-link"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="nav-link"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection(tasksRef)}
                className="nav-link"
              >
                Tasks
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>

        <div className="hero-background">
          <div className="floating-line line-1"></div>
          <div className="floating-line line-2"></div>
          <div className="floating-line line-3"></div>
        </div>

        <div className="hero-content">

          <div className="hero-text">

            <h1 className="hero-title">
              Meet Our Google Ambassador
            </h1>

            <p className="hero-description">
              A passionate student leader dedicated to empowering peers
              with cutting-edge AI technology and fostering innovation
              in our community.
            </p>

            <div className="experience-section">
              <h2 className="experience-title">
                Dhaniska Sri L P
              </h2>

              <p className="experience-description">
                Student of Computer Science and Business System.
              </p>
            </div>

          </div>

          <div className="hero-photo-wrapper">
            <div className="profile-photo-container">

              <img
                src="/professional-ambassador-portrait.jpg"
                alt="Google Ambassador"
                className="profile-photo"
              />

            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef}>
        <div className="section-container">

          <h2 className="section-heading">
            What is Google Gemini?
          </h2>

          <div className="gemini-description">
            <p>
              Google Gemini is Google's advanced AI model designed to
              understand and generate text, images, and code with
              remarkable accuracy.
            </p>
          </div>

          <h3 className="benefits-heading">
            How Gemini Helps Students
          </h3>

          <div className="benefits-list">

            <div className="benefit-item">
              <span className="benefit-icon">📚</span>
              <span className="benefit-text">
                Learning Assistance
              </span>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">💻</span>
              <span className="benefit-text">
                Coding Support
              </span>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <span className="benefit-text">
                Productivity Boost
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Tasks Section */}
      <section className="tasks-section" ref={tasksRef}>
        <div className="section-container">

          <h2 className="section-heading">
            Tasks & Activities
          </h2>

          <div className="tasks-grid">

            <a
              href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=18"
              target="_blank"
              rel="noopener noreferrer"
              className="task-card"
            >
              <div className="task-icon">📝</div>
              <h3>Task 1</h3>
              <p>Complete the introductory survey</p>
            </a>

            <a
              href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=19"
              target="_blank"
              rel="noopener noreferrer"
              className="task-card"
            >
              <div className="task-icon">💻</div>
              <h3>Task 2</h3>
              <p>Build a project with Gemini</p>
            </a>

            <a
              href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=20"
              target="_blank"
              rel="noopener noreferrer"
              className="task-card"
            >
              <div className="task-icon">🎓</div>
              <h3>Task 3</h3>
              <p>Complete the learning module</p>
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2025 Google Ambassador Program.
          All rights reserved.
        </p>
      </footer>

    </div>
  )
}
