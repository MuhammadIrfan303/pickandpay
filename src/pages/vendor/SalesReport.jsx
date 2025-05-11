import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SalesReport = () => {
    const [dateRange, setDateRange] = useState('week');
    const [reportType, setReportType] = useState('revenue');

    const revenueData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue',
            data: [650, 590, 800, 810, 560, 550, 900],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const productData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [{
            label: 'Units Sold',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
            ],
        }]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Sales Report</h1>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date Range
                        </label>
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        >
                            <option value="week">Last 7 Days</option>
                            <option value="month">Last 30 Days</option>
                            <option value="quarter">Last 3 Months</option>
                            <option value="year">Last Year</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Report Type
                        </label>
                        <select
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        >
                            <option value="revenue">Revenue</option>
                            <option value="products">Products</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                    <p className="text-2xl font-bold">$4,860</p>
                    <span className="text-green-500 text-sm">+12% from last period</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Orders</h3>
                    <p className="text-2xl font-bold">156</p>
                    <span className="text-green-500 text-sm">+8% from last period</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Average Order Value</h3>
                    <p className="text-2xl font-bold">$31.15</p>
                    <span className="text-red-500 text-sm">-2% from last period</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Products Sold</h3>
                    <p className="text-2xl font-bold">41</p>
                    <span className="text-green-500 text-sm">+15% from last period</span>
                </div>
            </div>

            {/* Charts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">
                    {reportType === 'revenue' ? 'Revenue Over Time' : 'Top Selling Products'}
                </h2>
                <div className="h-96">
                    {reportType === 'revenue' ? (
                        <Line data={revenueData} options={{ maintainAspectRatio: false }} />
                    ) : (
                        <Bar data={productData} options={{ maintainAspectRatio: false }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalesReport;