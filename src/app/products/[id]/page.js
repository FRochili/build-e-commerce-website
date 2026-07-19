"use client"
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { useState, useEffect, use } from "react";

export default function ProductPage({params}) {
    const { id } = use(params)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status}`)
                }
                const data = await res.json()
                setProduct(data)
            } catch (error) {
                console.error("fetchProduct error:", error);
                setProduct(null)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return (
        <div className="flex justify-center items-center py-24">
            <p className="text-gray-500">Loading...</p>
        </div>
    )

    if (!product) return (
        <div className="flex flex-col items-center justify-center gap-6 py-24">
            <p className="text-gray-500">Product not found</p>
            <Link href="/" className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold">
                ← Back to products
            </Link>
        </div>
    )

    return (
        <div className="mx-auto p-8 font-sans">
            {/* Back button */}
            <Link href="/" className="bg-blue-950 p-4 rounded-lg border border-gray-700 text-md">
                ← Back to products
            </Link>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-600 rounded-lg">
                {/* Image */}
                <div className="bg-white p-8 rounded-lg border border-gray-200 flex justify-center">
                    <img 
                        src={product.image}
                        alt={product.title}
                        height={200}
                        width={200}
                        className="object-contain"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 p-8">
                    <span className="uppercase text-sm tracking-wide">
                        {product.category}
                    </span>
                    <h1 className="text-xl font-bold">
                        {product.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="bg-yellow-50 border border-yellow-600 rounded px-2 py-1 text-sm text-gray-900">
                            <span className="text-yellow-400">★ </span>
                            {product.rating.rate}
                        </span>
                        <span className="text-gray-400 text-sm">
                            {product.rating.count} reviews
                        </span>
                    </div>
                    <p className="text-2xl font-bold">
                        ${product.price}
                    </p>
                    <p className="text-sm leading-relaxed">
                        {product.description}
                    </p>
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    )
}