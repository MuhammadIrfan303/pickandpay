import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Reports = () => {
    const [dateRange, setDateRange] = useState('week');

    // Basic sales data
    const salesData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    // Basic category data
    const categoryData = {
        labels: ['Electronics', 'Clothing', 'Books'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
        }]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Reports</h1>

            {/* Basic Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="border rounded-lg px-4 py-2"
                >
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="year">Last Year</option>
                </select>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                    <p className="text-xl font-bold">$151,000</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm">Total Orders</h3>
                    <p className="text-xl font-bold">1,245</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                    <div className="h-64">
                        <Line data={salesData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
                    <div className="h-64">
                        <Doughnut data={categoryData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;