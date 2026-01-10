import './SignIn.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add authentication logic here
    console.log('Sign in:', { email, password })
    navigate('/home')
  }

  return (
    <div className="auth-container">
      <div className="auth-inner">
        <div className="auth-splash">
          <div
            className="splash-svg"
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
                <rect width="120" height="120" rx="16" fill="#fff7ed"/>
                <g transform="translate(10,10)">
                  <circle cx="50" cy="30" r="22" fill="#fb923c"/>
                  <rect x="10" y="60" width="80" height="28" rx="6" fill="#ffd8b3"/>
                  <path d="M18 68h44" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
                  <path d="M18 78h30" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
                </g>
              </svg>`,
            }}
          />
          <h2>Learn technical skills, bite-sized</h2>
          <p>
            TechLingo helps you practice programming concepts through short exercises,
            code snippets and multiple-choice challenges. Track progress and keep a daily streak.
          </p>
        </div>

        <div className="auth-card">
          <h1>Welcome Back!</h1>
          <p>Sign in to continue your learning journey</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            
            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </form>
          
          <div className="auth-footer" style={{ marginTop: 18 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
