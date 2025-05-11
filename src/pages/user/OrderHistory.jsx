import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Order History</h1>

            {/* Orders List */}
            <div className="space-y-6">
                {/* Single Order */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-xl font-semibold">Order #123456</h2>
                            <p className="text-gray-600">Placed on March 15, 2024</p>
                        </div>
                        <span className="px-4 py-2 rounded-full bg-green-100 text-green-800">
                            Delivered
                        </span>
                    </div>

                    {/* Order Items */}
                    <div className="border-t border-b py-4 mb-4">
                        <div className="flex items-center">
                            <img
                                src="/placeholder-image.jpg"
                                alt="Product"
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold">Product Name</h3>
                                <p className="text-gray-600">Quantity: 1</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">$99.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-600">Total Amount:</p>
                            <p className="font-semibold text-xl">$114.99</p>
                        </div>
                        <div className="space-x-4">
                            <Link
                                to="/order/123456"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                View Details
                            </Link>
                            <button className="text-blue-600 hover:text-blue-800">
                                Track Order
                            </button>
                        </div>
                    </div>
                </div>

                {/* Repeat order items for demonstration */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-xl font-semibold">Order #123455</h2>
                            <p className="text-gray-600">Placed on March 10, 2024</p>
                        </div>
                        <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800">
                            In Transit
                        </span>
                    </div>

                    {/* Order Items */}
                    <div className="border-t border-b py-4 mb-4">
                        <div className="flex items-center">
                            <img
                                src="/placeholder-image.jpg"
                                alt="Product"
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold">Product Name</h3>
                                <p className="text-gray-600">Quantity: 2</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">$199.98</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-600">Total Amount:</p>
                            <p className="font-semibold text-xl">$214.98</p>
                        </div>
                        <div className="space-x-4">
                            <Link
                                to="/order/123455"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                View Details
                            </Link>
                            <button className="text-blue-600 hover:text-blue-800">
                                Track Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;