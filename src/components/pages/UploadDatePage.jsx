import { useState } from 'react'

export default function UploadDatePage() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (ev) => setPreview(ev.target.result)
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 data-testid="page-title" className="text-3xl font-semibold text-center mb-8">File Upload + Date Picker</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-3">Upload File</label>
          <input
            type="file"
            data-testid="file-input"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-4 file:px-8 file:rounded-3xl file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {preview && (
            <img
              data-testid="image-preview"
              src={preview}
              alt="Preview"
              className="mt-6 w-40 h-40 object-cover rounded-3xl border border-gray-200"
            />
          )}
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Date</label>
          <input
            type="date"
            data-testid="date-picker"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            className="w-full px-5 py-4 border border-gray-300 rounded-3xl"
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Time</label>
          <input
            type="time"
            data-testid="time-input"
            value={selectedTime}
            onChange={e => setSelectedTime(e.target.value)}
            className="w-full px-5 py-4 border border-gray-300 rounded-3xl"
          />
        </div>

        <button
          type="submit"
          data-testid="submit-upload-btn"
          className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-3xl transition-colors"
        >
          Submit Form
        </button>
      </form>

      {submitted && (
        <div data-testid="upload-success" className="mt-6 p-5 bg-purple-50 text-purple-700 text-center rounded-3xl">
          ✅ File uploaded and date/time recorded successfully!
        </div>
      )}
    </div>
  )
}