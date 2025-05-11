import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// User Pages
import Home from './pages/user/Home';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Profile from './pages/user/Profile';
import ProductList from './pages/user/ProductList';

import Cart from './pages/user/Cart';
import Checkout from './pages/user/Checkout';

// Vendor Pages
import VendorDashboard from './pages/vendor/Dashboard';
import VendorProducts from './pages/vendor/ProductManagement';
import VendorOrders from './pages/vendor/OrderManagement';


// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/UserManagement';
import AdminVendors from './pages/admin/VendorManagement';
import AdminProducts from './pages/admin/ProductManagement';
import AdminReports from './pages/admin/Reports';
import EditProduct from './pages/vendor/EditProduct';
import AddProduct from './pages/vendor/AddProduct';
import ProductDetails from './pages/user/ProductDetails';

import { CartProvider } from './contexts/CartContext';
import SalesReport from './pages/vendor/SalesReport';
import VendorDetails from './pages/admin/VendorDetails';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<ProductList />} />
              {/* Change this line to match the URL pattern */}
              <Route path="/products/:id" element={<ProductDetails />} />

              {/* Protected User Routes */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Protected Vendor Routes */}
              <Route path="/vendor/dashboard" element={<VendorDashboard />} />
              <Route path="/vendor/products" element={<VendorProducts />} />
              <Route path="/vendor/orders" element={<VendorOrders />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />
              <Route path='/vendor/products/add' element={<AddProduct />} />
              <Route path='/vendor/reports/' element={<SalesReport />} />
              {/* Protected Admin Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/vendors" element={<AdminVendors />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/reports" element={<AdminReports />} />
              <Route path='/vendorDetail/:id' element={<VendorDetails />} />            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
