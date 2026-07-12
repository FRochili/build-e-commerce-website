"use client"

export default function Hero() {
    const scrollToProducts = () => {
        const productSection = document.getElementById("products");
        if (productSection) {
            productSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div className="flex flex-col gap-4 p-4 px-6 bg-zinc-900">
            <span className="text-white text-3xl font-extrabold">Everything you need,</span>
            <span className="text-yellow-400 text-3xl font-extrabold">delivered fast.</span>
            <span className="text-gray-500 text-xl font-semibold">Thousands of products, every category</span>
            <button onClick={scrollToProducts} className="text-gray-300 text-2xl font-semibold border rounded-xl border-gray-500 w-fit px-4 py-2 cursor-pointer">Shop Now</button>
        </div>
    )
}