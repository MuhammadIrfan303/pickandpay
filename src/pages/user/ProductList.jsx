import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    // Demo data
    const allProducts = [
        {
            id: 1,
            name: "Organic Apples",
            price: 2.99,
            category: "Fruits",
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.5,
            inStock: true,
            discount: 0
        },
        {
            id: 2,
            name: "Fresh Milk",
            price: 3.49,
            category: "Dairy",
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.2,
            inStock: true,
            discount: 10
        },
        {
            id: 3,
            name: "Whole Grain Bread",
            price: 2.29,
            category: "Bakery",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            inStock: true,
            discount: 0
        },
        {
            id: 4,
            name: "Free Range Eggs (12pk)",
            price: 4.99,
            category: "Dairy",
            image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.8,
            inStock: true,
            discount: 0
        },
        {
            id: 5,
            name: "Organic Carrots",
            price: 1.99,
            category: "Vegetables",
            image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.3,
            inStock: false,
            discount: 15
        },
        {
            id: 6,
            name: "Greek Yogurt",
            price: 3.79,
            category: "Dairy",
            image: "https://images.unsplash.com/photo-1577048930276-ef530c7f43b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            inStock: true,
            discount: 0
        },
        {
            id: 7,
            name: "Avocados",
            price: 1.49,
            category: "Fruits",
            image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.4,
            inStock: true,
            discount: 0
        },
        {
            id: 8,
            name: "Chicken Breast",
            price: 7.99,
            category: "Meat",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.1,
            inStock: true,
            discount: 20
        }
    ];

    const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Meat"];
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("featured");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Filter and sort products
    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    }).sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        if (sortOption === "rating") return b.rating - a.rating;
        return a.id - b.id; // Default sort by featured (original order)
    });

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search and Filter Section */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <select
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>

                {/* Categories Filter */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                    Showing {currentProducts.length} of {filteredProducts.length} products
                </p>
                {selectedCategory !== "All" && (
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        Clear category filter
                    </button>
                )}
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {currentProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <Link to={`/products/${product.id}`} className="block">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    {product.discount > 0 && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            {product.discount}% OFF
                                        </div>
                                    )}
                                    {!product.inStock && (
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                                            <span className="bg-white text-gray-800 px-3 py-1 rounded font-medium text-sm">
                                                Out of Stock
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {product.discount > 0 ? (
                                                <>
                                                    <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                                                    <span className="font-bold text-red-600">
                                                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
                                            )}
                                        </div>
                                        <button
                                            className={`p-2 rounded-full cursor-pointer ${product.inStock
                                                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                }`}
                                            disabled={!product.inStock}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
                    <p className="mt-2 text-gray-500">
                        Try adjusting your search or filter to find what you're looking for.
                    </p>
                    <button
                        onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("All");
                        }}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                    <nav className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-full ${currentPage === page
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default ProductList;