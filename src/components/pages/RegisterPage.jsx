import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: ''
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const countries = ['Armenia', 'USA', 'India', 'Germany', 'France']

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'First name required'
    if (!formData.email) newErrors.email = 'Email required'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-10">
        <h1 data-testid="page-title" className="text-3xl font-semibold text-center mb-8">Create Account</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm mb-1">First Name</label>
            <input
              data-testid="first-name-input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Last Name</label>
            <input
              data-testid="last-name-input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
              placeholder="Doe"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm mb-1">Email</label>
            <input
              data-testid="email-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Phone</label>
            <input
              data-testid="phone-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
              placeholder="+374 99 123456"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Country</label>
            <select
              data-testid="country-select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
            >
              <option value="">Select country</option>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm mb-2">Gender</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  data-testid="gender-male"
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  data-testid="gender-female"
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              data-testid="password-input"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              data-testid="confirm-password-input"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            data-testid="register-button"
            className="col-span-2 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-3xl text-lg"
          >
            Create Account
          </button>
        </form>

        {success && (
          <div data-testid="register-success" className="mt-6 text-center p-4 bg-emerald-50 text-emerald-700 rounded-3xl">
            🎉 Registration successful! You can now login.
          </div>
        )}
      </div>
    </div>
  )
}