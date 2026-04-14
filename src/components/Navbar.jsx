import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
    }`

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-x-8">
            {/* Logo / Title */}
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">QA</div>
              <span className="font-semibold text-xl tracking-tight text-gray-900">Playwright Practice</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-x-2 text-sm">
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
              <NavLink to="/register" className={navLinkClass}>Register</NavLink>
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
              <NavLink to="/products" className={navLinkClass}>Products</NavLink>
              <NavLink to="/modals-alerts" className={navLinkClass}>Modals</NavLink>
              <NavLink to="/interactions" className={navLinkClass}>Interactions</NavLink>
              <NavLink to="/upload-date" className={navLinkClass}>Upload + Date</NavLink>
            </div>
          </div>

          <div className="text-xs font-mono bg-gray-100 text-gray-500 px-3 py-1 rounded-md">
            localhost:5170 • Ready for Playwright
          </div>
        </div>
      </div>
    </nav>
  )
}