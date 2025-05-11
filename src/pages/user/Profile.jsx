import React from 'react';

const Profile = () => {
    const user = {

        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 8900',
        address: {
            street: '123 Main Street',
            city: 'New York',
            postalCode: '10001',
            country: 'United States'
        },
        bio: 'Digital enthusiast and food lover'


        // ... existing user data ...
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center relative">
                        <div className="absolute top-4 right-4">
                            <button className="text-white hover:bg-blue-700 p-2 rounded-lg transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative mx-auto w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                            <img
                                src={user.avatar}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white text-xs py-1 hover:bg-opacity-70 transition-colors">
                                Change Photo
                            </button>
                        </div>
                        <h1 className="mt-6 text-3xl font-bold text-white">{user.name}</h1>
                        <p className="text-blue-100 mt-2">Member since {user.joinDate}</p>
                    </div>

                    {/* Profile Content */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Information */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="text-gray-800 font-medium">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <p className="text-gray-800 font-medium">{user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Address
                                </h2>
                                <div className="space-y-4">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        <p className="text-sm text-gray-500">Street Address</p>
                                        <p className="text-gray-800 font-medium">{user.street}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-white rounded-lg shadow-sm">
                                            <p className="text-sm text-gray-500">City</p>
                                            <p className="text-gray-800 font-medium">{user.address.city}</p>
                                        </div>
                                        <div className="p-3 bg-white rounded-lg shadow-sm">
                                            <p className="text-sm text-gray-500">Postal Code</p>
                                            <p className="text-gray-800 font-medium">{user.address.postalCode}</p>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        <p className="text-sm text-gray-500">Country</p>
                                        <p className="text-gray-800 font-medium">{user.address.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;