import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../features/authSlice'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './AuthStyles.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Please fill in all fields!')
      return
    }
    dispatch(login({ email, password }))
    navigate('/')
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>
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
          <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p className="auth-switch" onClick={() => navigate('/signup')}>Don't have an account? <span>Signup</span></p>
      </form>
    </div>
  )
}
