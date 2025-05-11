import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity > 0 && newQuantity <= 10) {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-6">Add some products to your cart and start shopping!</p>
                    <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 border-b py-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:text-blue-600">
                                    {item.name}
                                </Link>
                                <p className="text-gray-600">Sold by: {item.seller}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center border rounded-lg">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${calculateSubtotal().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Proceed to Checkout
                    </button>
                    <Link
                        to="/products"
                        className="block text-center mt-4 text-blue-600 hover:text-blue-800"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;