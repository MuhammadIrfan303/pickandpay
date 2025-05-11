import React, { useState } from 'react';
import { FiSearch, FiPrinter, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const OrderManagement = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isChangingStatus, setIsChangingStatus] = useState(null);

    // Sample data - replace with your actual data
    const orders = [
        {
            id: '12345',
            customer: { name: 'John Doe', email: 'john@example.com' },
            products: [
                { name: 'Wireless Headphones', quantity: 1 },
                { name: 'Phone Case', quantity: 2 }
            ],
            total: 99.99,
            date: '2023-05-20',
            status: 'processing'
        },
        {
            id: '12346',
            customer: { name: 'Jane Smith', email: 'jane@example.com' },
            products: [
                { name: 'Smart Watch', quantity: 1 }
            ],
            total: 199.99,
            date: '2023-05-19',
            status: 'shipped'
        },
        {
            id: '12347',
            customer: { name: 'Robert Johnson', email: 'robert@example.com' },
            products: [
                { name: 'Laptop', quantity: 1 },
                { name: 'Mouse', quantity: 1 },
                { name: 'Keyboard', quantity: 1 }
            ],
            total: 1299.99,
            date: '2023-05-18',
            status: 'pending'
        }
    ];

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        processing: 'bg-blue-100 text-blue-800',
        shipped: 'bg-purple-100 text-purple-800',
        delivered: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800'
    };

    const handleStatusChange = async (orderId, newStatus) => {
        setIsChangingStatus(orderId);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Update your state here with the new status
        setIsChangingStatus(null);
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.includes(searchTerm) ||
            order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || order.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    // Pagination logic
    const ordersPerPage = 5;
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * ordersPerPage,
        currentPage * ordersPerPage
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Order Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage and track customer orders</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Export Orders
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => {
                            setFilterStatus(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem_1.25rem]"
                    >
                        <option value="all">All Orders</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paginatedOrders.length > 0 ? (
                                paginatedOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                                                <div className="text-sm text-gray-500">{order.customer.email}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {order.products[0].name} × {order.products[0].quantity}
                                            </div>
                                            {order.products.length > 1 && (
                                                <div className="text-sm text-gray-500">
                                                    + {order.products.length - 1} more item{order.products.length > 2 ? 's' : ''}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            ${order.total.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(order.date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {isChangingStatus === order.id ? (
                                                <div className="animate-pulse h-8 w-24 bg-gray-100 rounded-md"></div>
                                            ) : (
                                                <select
                                                    className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[order.status]} border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                    value={order.status}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="processing">Processing</option>
                                                    <option value="shipped">Shipped</option>
                                                    <option value="delivered">Delivered</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-3">
                                                <button
                                                    className="text-blue-600 hover:text-blue-900 flex items-center"
                                                    title="View Details"
                                                >
                                                    <FiEye className="mr-1" /> View
                                                </button>
                                                <button
                                                    className="text-gray-600 hover:text-gray-900 flex items-center"
                                                    title="Print Invoice"
                                                >
                                                    <FiPrinter className="mr-1" /> Print
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No orders found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {filteredOrders.length > ordersPerPage && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="mb-3 sm:mb-0">
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{(currentPage - 1) * ordersPerPage + 1}</span> to{' '}
                            <span className="font-medium">{Math.min(currentPage * ordersPerPage, filteredOrders.length)}</span> of{' '}
                            <span className="font-medium">{filteredOrders.length}</span> results
                        </p>
                    </div>
                    <nav className="flex space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FiChevronLeft className="inline" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FiChevronRight className="inline" />
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default OrderManagement;