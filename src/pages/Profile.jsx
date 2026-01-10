import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Profile() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    name: 'Demo User',
    email: 'demo@techlingo.com',
    joinDate: 'January 2024',
    avatar: '👤',
    stats: {
      coursesCompleted: 3,
      coursesInProgress: 2,
      totalXP: 2450,
      currentStreak: 5,
      longestStreak: 12,
      lessonsCompleted: 47,
      exercisesDone: 156,
      badges: 8
    },
    achievements: [
      { id: 1, icon: '🔥', name: 'Week Warrior', description: '7-day streak' },
      { id: 2, icon: '⚡', name: 'Quick Learner', description: 'Complete 10 lessons' },
      { id: 3, icon: '🎯', name: 'Sharpshooter', description: '100% on a quiz' },
      { id: 4, icon: '📚', name: 'Bookworm', description: 'Start 5 courses' },
      { id: 5, icon: '💪', name: 'Dedicated', description: '30 exercises done' },
      { id: 6, icon: '🏆', name: 'Champion', description: 'Complete a course' },
      { id: 7, icon: '⭐', name: 'Rising Star', description: 'Earn 1000 XP' },
      { id: 8, icon: '🚀', name: 'Rocket Start', description: 'First lesson done' }
    ],
    recentActivity: [
      { id: 1, action: 'Completed lesson', course: 'Java Programming', time: '2 hours ago' },
      { id: 2, action: 'Earned badge', course: 'Quick Learner', time: '1 day ago' },
      { id: 3, action: 'Started course', course: 'Python Basics', time: '3 days ago' },
      { id: 4, action: 'Completed quiz', course: 'Java Programming', time: '4 days ago' }
    ]
  }

  return (
    <div className="profile-page">
      <nav className="navbar">
        <h2 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>TechLingo</h2>
        <button className="btn-back-nav" onClick={() => navigate('/home')}>
          ← Back to Home
        </button>
      </nav>

      <div className="profile-content">
        {/* Profile Header */}
        <section className="profile-header-section">
          <div className="profile-header-card">
            <div className="profile-avatar-large">{user.avatar}</div>
            <div className="profile-header-info">
              <h1>{user.name}</h1>
              <p className="profile-email-display">{user.email}</p>
              <p className="profile-join-date">Member since {user.joinDate}</p>
            </div>
            <div className="profile-header-actions">
              <button className="btn-edit-profile">Edit Profile</button>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="profile-stats-section">
          <div className="stats-grid">
            <div className="stat-card stat-primary">
              <span className="stat-icon">🔥</span>
              <div className="stat-details">
                <span className="stat-number">{user.stats.currentStreak}</span>
                <span className="stat-title">Day Streak</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⚡</span>
              <div className="stat-details">
                <span className="stat-number">{user.stats.totalXP}</span>
                <span className="stat-title">Total XP</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <div className="stat-details">
                <span className="stat-number">{user.stats.lessonsCompleted}</span>
                <span className="stat-title">Lessons Done</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🏆</span>
              <div className="stat-details">
                <span className="stat-number">{user.stats.badges}</span>
                <span className="stat-title">Badges Earned</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="overview-grid">
                <div className="overview-card">
                  <h3>Learning Progress</h3>
                  <div className="progress-item">
                    <span className="progress-label">Courses Completed</span>
                    <span className="progress-value">{user.stats.coursesCompleted}</span>
                  </div>
                  <div className="progress-item">
                    <span className="progress-label">Courses In Progress</span>
                    <span className="progress-value">{user.stats.coursesInProgress}</span>
                  </div>
                  <div className="progress-item">
                    <span className="progress-label">Exercises Done</span>
                    <span className="progress-value">{user.stats.exercisesDone}</span>
                  </div>
                  <div className="progress-item">
                    <span className="progress-label">Longest Streak</span>
                    <span className="progress-value">{user.stats.longestStreak} days</span>
                  </div>
                </div>

                <div className="overview-card">
                  <h3>Recent Badges</h3>
                  <div className="badges-preview">
                    {user.achievements.slice(0, 4).map(badge => (
                      <div key={badge.id} className="badge-item-small">
                        <span className="badge-icon-small">{badge.icon}</span>
                        <span className="badge-name-small">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-view-all" onClick={() => setActiveTab('achievements')}>
                    View All Badges →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-content">
              <h3>All Achievements</h3>
              <div className="achievements-grid">
                {user.achievements.map(badge => (
                  <div key={badge.id} className="achievement-card">
                    <span className="achievement-icon">{badge.icon}</span>
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-content">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {user.recentActivity.map(item => (
                  <div key={item.id} className="activity-item">
                    <div className="activity-dot"></div>
                    <div className="activity-info">
                      <p className="activity-action">{item.action}: <strong>{item.course}</strong></p>
                      <span className="activity-time">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <h3>Account Settings</h3>
              <div className="settings-section">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Email Notifications</h4>
                    <p>Receive updates about your progress</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Daily Reminders</h4>
                    <p>Get reminded to practice every day</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Sound Effects</h4>
                    <p>Play sounds for achievements</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <h3 style={{ marginTop: '24px' }}>Danger Zone</h3>
              <div className="settings-section danger">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Reset Progress</h4>
                    <p>Clear all your learning progress</p>
                  </div>
                  <button className="btn-danger">Reset</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Delete Account</h4>
                    <p>Permanently delete your account</p>
                  </div>
                  <button className="btn-danger">Delete</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
