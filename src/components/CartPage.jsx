"use client"
import Link from "next/link"
import useProductStore from "@/lib/store"

export default function CartPage() {
    const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useProductStore()

    return (
        <div className="max-w-4xl mx-auto p-8 font-sans">
            {/* header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-md font-bold tracking-wider">Your Cart ({cartCount})</h2>
                <Link
                    href="/"
                    className="px-4 py-2 text-gray-300 bg-blue-950 rounded-lg border border-gray-500 cursor-pointer text-md"
                >
                    ← Continue Shopping
                </Link>
            </div>

            {/* cart items */}
            <div className="bg-white rounded-lg text-gray-950 mb-8 flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden flex-1">
                {cart.length === 0 
                ? (
                    <div className="flex flex-col items-center gap-6 p-6">
                        <span className="text-5xl">🛒</span>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex gap-4 p-6 border-b border-gray-300">
                            <img 
                                src={item.image}
                                alt={item.title}
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <div className="flex-1">
                                <p className="line-clamp-2">{item.title}</p>
                                {/* quantity controls */}
                                <div className="flex mx-auto gap-2">
                                    <span>Qty: </span>
                                    <button
                                        onClick={() => updateQuantity(item, -1)}
                                        className="w-6 h-6 rounded-full border border-gray-300 text-sm flex items-center justify-center cursor-pointer hover:bg-gray-100"
                                        >
                                        -
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button
                                        onClick={() => updateQuantity(item, 1)}
                                        className="w-6 h-6 rounded-full border border-gray-300 text-sm flex items-center justify-center cursor-pointer hover:bg-gray-100"
                                    >
                                        +
                                    </button>

                                    {/* remove button */}
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className="ml-auto text-xs text-red-400 hover:text-red-600 cursor-pointer border border-red-500 rounded-lg p-1" 
                                    >
                                        Remove
                                    </button>

                                </div>
                                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
                    <div className="bg-white rounded-lg text-gray-950 flex flex-col">
                        <div className="flex flex-col gap-4 justify-between p-6">
                            <h2 className="font-bold text-xl">Order Summary</h2>
                            <div className="flex justify-between">
                                <span>Subtotal ({cartCount} items)</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-green-500">Free</span>
                            </div>
                            <div className="flex justify-between pb-6 border-b border-gray-300">
                                <span>Tax 8%</span>
                                <span>${(cartTotal * 0.08).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>${(cartTotal * 1.08).toFixed(2)}</span>
                            </div>
                        </div>
                        <Link
                            href="/checkout"
                            className="mx-6 mb-6 py-4 bg-blue-950 rounded-lg border border-gray-300 text-white font-bold text-center"
                        >
                            Checkout →
                        </Link>
                    </div>
                )}
        </div>
    )
}