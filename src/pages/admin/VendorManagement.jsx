import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VendorManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [vendors, setVendors] = useState([
        {
            id: 1,
            name: 'Tech Electronics',
            email: 'vendor@techstore.com',
            initials: 'TE',
            products: { total: 45, active: 38 },
            status: 'active'
        },
        {
            id: 2,
            name: 'Fashion Hub',
            email: 'contact@fashionhub.com',
            initials: 'FH',
            products: { total: 128, active: 120 },
            status: 'active'
        },
        {
            id: 3,
            name: 'Sports Gear Pro',
            email: 'sales@sportsgear.com',
            initials: 'SG',
            products: { total: 75, active: 70 },
            status: 'pending'
        },
        {
            id: 4,
            name: 'Home Decor Plus',
            email: 'info@homedecor.com',
            initials: 'HD',
            products: { total: 92, active: 85 },
            status: 'suspended'
        }
    ]);

    // Filter vendors based on search and status
    const filteredVendors = vendors.filter(vendor => {
        const matchesSearch =
            vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || vendor.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    // Add handleSuspend function
    const handleSuspend = (vendorId) => {
        if (window.confirm('Are you sure you want to suspend this vendor?')) {
            setVendors(prevVendors =>
                prevVendors.map(vendor =>
                    vendor.id === vendorId
                        ? { ...vendor, status: vendor.status === 'suspended' ? 'active' : 'suspended' }
                        : vendor
                )
            );
        }
    };

    const handleStatusChange = (vendorId, newStatus) => {
        console.log(`Changing vendor ${vendorId} status to ${newStatus}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Vendor Management</h1>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Search vendors..."
                        className="border rounded-lg px-4 py-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="border rounded-lg px-4 py-2"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending Approval</option>
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>
                    </select>
                </div>
            </div>

            {/* Vendors Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store Info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Products</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredVendors.map(vendor => (
                            <tr key={vendor.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-600">{vendor.initials}</span>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                                            <div className="text-sm text-gray-500">{vendor.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">{vendor.products.total} Products</div>
                                    <div className="text-sm text-gray-500">{vendor.products.active} Active</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${vendor.status === 'active' ? 'bg-green-100 text-green-800' :
                                        vendor.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/vendorDetail/${vendor.id}`}>
                                        <button
                                            className="cursor-pointer text-blue-600 hover:text-blue-900 mr-3"
                                            onClick={() => router.push(`/admin/vendor/${vendor.id}`)}
                                        >
                                            View
                                        </button>
                                    </Link>

                                    <button
                                        className={`cursor-pointer ${vendor.status === 'suspended'
                                            ? 'text-green-600 hover:text-green-900'
                                            : 'text-red-600 hover:text-red-900'
                                            }`}
                                        onClick={() => handleSuspend(vendor.id)}
                                    >
                                        {vendor.status === 'suspended' ? 'Activate' : 'Suspend'}
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

export default VendorManagement;