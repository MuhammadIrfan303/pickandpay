import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VendorDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vendor, setVendor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Simulate API loading delay
            setTimeout(() => {
                const vendorData = {
                    id: parseInt(id),
                    name: 'Tech Electronics',
                    email: 'vendor@techstore.com',
                    phone: '+1 234-567-8900',
                    address: '123 Tech Street, Digital City, 12345',
                    joinDate: '2023-01-15',
                    status: 'active',
                    products: {
                        total: 45,
                        active: 38,
                        suspended: 7
                    },
                    businessInfo: {
                        registrationNumber: 'REG123456',
                        taxId: 'TAX789012',
                        businessType: 'Electronics Retail'
                    }
                };
                setVendor(vendorData);
                setIsLoading(false);
            }, 800);
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Vendors
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="mr-4 flex items-center justify-center bg-white rounded-lg shadow-sm w-12 h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">{vendor.name}</h1>
                                <p className="text-gray-600 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {vendor.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${vendor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                            </span>

                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Business Information Card */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold text-gray-800">Business Information</h2>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Registration</span>
                                    <span className="font-medium">{vendor.businessInfo.registrationNumber}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Tax ID</span>
                                    <span className="font-medium">{vendor.businessInfo.taxId}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Business Type</span>
                                    <span className="font-medium">{vendor.businessInfo.businessType}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Join Date</span>
                                    <span className="font-medium">{vendor.joinDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Card */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-medium">{vendor.phone}</span>
                                </div>
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="font-medium">{vendor.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Products Overview Card */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-green-100 rounded-lg mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold text-gray-800">Products Overview</h2>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-600">{vendor.products.total}</p>
                                    <p className="text-sm text-gray-600">Total</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-2xl font-bold text-green-600">{vendor.products.active}</p>
                                    <p className="text-sm text-gray-600">Active</p>
                                </div>
                                <div className="text-center p-3 bg-red-50 rounded-lg">
                                    <p className="text-2xl font-bold text-red-600">{vendor.products.suspended}</p>
                                    <p className="text-sm text-gray-600">Suspended</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDetails;