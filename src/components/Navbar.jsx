import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${searchQuery}`);
            setSearchQuery('');
        }
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Pick&Pay
                        </span>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="flex">
                            <div className={`relative flex-1 ${isSearchFocused ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 border rounded-l-lg focus:outline-none transition-all duration-200"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-r-lg hover:from-blue-700 hover:to-blue-500 transition-colors duration-200 flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search
                            </button>
                        </form>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/products"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                            Products
                        </Link>
                        <Link
                            to="/cart"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                        <Link
                            to="/login"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-700 hover:to-blue-500 transition-colors duration-200 font-medium"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Link
                            to="/cart"
                            className="text-gray-700 mr-4 relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 bg-white shadow-lg rounded-b-lg">
                        <div className="px-2 pt-2 pb-3 space-y-3">
                            <form onSubmit={handleSearch} className="mb-4 px-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>
                            </form>
                            <Link
                                to="/products"
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                to="/cart"
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cart
                            </Link>
                            <Link
                                to="/login"
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium text-center hover:from-blue-700 hover:to-blue-500 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;