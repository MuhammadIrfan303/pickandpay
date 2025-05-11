import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                    <p className="text-gray-600">Order #123456</p>
                </div>

                <div className="border-t border-b py-4 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Order Details</h2>

                    {/* Order Items */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="/placeholder-image.jpg"
                                alt="Product"
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4">
                                <h3 className="font-semibold">Product Name</h3>
                                <p className="text-gray-600">Quantity: 1</p>
                                <p className="text-gray-600">$99.99</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                    <div className="text-gray-600">
                        <p>John Doe</p>
                        <p>123 Street Name</p>
                        <p>City, State 12345</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$99.99</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>$5.00</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>$114.99</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <Link
                        to="/order-history"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        View Orders
                    </Link>
                    <Link
                        to="/"
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;