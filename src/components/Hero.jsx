"use client"

export default function Hero() {
    return (
        <div className="flex flex-col gap-4 p-4 px-6">
            <span className="text-white text-3xl font-extrabold">Everything you need,</span>
            <span className="text-yellow-400 text-3xl font-extrabold">delivered fast.</span>
            <span className="text-gray-500 text-xl font-semibold">Thousands of products, every category</span>
            <button className="text-gray-300 text-2xl font-semibold border rounded-xl border-gray-500 w-fit px-4 py-2 cursor-pointer">Shop Now</button>
        </div>
    )
}