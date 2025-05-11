import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp, FiAlertCircle, FiClock, FiCheckCircle } from 'react-icons/fi';

const AdminDashboard = () => {
    // Sample data - replace with your actual data
    const stats = [
        {
            title: 'Total Users',
            value: '1,234',
            change: '+15% from last month',
            positive: true,
            icon: <FiUsers className="text-blue-500 text-2xl" />
        },
        {
            title: 'Total Vendors',
            value: '156',
            change: '+8% from last month',
            positive: true,
            icon: <FiShoppingBag className="text-purple-500 text-2xl" />
        },
        {
            title: 'Total Products',
            value: '4,829',
            change: 'Active listings',
            positive: null,
            icon: <FiTrendingUp className="text-green-500 text-2xl" />
        },
        {
            title: 'Total Revenue',
            value: '$48,294',
            change: '+12% from last month',
            positive: true,
            icon: <FiDollarSign className="text-yellow-500 text-2xl" />
        }
    ];

    const quickActions = [
        {
            title: 'Manage Users',
            description: 'View and manage user accounts',
            icon: <FiUsers className="text-blue-500 text-2xl" />,
            path: '/admin/users'
        },
        {
            title: 'Manage Vendors',
            description: 'Review and approve vendors',
            icon: <FiShoppingBag className="text-purple-500 text-2xl" />,
            path: '/admin/vendors'
        },
        {
            title: 'Products',
            description: 'Monitor product listings',
            icon: <FiTrendingUp className="text-green-500 text-2xl" />,
            path: '/admin/products'
        },
        {
            title: 'Reports',
            description: 'View analytics and reports',
            icon: <FiDollarSign className="text-yellow-500 text-2xl" />,
            path: '/admin/reports'
        }
    ];

    const recentActivities = [
        {
            type: 'New vendor registration',
            title: "John's Electronics Store",
            time: '2 hours ago',
            icon: <FiCheckCircle className="text-green-500" />,
            status: 'pending'
        },
        {
            type: 'Product reported',
            title: 'iPhone 13 Pro',
            time: '3 hours ago',
            icon: <FiAlertCircle className="text-red-500" />,
            status: 'urgent'
        },
        {
            type: 'User complaint',
            title: 'Delivery delay issue',
            time: '5 hours ago',
            icon: <FiAlertCircle className="text-orange-500" />,
            status: 'pending'
        },
        {
            type: 'New order',
            title: 'Order #12345 - $199.99',
            time: '1 day ago',
            icon: <FiDollarSign className="text-blue-500" />,
            status: 'completed'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
                </div>

            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                                <p className="text-2xl font-bold mt-1 text-gray-800">{stat.value}</p>
                            </div>
                            <div className="p-2 bg-gray-50 rounded-lg">
                                {stat.icon}
                            </div>
                        </div>
                        <span className={`text-sm mt-2 ${stat.positive === true ? 'text-green-500' : stat.positive === false ? 'text-red-500' : 'text-blue-500'}`}>
                            {stat.change}
                        </span>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {quickActions.map((action, index) => (
                    <Link
                        key={index}
                        to={action.path}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                    >
                        <div className="flex items-center mb-3">
                            <div className="p-2 bg-gray-50 rounded-lg mr-3 group-hover:bg-blue-50 transition-colors">
                                {action.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                    </Link>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
                    <p className="text-sm text-gray-500 mt-1">Latest system activities and notifications</p>
                </div>
                <div className="divide-y divide-gray-100">
                    {recentActivities.map((activity, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start">
                                <div className="mt-1 mr-3">
                                    {activity.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600">{activity.type}</p>
                                    <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                </div>
                                {activity.status === 'urgent' && (
                                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Urgent</span>
                                )}
                                {activity.status === 'pending' && (
                                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                    <Link to="/admin/activity" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View all activities
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default AdminDashboard;