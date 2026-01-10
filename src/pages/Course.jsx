import './Course.css'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import coursesData from '../data/courses.json'

export default function Course() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const courseId = parseInt(id, 10)

  const course = useMemo(() => 
    coursesData.courses.find(c => c.id === courseId), 
    [courseId]
  )

  const isActive = location.state?.isActive ?? course?.isActive ?? false

  if (!course) {
    return (
      <div className="course-page">
        <div className="course-error">
          <h1>Course not found</h1>
          <p>We couldn't find this course.</p>
          <button className="btn-primary" onClick={() => navigate('/home')}>
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const handleStartCourse = () => {
    alert('Starting course... (Connect to your learning flow)')
    // TODO: Navigate to first lesson
  }

  const handleResumeCourse = () => {
    alert('Resuming course... (Connect to your learning flow)')
    // TODO: Navigate to current lesson
  }

  return (
    <div className="course-page">
      <header className="course-header">
        <button className="btn-back" onClick={() => navigate('/home')}>
          ← Back to Home
        </button>
        <div className="course-header-info">
          <div className="course-icon-large">
            {course.icon}
          </div>
          <div>
            <h1>{course.name}</h1>
            <p className="course-status">
              {isActive ? '🔥 Ongoing course' : '✨ New course'}
            </p>
          </div>
        </div>
      </header>

      <main className="course-main">
        {isActive ? (
          /* Ongoing Course Layout */
          <>
            <section className="course-progress-section">
              <h2>Your Progress</h2>
              <div className="progress-card">
                <div className="progress-stats">
                  <div className="stat">
                    <span className="stat-value">{course.progress}%</span>
                    <span className="stat-label">Complete</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">12</span>
                    <span className="stat-label">Lessons left</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">5</span>
                    <span className="stat-label">Day streak</span>
                  </div>
                </div>
                <div className="progress-bar-large">
                  <div 
                    className="progress-fill-large" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </section>

            <section className="course-lessons">
              <h2>Continue Learning</h2>
              <div className="lesson-list">
                <div className="lesson-item current">
                  <div className="lesson-icon">📝</div>
                  <div className="lesson-info">
                    <h3>Lesson 8: Advanced Concepts</h3>
                    <p>5 exercises • 15 min</p>
                  </div>
                  <button className="btn-primary" onClick={handleResumeCourse}>
                    Resume
                  </button>
                </div>
                <div className="lesson-item locked">
                  <div className="lesson-icon">🔒</div>
                  <div className="lesson-info">
                    <h3>Lesson 9: Practice Session</h3>
                    <p>8 exercises • 20 min</p>
                  </div>
                </div>
                <div className="lesson-item locked">
                  <div className="lesson-icon">🔒</div>
                  <div className="lesson-info">
                    <h3>Lesson 10: Code Challenge</h3>
                    <p>3 exercises • 30 min</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* New Course Layout */
          <>
            <section className="course-overview">
              <h2>About this course</h2>
              <p className="course-description">{course.description}</p>
              
              <div className="course-features">
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <div>
                    <h3>20+ Lessons</h3>
                    <p>Structured learning path</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">💡</span>
                  <div>
                    <h3>MCQs & Code</h3>
                    <p>Interactive exercises</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🏆</span>
                  <div>
                    <h3>Track Progress</h3>
                    <p>Earn badges & streaks</p>
                  </div>
                </div>
              </div>

              <button className="btn-primary btn-large" onClick={handleStartCourse}>
                Start Learning
              </button>
            </section>

            <section className="course-preview">
              <h2>What you'll learn</h2>
              <ul className="learning-list">
                <li>Core concepts and fundamentals</li>
                <li>Hands-on coding exercises</li>
                <li>Real-world examples and use cases</li>
                <li>Best practices and common patterns</li>
                <li>Project-based learning</li>
              </ul>
            </section>
          </>
        )}

        <aside className="course-sidebar">
          <div className="sidebar-card">
            <h3>Course Info</h3>
            <div className="info-item">
              <span className="info-label">Level</span>
              <span className="info-value">Beginner to Advanced</span>
            </div>
            <div className="info-item">
              <span className="info-label">Duration</span>
              <span className="info-value">~8 hours</span>
            </div>
            <div className="info-item">
              <span className="info-label">Exercises</span>
              <span className="info-value">50+ challenges</span>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Example Code</h3>
            <pre className="code-preview">
{`// Sample code
function hello() {
  console.log("Hello!");
}`}
            </pre>
          </div>
        </aside>
      </main>
    </div>
  )
}
