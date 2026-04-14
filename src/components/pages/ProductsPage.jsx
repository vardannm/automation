import { useState } from 'react'

const productsData = [
  { id: 1, name: 'Wireless Headphones', price: 79, category: 'Electronics', dataTest: 'headphones' },
  { id: 2, name: 'Ergonomic Chair', price: 249, category: 'Furniture', dataTest: 'chair' },
  { id: 3, name: 'Stainless Steel Bottle', price: 19, category: 'Accessories', dataTest: 'bottle' },
  { id: 4, name: 'Smart Watch', price: 129, category: 'Electronics', dataTest: 'watch' },
]

export default function ProductsPage() {
  const [products] = useState(productsData)
  const [cartCount, setCartCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Electronics', 'Furniture', 'Accessories']

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = () => {
    setCartCount(c => c + 1)
  }

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h1 data-testid="page-title" className="text-3xl font-semibold">Products</h1>
        <div className="flex items-center gap-x-3">
          <span className="text-sm font-medium">🛒 Cart</span>
          <span data-testid="cart-count" className="bg-blue-600 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-2xl">{cartCount}</span>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        {/* Search */}
        <input
          data-testid="product-search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-1 max-w-xs px-5 py-3 border border-gray-300 rounded-3xl"
        />

        {/* Filter */}
        <select
          data-testid="category-filter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-5 py-3 border border-gray-300 rounded-3xl"
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            data-testid={`product-card-${product.dataTest}`}
            className="bg-white rounded-3xl shadow p-6 flex flex-col"
          >
            <div className="h-40 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-5xl">📦</div>
            <h3 className="font-semibold text-xl">{product.name}</h3>
            <p className="text-emerald-600 font-medium mt-1">${product.price}</p>
            <p className="text-xs text-gray-400 mt-1">{product.category}</p>

            <div className="mt-auto pt-8 flex items-center justify-between">
              <button
                data-testid={`add-to-cart-${product.dataTest}`}
                onClick={addToCart}
                className="bg-black text-white px-8 py-3 rounded-3xl text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
              {/* Quantity counter example */}
              <div className="flex items-center border border-gray-300 rounded-3xl">
                <button className="px-4 py-2 text-xl leading-none">-</button>
                <span className="px-4 font-medium">1</span>
                <button className="px-4 py-2 text-xl leading-none">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}