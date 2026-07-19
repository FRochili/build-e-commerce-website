"use client"
import Link from "next/link"
import { useState } from "react";
import useProductStore from "@/lib/store";

export default function OrderConfirmation() {
    const [randomNumber] = useState(() =>
        Math.floor(Math.random() * 900000) + 100000
    );

    const clearCart = useProductStore((state) => state.clearCart);

    const handleClick = (e) => {
        clearCart()
    }

    return (
        <div className="max-w-4xl mx-auto p-8 font-sans">
            <div className="bg-white rounded-lg border border-gray-200 p-12 flex flex-col items-center gap-6 text-center">
                {/* Success icon */}
                <div className="w-20 h-20 rounded-full bg-green-500 flex justify-center items-center animate-pop-in">
                    <span className="text-4xl">✓</span>
                </div>
                
                {/* Message */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-950 font-extrabold text-2xl">Order Placed!</h2>
                    <p className="text-gray-500 text-sm">Thank you for your purchase. Your order has been
                    confirmed and will be shipped soon.</p>
                </div>

                {/* Order Number */}
                <div className=" bg-gray-100 border border-gray-300 p-6 rounded-lg flex flex-col">
                    <span className="text-gray-500 text-sm uppercase">Order Number</span>
                    <span className="text-gray-950 text-2xl font-bold">#{randomNumber}</span>
                </div>

                {/* What's next */}
                <div className="text-gray-950 text-sm flex flex-col gap-2 items-start border-t border-gray-300 pt-6">
                    <p className="font-bold">What happens next?</p>
                    <div className="flex gap-2 text-start">
                        <span className="bg-gray-950 w-5 h-5 rounded-full p-1 text-white flex justify-center items-center">1</span>
                        <p className="text-gray-500">You will receive an email confirmation shortly</p>
                    </div>
                    <div className="flex gap-2 text-start">
                        <span className="bg-gray-950 w-5 h-5 rounded-full p-1 text-white flex justify-center items-center">2</span>
                        <p className="text-gray-500">Your order will be packed and shipped within 1-2 business days</p>
                    </div>
                    <div className="flex gap-2 text-start">
                        <span className="bg-gray-950 w-5 h-5 rounded-full p-1 text-white flex justify-center items-center">3</span>
                        <p className="text-gray-500">You will receive a tracking number once your order is shipped</p>
                    </div>
                </div>

                {/* back to home */}
                <Link
                    href="/"
                    className="w-full p-4 bg-blue-950 rounded-lg border border-gray-300 text-white font-bold text-center"
                    onClick={handleClick}
                >
                    <p>Continue Shopping →</p>
                </Link>

            </div>
        </div>
    )
}