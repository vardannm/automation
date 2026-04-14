import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Both fields are required')
      return
    }
    // Simulate successful login
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      // In real QA practice you would navigate, here we just reset for demo
      setUsername('')
      setPassword('')
    }, 2500)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h1 data-testid="page-title" className="text-3xl font-semibold text-center mb-8 text-gray-900">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              id="username"
              data-testid="username-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter username"
              aria-label="Username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              data-testid="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                data-testid="remember-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" data-testid="forgot-password-link" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          {error && (
            <p data-testid="error-message" className="text-red-600 text-sm bg-red-50 p-3 rounded-2xl">{error}</p>
          )}

          <button
            type="submit"
            id="login-btn"
            data-testid="login-button"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-4 rounded-3xl text-lg shadow-sm"
          >
            Login
          </button>
        </form>

        {success && (
          <div data-testid="success-message" className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-3xl text-center font-medium">
            ✅ Login successful! Welcome back.
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">Built for Playwright + Python pytest practice</p>
      </div>
    </div>
  )
}