"use client"
import { useEffect } from "react"
import useProductStore from "@/lib/store"
import ProductCard from "./ProductCard"

export default function ProductSection() {
    const { fetchProducts, getPaginatedProducts, } = useProductStore();
    
    const paginatedProducts = getPaginatedProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    // console.log(paginatedProducts)

    return (
        <div className="w-full">
            <div className="bg-yellow-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {paginatedProducts.map((p) => (
                    <ProductCard key={p.id} products={p} />
                ))}
            </div>
        </div>
    )
}