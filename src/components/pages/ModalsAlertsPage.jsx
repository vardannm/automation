import { useState } from 'react'

export default function ModalsAlertsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)

  const showToast = () => {
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2800)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 data-testid="page-title" className="text-3xl font-semibold text-center">Modals &amp; Alerts</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Modal */}
        <button
          data-testid="open-modal-btn"
          onClick={() => setModalOpen(true)}
          className="bg-violet-600 text-white py-6 rounded-3xl text-lg font-medium"
        >
          Open Modal
        </button>

        {/* Confirm Dialog */}
        <button
          data-testid="open-confirm-btn"
          onClick={() => setConfirmOpen(true)}
          className="bg-amber-600 text-white py-6 rounded-3xl text-lg font-medium"
        >
          Show Confirm Dialog
        </button>

        {/* Toast */}
        <button
          data-testid="show-toast-btn"
          onClick={showToast}
          className="bg-teal-600 text-white py-6 rounded-3xl text-lg font-medium"
        >
          Show Success Toast
        </button>

        {/* Warning Alert */}
        <button
          data-testid="show-alert-btn"
          onClick={() => setAlertVisible(true)}
          className="bg-red-600 text-white py-6 rounded-3xl text-lg font-medium"
        >
          Show Warning Alert
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" data-testid="modal-backdrop">
          <div className="bg-white rounded-3xl max-w-md w-full mx-4 p-8">
            <h2 className="text-2xl font-semibold mb-4">Demo Modal</h2>
            <p className="mb-8 text-gray-600">This modal is perfect for testing visibility assertions and close actions.</p>
            <div className="flex gap-4">
              <button
                data-testid="modal-close-btn"
                onClick={() => setModalOpen(false)}
                className="flex-1 py-4 border border-gray-300 rounded-3xl"
              >
                Close
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 py-4 bg-blue-600 text-white rounded-3xl"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Dialog */}
      {confirmOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full mx-4 p-8 text-center">
            <h2 className="font-semibold text-xl mb-2">Are you sure?</h2>
            <p className="text-gray-500 mb-8">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                data-testid="confirm-no-btn"
                onClick={() => setConfirmOpen(false)}
                className="flex-1 py-4 text-gray-700 border border-gray-300 rounded-3xl"
              >
                Cancel
              </button>
              <button
                data-testid="confirm-yes-btn"
                onClick={() => setConfirmOpen(false)}
                className="flex-1 py-4 bg-red-600 text-white rounded-3xl"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastVisible && (
        <div data-testid="success-toast" className="fixed bottom-8 right-8 bg-emerald-600 text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-x-3">
          <span>✅ Operation completed successfully!</span>
        </div>
      )}

      {/* Alert */}
      {alertVisible && (
        <div data-testid="warning-alert" className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-orange-100 border border-orange-400 text-orange-700 px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-x-3">
          ⚠️ This is a warning message for QA testing
          <button onClick={() => setAlertVisible(false)} className="ml-4 text-orange-800 font-bold">×</button>
        </div>
      )}
    </div>
  )
}