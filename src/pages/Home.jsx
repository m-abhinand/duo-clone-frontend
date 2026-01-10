import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import coursesData from '../data/courses.json'

// Color classes for different courses
const courseColors = ['color-blue', 'color-purple', 'color-green', 'color-pink', 'color-teal', 'color-orange']

function Home() {
  const navigate = useNavigate()
  const [activeCourses, setActiveCourses] = useState([])
  const [discoverCourses, setDiscoverCourses] = useState([])
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [favorites, setFavorites] = useState(new Set())

  useEffect(() => {
    // Split courses into active and discover
    const active = coursesData.courses.filter(course => course.isActive)
    const discover = coursesData.courses.filter(course => !course.isActive)
    
    setActiveCourses(active)
    setDiscoverCourses(discover)
  }, [])

  const handleLogout = () => {
    navigate('/signin')
  }

  const handleOpenCourse = (courseId, isActive) => {
    navigate(`/course/${courseId}`, { state: { isActive } })
  }

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
  }

  const toggleFavorite = (e, courseId) => {
    e.stopPropagation()
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(courseId)) {
        newFavorites.delete(courseId)
      } else {
        newFavorites.add(courseId)
      }
      return newFavorites
    })
  }

  const handleProfile = () => {
    setShowProfileMenu(false)
    navigate('/profile')
  }

  const handleSettings = () => {
    setShowProfileMenu(false)
    alert('Navigate to settings')
    // TODO: navigate('/settings')
  }

  const handleProgress = () => {
    setShowProfileMenu(false)
    alert('Navigate to progress page')
    // TODO: navigate('/progress')
  }

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>TechLingo</h2>
        
        <div className="navbar-profile">
          <button className="profile-btn" onClick={toggleProfileMenu}>
            <span className="profile-icon">👤</span>
          </button>
          
          {showProfileMenu && (
            <>
              <div className="profile-overlay" onClick={() => setShowProfileMenu(false)} />
              <div className="profile-menu">
                <div className="profile-menu-header">
                  <div className="profile-avatar">👤</div>
                  <div className="profile-info">
                    <p className="profile-name">Demo User</p>
                    <p className="profile-email">demo@techlingo.com</p>
                  </div>
                </div>
                
                <div className="profile-menu-divider" />
                
                <button className="profile-menu-item" onClick={handleProfile}>
                  <span className="menu-icon">👤</span>
                  My Profile
                </button>
                
                <button className="profile-menu-item" onClick={handleProgress}>
                  <span className="menu-icon">📊</span>
                  My Progress
                </button>
                
                <button className="profile-menu-item" onClick={handleSettings}>
                  <span className="menu-icon">⚙️</span>
                  Settings
                </button>
                
                <div className="profile-menu-divider" />
                
                <button className="profile-menu-item logout" onClick={handleLogout}>
                  <span className="menu-icon">🚪</span>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
      
      <div className="home-content">
        {/* Active Courses Section */}
        <section className="courses-section active-courses">
          <h1>Continue Learning</h1>
          <p className="subtitle">Pick up where you left off</p>
          
          <div className="courses-grid">
            {activeCourses.map(course => (
              <div key={course.id} className="course-card active" onClick={() => handleOpenCourse(course.id, true)}>
                <div className="course-icon">{course.icon}</div>

                <div className="course-content">
                  <h3>{course.name}</h3>
                  <div className="course-progress-row">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="progress-percent">{course.progress}%</span>
                  </div>
                </div>

                <button className="btn-continue" onClick={(e) => { e.stopPropagation(); handleOpenCourse(course.id, true); }}>
                  Continue
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Discover More Section */}
        <section className="courses-section discover-section">
          <h2>Discover More Courses</h2>
          <p className="subtitle">Expand your knowledge with new topics</p>

          <div className="courses-grid">
            {discoverCourses.map((course, index) => (
              <div 
                key={course.id} 
                className={`course-card discover ${courseColors[index % courseColors.length]}`}
              >
                <div className="course-image">
                  <span className="course-title-overlay">{course.name}</span>
                  <span className="course-icon-badge">{course.icon}</span>
                </div>

                <div className="course-card-content">
                  <div className="course-body">
                    <p className="course-desc">{course.description}</p>
                  </div>
                </div>

                <div className="course-footer">
                  <button
                    className={`btn-favorite ${favorites.has(course.id) ? 'active' : ''}`}
                    onClick={(e) => toggleFavorite(e, course.id)}
                    aria-label={favorites.has(course.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <span className="heart-icon">{favorites.has(course.id) ? '❤️' : '🤍'}</span>
                  </button>
                  <button
                    className="btn-start"
                    onClick={() => handleOpenCourse(course.id, false)}
                    aria-label={`Enroll in ${course.name}`}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
