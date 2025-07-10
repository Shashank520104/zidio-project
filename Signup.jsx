import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './AuthStyles.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields!')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Signup successful!')
    navigate('/login')
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Signup</h2>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="auth-input"
          />
        </div>
        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="auth-input"
          />
        </div>
        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
            className="auth-input"
          />
          <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit" className="auth-button">Signup</button>
        <p className="auth-switch" onClick={() => navigate('/login')}>Already have an account? <span>Login</span></p>
      </form>
    </div>
  )
}
