"use client"

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Complete Survey",
      description: "Share your feedback about Google Gemini and your experience as an ambassador",
      icon: "📝",
      link: "https://forms.gle/example1",
    },
    {
      id: 2,
      title: "Build a Project",
      description: "Create an innovative project using Google Gemini and share it with the community",
      icon: "💻",
      link: "https://forms.gle/example2",
    },
    {
      id: 3,
      title: "Learn & Share",
      description: "Complete the learning module and share your insights with other ambassadors",
      icon: "🎓",
      link: "https://forms.gle/example3",
    },
    {
      id: 4,
      title: "Ambassador Challenge",
      description: "Participate in the monthly challenge and showcase your skills",
      icon: "🌟",
      link: "https://forms.gle/example4",
    },
    {
      id: 5,
      title: "Write a Blog Post",
      description: "Share your experience and knowledge about Gemini in a blog post",
      icon: "✍️",
      link: "https://forms.gle/example5",
    },
    {
      id: 6,
      title: "Mentor Others",
      description: "Help other students and developers learn about Google Gemini",
      icon: "🤝",
      link: "https://forms.gle/example6",
    },
  ]

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1>Assigned Tasks</h1>
        <p>Complete these tasks to earn badges and recognition in the Google Ambassador Program</p>
      </div>

      <div className="tasks-container">
        <div className="tasks-list">
          {tasks.map((task) => (
            <a key={task.id} href={task.link} target="_blank" rel="noopener noreferrer" className="task-item">
              <div className="task-item-icon">{task.icon}</div>
              <div className="task-item-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="task-item-arrow">→</div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tasks-page {
          min-height: 100vh;
          background-color: #ffffff;
          padding: 40px 20px;
        }

        .tasks-header {
          max-width: 1000px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .tasks-header h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: #000000;
          margin-bottom: 15px;
          letter-spacing: -0.5px;
        }

        .tasks-header p {
          font-size: 1.1rem;
          color: #666666;
          line-height: 1.6;
          letter-spacing: 0.3px;
        }

        .tasks-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .tasks-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .task-item {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          padding: 25px 30px;
          display: flex;
          align-items: center;
          gap: 25px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .task-item:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateX(10px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .task-item-icon {
          font-size: 2.5rem;
          min-width: 60px;
          text-align: center;
        }

        .task-item-content {
          flex: 1;
        }

        .task-item-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .task-item-content p {
          font-size: 0.95rem;
          color: #666666;
          line-height: 1.5;
          letter-spacing: 0.2px;
        }

        .task-item-arrow {
          font-size: 1.5rem;
          color: #000000;
          transition: transform 0.3s ease;
        }

        .task-item:hover .task-item-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .tasks-page {
            padding: 30px 15px;
          }

          .tasks-header {
            margin-bottom: 40px;
          }

          .tasks-header h1 {
            font-size: 1.8rem;
          }

          .tasks-header p {
            font-size: 1rem;
          }

          .task-item {
            padding: 20px;
            gap: 15px;
          }

          .task-item-icon {
            font-size: 2rem;
            min-width: 50px;
          }

          .task-item-content h3 {
            font-size: 1.1rem;
          }

          .task-item-content p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .tasks-page {
            padding: 20px 15px;
          }

          .task-item {
            flex-direction: column;
            text-align: center;
            padding: 20px 15px;
          }

          .task-item-icon {
            font-size: 2.5rem;
          }

          .task-item-arrow {
            display: none;
          }

          .task-item-content h3 {
            font-size: 1rem;
          }

          .task-item-content p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  )
}
