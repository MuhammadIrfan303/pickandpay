import React, { useState } from 'react';

const Checkout = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
                <div className={`mx-2 p-2 rounded ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    Shipping
                </div>
                <div className={`mx-2 p-2 rounded ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    Payment
                </div>
                <div className={`mx-2 p-2 rounded ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    Review
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        {step === 1 && (
                            <div className="shipping-form">
                                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="p-2 border rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="p-2 border rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="p-2 border rounded md:col-span-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="p-2 border rounded"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Postal Code"
                                        className="p-2 border rounded"
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="payment-form">
                                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                                <div className="space-y-4">
                                    <div className="border p-4 rounded">
                                        <input type="radio" name="payment" id="card" />
                                        <label htmlFor="card" className="ml-2">Credit Card</label>
                                    </div>
                                    <div className="border p-4 rounded">
                                        <input type="radio" name="payment" id="paypal" />
                                        <label htmlFor="paypal" className="ml-2">PayPal</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="review">
                                <h2 className="text-xl font-semibold mb-4">Order Review</h2>
                                {/* Order summary details */}
                            </div>
                        )}

                        <div className="mt-6 flex justify-between">
                            {step > 1 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-500 text-white px-6 py-2 rounded"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={() => step < 3 ? setStep(step + 1) : null}
                                className="bg-blue-600 text-white px-6 py-2 rounded ml-auto"
                            >
                                {step === 3 ? 'Place Order' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$99.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>$10.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$5.00</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>$114.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;