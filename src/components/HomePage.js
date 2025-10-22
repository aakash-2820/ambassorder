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
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
 const handleTaskClick = async (e, taskId) => {
  const token = localStorage.getItem("token");
  console.log(taskId);
  if (!token) {
    console.error("No token found, user might not be logged in.");
    return;
  }

  // ❌ Remove e.preventDefault();

  try {
    const response = await fetch(`http://localhost:5000/api/tasks/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ taskName : `task${taskId}` }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Task completion failed");
    }
    console.log("✅ Task marked as completed:", data);
  }
  catch (err) {
    console.error("Error during task completion:", err.message);
  }
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

      <nav className={`navbar ${showNavbar ? "navbar-visible" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">Google Ambassador</div>
          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection(heroRef)} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(aboutRef)} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(tasksRef)} className="nav-link">
                Tasks
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="floating-line line-1"></div>
          <div className="floating-line line-2"></div>
          <div className="floating-line line-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Meet Our Google Ambassador</h1>

            <p className="hero-description">
              A passionate student leader dedicated to empowering peers with cutting-edge AI technology and fostering
              innovation in our community.
            </p>

            <div className="experience-section">
              <h2 className="experience-title">Experience</h2>
              <p className="experience-description">
                Leading workshops on AI applications, mentoring students in machine learning, and driving initiatives to
                make advanced technology accessible to all learners.
              </p>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="profile-photo-container">
              <img src="/professional-ambassador-portrait.jpg" alt="Google Ambassador" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" ref={aboutRef}>
        <div className="section-container">
          <h2 className="section-heading">What is Google Gemini?</h2>

          <div className="gemini-description">
            <p>
              Google Gemini is Google's most advanced AI model, designed to understand and generate text, images, and
              code with remarkable accuracy. It represents the cutting edge of artificial intelligence, enabling
              students and developers to build innovative solutions and explore creative possibilities.
            </p>
          </div>

          <h3 className="benefits-heading">How Gemini Helps Students</h3>

          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">📚</span>
              <span className="benefit-text">Learning Assistance - Get personalized help with any subject</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔍</span>
              <span className="benefit-text">AI-Powered Research - Conduct smarter research with instant insights</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <span className="benefit-text">Productivity Boost - Automate tasks and save valuable time</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💻</span>
              <span className="benefit-text">Coding Support - Debug code and learn programming concepts</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✍️</span>
              <span className="benefit-text">Content Creation - Generate ideas and write better content</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span className="benefit-text">Problem Solving - Break down complex problems into solutions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tasks-section" ref={tasksRef}>
        <div className="section-container">
          <h2 className="section-heading">Tasks & Activities</h2>

          <div className="tasks-grid">
            <a href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=18" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 1)}>
              <div className="task-icon">📝</div>
              <h3>Task 1</h3>
              <p>Complete the introductory survey</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=19" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 2)}>
              <div className="task-icon">💻</div>
              <h3>Task 2</h3>
              <p>Build a project with Gemini</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=20" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 3)}>
              <div className="task-icon">🎓</div>
              <h3>Task 3</h3>
              <p>Complete the learning module</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=21" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 4)}>
              <div className="task-icon">🌟</div>
              <h3>Task 4</h3>
              <p>Participate in the challenge</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=22" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 5)}>
              <div className="task-icon">🚀</div>
              <h3>Task 5</h3>
              <p>Share your project showcase</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator?uid=3916&promptId=20" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 6)}>
              <div className="task-icon">🎨</div>
              <h3>Task 6</h3>
              <p>Create a design with AI</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator?uid=3916&promptId=19" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 7)}>
              <div className="task-icon">📊</div>
              <h3>Task 7</h3>
              <p>Analyze data with Gemini</p>
            </a>
            <a href="https://aiskillshouse.com/student/qr-mediator?uid=3916&promptId=18" target="_blank" rel="noopener noreferrer" className="task-card" onClick={(e) =>handleTaskClick(e, 8)}>
              <div className="task-icon">🏆</div>
              <h3>Task 8</h3>
              <p>Submit your final project</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Google Ambassador Program. All rights reserved.</p>
      </footer>
    </div>
  )
}
