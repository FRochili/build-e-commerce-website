"use client"
import Link from "next/link"
import useProductStore from "@/lib/store"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage() {
    // const {cart, cartCount, cartTotal, setCart} = useCart()
    const cart = useProductStore((state) => state.cart)
    const cartCount = useProductStore((state) => state.getCartCount())
    const cartTotal = useProductStore((state) => state.getCartTotal())
    const clearCart = useProductStore((state) => state.clearCart)
    const router = useRouter()
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        card: "",
        expiry: "",
        cvv: "",
    })
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        clearCart()
        // redirect to order confirmation
        router.push("/order-confirmation")
    }

    if (cart.length === 0) return (
        <div className="max-w-4xl mx-auto p-8 font-sans">
            <div className="flex flex-col items-center gap-6 p-6">
                <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg text-gray-950">
                        <span className="text-5xl">🛒</span>
                        <p>Your cart is empty</p>
                    </div>
                <Link
                    href="/"
                    className="px-4 py-2 text-gray-300 bg-blue-950 rounded-lg border border-gray-500 cursor-pointer text-md"
                >
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    )

    return(
        <div className="max-w-4xl mx-auto p-8 font-sans">
            {/* header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-md font-bold tracking-wider">Checkout</h2>
                <Link
                    href="/cart"
                    className="px-4 py-2 text-gray-300 bg-blue-950 rounded-lg border border-gray-500 cursor-pointer text-md"
                >
                    ← Back to cart
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* form */}
                <form onSubmit={handleSubmit} className="md:col-span-2 flex flex-col gap-6">
                    
                    {/* Shipping info */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4 text-gray-950">
                        <h2 className="font-bold text-lg">Shipping Information</h2>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                        />
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                        />
                        <input 
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Street Address"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                        />
                        <div className="flex gap-4">
                            <input 
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                placeholder="City"
                                required
                                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                            />
                            <input 
                                type="text"
                                name="zip"
                                value={form.zip}
                                onChange={handleChange}
                                placeholder="ZIP Code"
                                required
                                className="w-32 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                            />
                        </div>
                    </div>

                    {/* Shipping info */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4 text-gray-950">
                        <h2 className="font-bold text-lg">Payment Information</h2>
                        <input 
                            type="text"
                            name="card"
                            value={form.card}
                            onChange={handleChange}
                            placeholder="Card Number"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                        />
                        <div className="flex gap-4">
                            <input 
                                type="text"
                                name="expiry"
                                value={form.expiry}
                                onChange={handleChange}
                                placeholder="Card Expiry"
                                required
                                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                            />
                            <input 
                                type="number"
                                name="cvv"
                                value={form.cvv}
                                onChange={handleChange}
                                placeholder="CVV"
                                required
                                className="w-32 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-900"
                            />
                        </div>
                    </div>

                    {/* submit button */}
                    <button
                        type="submit"
                        className="py-4 bg-blue-950 rounded-lg border border-gray-300 text-white font-bold text-center cursor-pointer"
                    >
                        Place Order →
                    </button>
                </form>

                {/* Order summary */}
                <div className="bg-white rounded-lg border border-gray-200 flex flex-col gap-4 justify-between p-4 text-gray-950 h-fit">
                    <h2 className="font-bold text-xl">Order Summary</h2>
                    <div className="flex justify-between gap-4">
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
            </div>
        </div>
    )
}