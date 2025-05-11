import React, { useState } from 'react';
 

const ProductManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    // Simplified product data
    const products = [
        {
            id: 1,
            name: 'Wireless Earbuds Pro',
            sku: 'WE-001',
            category: 'Electronics',
            price: 99.99,
            stock: 45,
            status: 'active'
        },
        {
            id: 2,
            name: 'Organic Cotton T-Shirt',
            sku: 'CT-205',
            category: 'Clothing',
            price: 24.99,
            stock: 120,
            status: 'active'
        },
        {
            id: 3,
            name: 'Smart Watch Series 5',
            sku: 'SW-500',
            category: 'Electronics',
            price: 199.99,
            stock: 15,
            status: 'pending'
        }
    ];

    // Filter products
    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.sku.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
        const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const handleProductStatus = (productId, newStatus) => {
        if (window.confirm(`Are you sure you want to ${newStatus} this product?`)) {
            console.log(`Changing product ${productId} status to ${newStatus}`);
            // Add your status update logic here
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Product Management</h1>

            {/* Basic Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border rounded px-4 py-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="border rounded px-4 py-2"
                    >
                        <option value="all">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                    </select>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="border rounded px-4 py-2"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                    </select>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredProducts.map(product => (
                            <tr key={product.id}>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.sku}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">${product.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{product.stock}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${product.status === 'active' ? 'bg-green-100 text-green-800' :
                                        product.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/products/edit/${product.id}`}>
                                        <button className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer" >Edit</button>
                                    </Link>

                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleProductStatus(product.id, 'suspended')}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;