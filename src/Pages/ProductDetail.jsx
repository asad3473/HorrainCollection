import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Products } from '../Services/Products'
import { motion } from 'framer-motion'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('')
    // const [color, setColor] = useState('')
    const [relatedProducts, setRelatedProducts] = useState([])

    // Filter states for related products
    const [categoryFilter, setCategoryFilter] = useState('All')
    const [priceFilter, setPriceFilter] = useState('All')

    useEffect(() => {
        const foundProduct = Products.find(p => p.id === parseInt(id))
        if (foundProduct) {
            setProduct(foundProduct)
            setSelectedImage(foundProduct.img)
            
            // Find related products (same category)
            const related = Products
                .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                .slice(0, 4)
            setRelatedProducts(related)
        }
    }, [id])

    const handleAddToCart = () => {
        // Add to cart logic here
        console.log('Added to cart:', { product, quantity, size, color })
    }

    const handleBuyNow = () => {
        // Buy now logic here
        console.log('Buy now:', { product, quantity, size, color })
    }

    const filteredRelatedProducts = relatedProducts.filter(product => {
        const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter
        const priceMatch = priceFilter === 'All' || 
            (priceFilter === 'Under3000' && product.price < 3000) ||
            (priceFilter === '3000-6000' && product.price >= 3000 && product.price <= 6000) ||
            (priceFilter === 'Above6000' && product.price > 6000)
        return categoryMatch && priceMatch
    })

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
                    <button 
                        onClick={() => navigate('/services')}
                        className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen overflow-hidden bg-white py-8 mt-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <button 
                        onClick={() => navigate(-1)}
                        className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                        ← Back to Products
                    </button>
                </nav>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Side - Product Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={selectedImage}
                                alt={product.title}
                                className="w-full h-96 lg:h-[500px] object-cover cursor-zoom-in hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-4 overflow-x-auto pb-4">
                            {[product.img, product.img, product.img].map((img, index) => (
                                <motion.img
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    src={img}
                                    alt={`${product.title} ${index + 1}`}
                                    className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                                        selectedImage === img ? 'border-black' : 'border-gray-200'
                                    } transition-all duration-300`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Category Badge */}
                        <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {product.category}
                        </span>

                        {/* Product Title */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {product.title}
                        </h1>

                        {/* Price */}
                        <div className="flex items-center space-x-4">
                            <p className="text-3xl font-bold text-gray-900">
                                PKR {product.price.toLocaleString()}
                            </p>
                            <span className="text-green-600 text-lg font-semibold">
                                In Stock
                            </span>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                This exquisite {product.category.toLowerCase()} piece features premium quality fabric 
                                with intricate detailing and perfect finishing. Designed for comfort and style, 
                                it's perfect for various occasions.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Premium quality fabric</li>
                                <li>• Perfect stitching and finishing</li>
                                <li>• Comfortable and breathable</li>
                                <li>• Easy to maintain</li>
                            </ul>
                        </div>

                        {/* Size Selection */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
                            <div className="flex space-x-3">
                                {['Small', 'Medium', 'Large', 'X-Large'].map((sizeOption) => (
                                    <button
                                        key={sizeOption}
                                        onClick={() => setSize(sizeOption)}
                                        className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                                            size === sizeOption
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-300 text-gray-700 hover:border-black'
                                        }`}
                                    >
                                        {sizeOption}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Quantity and Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-semibold text-gray-900">Quantity:</span>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                                >
                                    Add to Cart
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleBuyNow}
                                    className="flex-1 bg-white text-black border-2 border-black py-4 rounded-xl font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    Buy Now
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products Section with Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t pt-16"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
                            Related Products
                        </h2>
                        
                        {/* Filters */}
                        <div className="flex space-x-4">
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            >
                                <option value="All">All Categories</option>
                                <option value="Unstitched">Unstitched</option>
                                <option value="Stitched">Stitched</option>
                                <option value="Kurtis">Kurtis</option>
                                <option value="Formal">Formal</option>
                                <option value="Casual">Casual</option>
                            </select>

                            <select
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            >
                                <option value="All">All Prices</option>
                                <option value="Under3000">Under PKR 3,000</option>
                                <option value="3000-6000">PKR 3,000 - 6,000</option>
                                <option value="Above6000">Above PKR 6,000</option>
                            </select>
                        </div>
                    </div>

                    {/* Related Products Grid */}
                    {filteredRelatedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredRelatedProducts.map((relatedProduct) => (
                                <motion.div
                                    key={relatedProduct.id}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
                                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                                >
                                    <img
                                        src={relatedProduct.img}
                                        alt={relatedProduct.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {relatedProduct.title}
                                        </h3>
                                        <p className="text-gray-600">PKR {relatedProduct.price.toLocaleString()}</p>
                                        <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                            {relatedProduct.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No related products found matching your filters.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}