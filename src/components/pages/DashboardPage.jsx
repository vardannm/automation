import { useState } from 'react'

const initialData = [
  { id: 1, title: 'Login form validation', status: 'Passed', priority: 'High', assignee: 'Anna' },
  { id: 2, title: 'Checkout flow', status: 'Failed', priority: 'Medium', assignee: 'Mike' },
  { id: 3, title: 'Search functionality', status: 'Passed', priority: 'Low', assignee: 'Sara' },
  { id: 4, title: 'Payment integration', status: 'In Progress', priority: 'High', assignee: 'John' },
  { id: 5, title: 'Mobile responsiveness', status: 'Passed', priority: 'Medium', assignee: 'Anna' },
  { id: 6, title: 'API error handling', status: 'Failed', priority: 'High', assignee: 'Mike' },
  { id: 7, title: 'User profile update', status: 'Passed', priority: 'Low', assignee: 'Sara' },
  { id: 8, title: 'Dark mode toggle', status: 'In Progress', priority: 'Medium', assignee: 'John' },
]

export default function DashboardPage() {
  const [data, setData] = useState(initialData)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState('id')
  const [sortDirection, setSortDirection] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const filteredData = data
    .filter(row => row.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this test case?')) {
      setData(data.filter(item => item.id !== id))
    }
  }

  return (
    <div>
      <h1 data-testid="page-title" className="text-3xl font-semibold mb-6">Test Cases Dashboard</h1>

      {/* Search */}
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search test cases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mb-6 px-5 py-3 border border-gray-300 rounded-3xl focus:outline-none"
      />

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full" data-testid="test-table">
          <thead className="bg-gray-50">
            <tr>
              <th onClick={() => handleSort('id')} className="cursor-pointer px-6 py-4 text-left text-xs font-medium text-gray-500">ID</th>
              <th onClick={() => handleSort('title')} className="cursor-pointer px-6 py-4 text-left text-xs font-medium text-gray-500">Test Case</th>
              <th onClick={() => handleSort('status')} className="cursor-pointer px-6 py-4 text-left text-xs font-medium text-gray-500">Status</th>
              <th onClick={() => handleSort('priority')} className="cursor-pointer px-6 py-4 text-left text-xs font-medium text-gray-500">Priority</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500">Assignee</th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(row => (
              <tr key={row.id} className="border-t hover:bg-gray-50" data-testid={`table-row-${row.id}`}>
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4 font-medium">{row.title}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-xs rounded-3xl ${
                    row.status === 'Passed' ? 'bg-green-100 text-green-700' :
                    row.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4">{row.priority}</td>
                <td className="px-6 py-4">{row.assignee}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    data-testid={`edit-btn-${row.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    data-testid={`delete-btn-${row.id}`}
                    onClick={() => handleDelete(row.id)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          data-testid="prev-page-btn"
          className="px-5 py-2 border border-gray-300 rounded-3xl disabled:opacity-30"
        >
          Previous
        </button>
        <span data-testid="page-info">Page {currentPage} of {totalPages || 1}</span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          data-testid="next-page-btn"
          className="px-5 py-2 border border-gray-300 rounded-3xl disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  )
}