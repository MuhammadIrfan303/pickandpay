import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Pick&Pay</h3>
                        <p className="text-gray-300">
                            Your one-stop marketplace for all your shopping needs. Quality products, trusted sellers, and great deals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                            <li><Link to="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
                            <li><Link to="/deals" className="text-gray-300 hover:text-white">Special Deals</Link></li>
                            <li><Link to="/vendors" className="text-gray-300 hover:text-white">Vendors</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                            <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
                            <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © 2024 Pick&Pay. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
                            <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;