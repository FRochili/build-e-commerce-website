"use client"
import { useEffect, useMemo } from "react"
import useProductStore from "@/lib/store"
import ProductCard from "./ProductCard"

export default function ProductSection() {
    const fetchProducts = useProductStore((state) => state.fetchProducts)
    const products = useProductStore((state) => state.products)
    const selectedCategory = useProductStore((state) => state.selectedCategory)
    const searchQuery = useProductStore((state) => state.searchQuery)
    const sortBy = useProductStore((state) => state.sortBy)
    const currentPage = useProductStore((state) => state.currentPage)
    const loading = useProductStore((state) => state.loading)
    
    const paginatedProducts = useMemo(() => {
        const filtered = products
            .filter((p) => selectedCategory === "ALL" || p.category === selectedCategory)
            .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                if (sortBy === "price-asc") return a.price - b.price
                if (sortBy === "price-desc") return b.price - a.price
                if (sortBy === "rating") return b.rating.rate - a.rating.rate
                return 0
            })
        const start = (currentPage -1) * 8;
        const end = start + 8;
        return filtered.slice(start,end);
    }, [products, selectedCategory, searchQuery, sortBy, currentPage])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    console.log(paginatedProducts)

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