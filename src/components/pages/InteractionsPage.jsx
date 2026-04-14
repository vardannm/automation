import { useState } from 'react'

export default function InteractionsPage() {
  const [checkedItems, setCheckedItems] = useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [multiSelect, setMultiSelect] = useState([])
  const [draggedItem, setDraggedItem] = useState(null)

  const options = ['Option A', 'Option B', 'Option C', 'Option D']

  const handleCheckbox = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter(i => i !== value))
    } else {
      setCheckedItems([...checkedItems, value])
    }
  }

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (draggedItem) {
      alert(`You dropped "${draggedItem}" into the drop zone!`)
      setDraggedItem(null)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 data-testid="page-title" className="text-3xl font-semibold mb-8 text-center">Drag, Dropdowns &amp; Checkboxes</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkboxes */}
        <div className="bg-white rounded-3xl p-8">
          <h3 className="font-semibold mb-4">Multiple Checkboxes</h3>
          {options.map(opt => (
            <label key={opt} className="flex items-center gap-x-3 mb-3 cursor-pointer">
              <input
                type="checkbox"
                data-testid={`checkbox-${opt.toLowerCase().replace(' ', '-')}`}
                checked={checkedItems.includes(opt)}
                onChange={() => handleCheckbox(opt)}
                className="accent-blue-600"
              />
              <span>{opt}</span>
            </label>
          ))}
          <p data-testid="checked-count" className="text-xs mt-6 text-gray-400">Checked: {checkedItems.length}</p>
        </div>

        {/* Single Select */}
        <div className="bg-white rounded-3xl p-8">
          <h3 className="font-semibold mb-4">Single Dropdown</h3>
          <select
            data-testid="single-select"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-3xl"
          >
            <option value="">Choose one...</option>
            {options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Multiselect */}
        <div className="bg-white rounded-3xl p-8">
          <h3 className="font-semibold mb-4">Multi-Select</h3>
          <select
            multiple
            data-testid="multi-select"
            value={multiSelect}
            onChange={e => setMultiSelect(Array.from(e.target.selectedOptions, option => option.value))}
            className="w-full px-4 py-4 border border-gray-300 rounded-3xl h-40"
          >
            {options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Drag & Drop */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8">
          <h3 className="font-semibold mb-6">Drag &amp; Drop Demo</h3>
          <div className="flex gap-8">
            {/* Draggable items */}
            <div className="flex-1 space-y-4">
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, 'Item 1')}
                data-testid="draggable-item-1"
                className="bg-blue-100 hover:bg-blue-200 transition-colors px-6 py-4 rounded-3xl cursor-grab text-center"
              >
                Drag me → Item 1
              </div>
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, 'Item 2')}
                data-testid="draggable-item-2"
                className="bg-blue-100 hover:bg-blue-200 transition-colors px-6 py-4 rounded-3xl cursor-grab text-center"
              >
                Drag me → Item 2
              </div>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={e => e.preventDefault()}
              onDrop={handleDrop}
              data-testid="drop-zone"
              className="flex-1 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center min-h-[180px] hover:border-blue-400 transition-colors"
            >
              <p className="text-gray-400 text-center">Drop items here</p>
            </div>

            {/* Hover tooltip example */}
            <div className="flex-1 flex items-center justify-center">
              <div
                data-testid="hover-element"
                className="group relative bg-amber-100 text-amber-800 px-8 py-4 rounded-3xl cursor-pointer"
              >
                Hover me
                <div className="absolute hidden group-hover:block -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-2xl whitespace-nowrap">
                  This is a tooltip!
                </div>
              </div>
            </div>
          </div>

          {/* Disabled button */}
          <button
            data-testid="disabled-button"
            disabled
            className="mt-8 w-full bg-gray-300 text-gray-400 py-4 rounded-3xl cursor-not-allowed"
          >
            This button is disabled (good for negative testing)
          </button>
        </div>
      </div>
    </div>
  )
}