import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Demo data
    const featuredProducts = [
        {
            id: 1,
            name: "Organic Apples",
            price: 2.99,
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.5
        },
        {
            id: 2,
            name: "Fresh Milk",
            price: 3.49,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.2
        },
        {
            id: 3,
            name: "Whole Grain Bread",
            price: 2.29,
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.7
        }
    ];

    const categories = [
        {
            id: 1,
            name: "Fruits & Vegetables",
            icon: "🍎",
            count: 42
        },
        {
            id: 2,
            name: "Dairy & Eggs",
            icon: "🥛",
            count: 28
        },
        {
            id: 3,
            name: "Bakery",
            icon: "🍞",
            count: 15
        },
        {
            id: 4,
            name: "Meat & Fish",
            icon: "🍗",
            count: 23
        },
        {
            id: 5,
            name: "Beverages",
            icon: "🧃",
            count: 37
        }
    ];

    const specialOffers = [
        {
            id: 1,
            title: "Weekend Special",
            description: "20% off all dairy products",
            code: "DAIRY20",
            validUntil: "2023-12-31"
        },
        {
            id: 2,
            title: "New Customer",
            description: "15% off your first order",
            code: "WELCOME15",
            validUntil: "2023-12-31"
        },
        {
            id: 3,
            title: "Bulk Discount",
            description: "Buy 3, get 1 free on selected items",
            code: "BUY3GET1",
            validUntil: "2023-12-15"
        }
    ];

    return (
        <div className="container mx-auto px-4 mt-10">
            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-12">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                        Fresh Groceries Delivered to Your Door
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Shop the freshest produce, dairy, and pantry staples with free delivery on orders over $50
                    </p>
                    <Link
                        to="/products"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Featured Products Section */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Featured Products</h2>
                        <div className="space-y-4">
                            {featuredProducts.map(product => (
                                <Link
                                    to={`/products/${product.id}`}
                                    key={product.id}
                                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-800">{product.name}</h3>
                                        <div className="flex items-center">
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
                                    </div>
                                    <div className="font-bold text-blue-600">${product.price.toFixed(2)}</div>
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/products"
                            className="block mt-6 text-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                            View all products →
                        </Link>
                    </div>

                    {/* Categories Section */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Categories</h2>
                        <div className="space-y-3">
                            {categories.map(category => (
                                <Link
                                    to={`/products?category=${category.name}`}
                                    key={category.id}
                                    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{category.icon}</span>
                                        <span className="font-medium text-gray-800">{category.name}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">{category.count} items</div>
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/categories"
                            className="block mt-6 text-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                            Browse all categories →
                        </Link>
                    </div>

                    {/* Special Offers Section */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Special Offers</h2>
                        <div className="space-y-4">
                            {specialOffers.map(offer => (
                                <div
                                    key={offer.id}
                                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                                >
                                    <h3 className="font-bold text-blue-700 mb-1">{offer.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                            Use code: <span className="font-bold">{offer.code}</span>
                                        </div>
                                        <div className="text-xs text-gray-500">Valid until {offer.validUntil}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                            View all offers
                        </button>
                    </div>
                </div>
            </section>

            {/* Additional Sections */}
            <section className="py-12">
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Get 10% Off Your First Order</h2>
                        <p className="text-lg mb-6">Sign up for our newsletter and receive exclusive discounts and updates on new products.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;