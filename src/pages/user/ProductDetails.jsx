import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; // You'll need to create this
import { toast, Toaster } from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Demo data - in a real app this would come from an API
    const product = {
        id: 1,
        name: "Organic Fuji Apples",
        price: 2.99,
        originalPrice: 3.49,
        discount: 15,
        rating: 4.5,
        reviewCount: 128,
        description: "Crisp and sweet Fuji apples grown organically in our local orchards. These apples are perfect for snacking, baking, or making fresh juice. Each apple is hand-picked at peak ripeness for maximum flavor.",
        category: "Fruits",
        stock: 42,
        seller: "Fresh Farms Co.",
        images: [
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&blur=5",
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&blur=10",
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&blur=15"
        ],
        specifications: {
            weight: "1 lb",
            origin: "California, USA",
            organic: true,
            shelfLife: "2 weeks",
            storage: "Refrigerate for best results"
        },
        reviews: [
            {
                id: 1,
                user: "Sarah Johnson",
                rating: 5,
                date: "2023-05-15",
                comment: "These are the best apples I've ever tasted! Sweet and crisp, just as described."
            },
            {
                id: 2,
                user: "Michael Chen",
                rating: 4,
                date: "2023-04-28",
                comment: "Great quality apples, though a couple were smaller than expected."
            }
        ]
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= 10) {
            setQuantity(value);
        }
    };

    const incrementQuantity = () => {
        if (quantity < 10) setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            seller: product.seller,
            stock: product.stock
        };
        addToCart(cartItem);
        toast.success(`${quantity} ${product.name} added to cart!`, {
            duration: 2000,
            position: 'bottom-right',
        });
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/checkout');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Toaster />
            {/* Breadcrumb Navigation */}
            <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link to="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                                Products
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{product.name}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="relative h-80 md:h-96 mb-4 rounded-lg overflow-hidden">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                        {product.discount > 0 && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                                {product.discount}% OFF
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`${product.name} thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                                {product.rating} ({product.reviewCount} reviews)
                            </span>
                        </div>

                        <div className="mb-4">
                            {product.discount > 0 ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                    <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                                        Save {product.discount}%
                                    </span>
                                </div>
                            ) : (
                                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            )}
                        </div>

                        <p className="text-gray-700 mb-6">{product.description}</p>
                    </div>

                    {/* Add to Cart Section */}
                    <div className="border-t border-b border-gray-200 py-6">
                        <div className="flex items-center gap-4 mb-6">
                            {/* Quantity controls */}
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <button
                                    onClick={decrementQuantity}
                                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    max={product.stock}
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className="w-16 text-center border-0 focus:ring-0"
                                />
                                <button
                                    onClick={incrementQuantity}
                                    className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                    disabled={quantity >= product.stock}
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart button */}
                            <button
                                onClick={handleAddToCart}
                                className="cursor-pointer flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400"
                                disabled={product.stock === 0}
                            >
                                Add to Cart - ${(product.price * quantity).toFixed(2)}
                            </button>
                        </div>

                        <div className="flex gap-3">
                            {/* Buy Now button */}
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:bg-gray-100 cursor-pointer"
                                disabled={product.stock === 0}
                            >
                                Buy Now
                            </button>
                            {/* Wishlist button */}
                            <button className="p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-900">Availability:</h3>
                            <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Category:</h3>
                            <Link to={`/products?category=${product.category}`} className="text-blue-600 hover:underline">
                                {product.category}
                            </Link>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Sold by:</h3>
                            <p>{product.seller}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs */}
            <div className="mt-12">
               

                <div className="py-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <h3 className="text-lg font-medium text-gray-900 mb-4">Storage & Handling</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Store in a cool, dry place</li>
                        <li>Keep refrigerated after opening</li>
                        <li>Best consumed within 2 weeks of purchase</li>
                    </ul>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

                {product.reviews.length > 0 ? (
                    <div className="space-y-6">
                        {product.reviews.map(review => (
                            <div key={review.id} className="border-b border-gray-200 pb-6">
                                <div className="flex items-center mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm font-medium text-gray-900">{review.user}</span>
                                    <span className="mx-1 text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                )}

                <button className="mt-6 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Write a Review
                </button>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Related products would be mapped here */}
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                        <h3 className="font-medium text-gray-900 mb-1">Organic Pears</h3>
                        <div className="text-blue-600 font-bold">$3.29</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                        <h3 className="font-medium text-gray-900 mb-1">Organic Bananas</h3>
                        <div className="text-blue-600 font-bold">$1.99</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                        <h3 className="font-medium text-gray-900 mb-1">Organic Grapes</h3>
                        <div className="text-blue-600 font-bold">$4.49</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                        <h3 className="font-medium text-gray-900 mb-1">Organic Oranges</h3>
                        <div className="text-blue-600 font-bold">$3.79</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;