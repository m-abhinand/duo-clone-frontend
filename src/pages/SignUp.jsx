import './SignUp.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add registration logic here
    console.log('Sign up:', { name, email, password })
    navigate('/home')
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Get Started</h1>
        <p>Create your account to start learning</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          
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
            Sign Up
          </button>
        </form>
        
        <div className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
