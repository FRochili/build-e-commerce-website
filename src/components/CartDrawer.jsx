"use client"
import Link from "next/link"
import useProductStore from "@/lib/store"

export default function CartDrawer() {
    const cart = useProductStore((state) => state.cart)
    const isCartOpen = useProductStore((state) => state.isCartOpen)
    const setIsCartOpen = useProductStore((state) => state.setIsCartOpen)
    const removeFromCart = useProductStore((state) => state.removeFromCart)
    const updateQuantity = useProductStore((state) => state.updateQuantity)
    const cartCount = useProductStore((state) => state.getCartCount())
    const cartTotal = useProductStore((state) => state.getCartTotal())
    
    console.log("cart:", cart);
    console.log("count:", cartCount);
    console.log("total:", cartTotal);
    return (
        <div className="text-gray-900">
            {/* overlay */}
            {isCartOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsCartOpen(false)}
                />
            )}

            {/* drawer */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b-2 border-gray-300">
                    <h2 className="text-md font-bold tracking-wider">Your Cart ({cartCount})</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-gray-900 cursor-pointer text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* cart items */}
                <div className="flex flex-col overflow-y-scroll flex-1">
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
                                <div>
                                    <p className="line-clamp-2">{item.title}</p>
                                    {/* quantity controls */}
                                    <div className="flex gap-2">
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
                                            onClick={() => removeFromCart(item.id)}
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
                    <div className="flex flex-col">
                        <div className="flex justify-between p-6">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link
                            href="/cart"
                            className="mx-6 mb-6 py-4 bg-blue-950 rounded-lg border border-gray-300 text-white font-bold text-center"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Checkout →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}