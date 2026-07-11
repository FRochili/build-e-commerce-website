"use client"
import { useEffect, useState } from "react"
import useProductStore from "@/lib/store"
import ProductCard from "./ProductCard"

export default function ProductSection() {
    const { fetchProducts, getPaginatedProducts, products } = useProductStore();
    
    const paginatedProducts = getPaginatedProducts();
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    // const [selectedCategory, setSelectedCategory] = useState("ALL");
    // const [searchQuery, setSearchQuery] = useState("");
    // const [sortBy, setSortBy] = useState("default");
    // const [currentPage, setCurrentPage] = useState(1);

    // const PRODUCTS_PER_PAGE = 8;

    // const categories = ["ALL", "men's clothing", "jewelery", "electronics", "women's clothing"] 

    // const filtered = products
    //     .filter((p) => selectedCategory === "ALL" || p.category === selectedCategory)
    //     .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //     .sort((a, b) => {
    //         if (sortBy === "price-asc") return a.price - b.price
    //         if (sortBy === "price-desc") return b.price - a.price
    //         if (sortBy === "rating") return b.rating.rate - a.rating.rate
    //         return 0
    //     })

    // // pagination logic
    // const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
    // const paginated = filtered.slice(
    //     (currentPage - 1) * PRODUCTS_PER_PAGE,
    //     currentPage * PRODUCTS_PER_PAGE
    // )

    // // reset to page 1 when filter changes
    // const handleCategoryChange = (c) => {
    //     setSelectedCategory(c)
    //     setCurrentPage(1)
    // }

    // const handleSearchChange = (q) => {
    //     setSearchQuery(q)
    //     setCurrentPage(1)
    // }

    return (
        <div className="w-full">
            
            {/* <div className="flex"> */}
                {/* Sort Dropdown
                <select
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value)
                        setCurrentPage(1)
                    }}
                    className="bg-gray-800 text-white text-sm rounded-md pl-6 pr-8 py-2 outline-none cursor-pointer appearance-none shrink-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 10px center',
                    }}
                    >
                    <option value="default">Featured</option>
                    <option value="price-asc">↑ Price</option>
                    <option value="price-desc">↓ Price</option>
                    <option value="rating">Top Rated</option>
                </select> */}

                {/*Category Bar*/}
                {/* <ul className="bg-gray-300 w-full p-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {categories.map((c) => (
                        <li key={c} 
                            onClick={() => handleCategoryChange(c)}
                            className={`border rounded-full px-4 py-1 whitespace-nowrap cursor-pointer
                                ${selectedCategory === c
                                    ? "bg-gray-900 text-gray-200 border-gray-500"
                                    : "border-gray-500 text-gray-900"
                                }`}
                        >
                            {c}
                        </li>
                    ))}
                </ul> */}
            {/* </div> */}

            {/*Product Section*/}
            <div id="products" className="bg-yellow-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {paginatedProducts.map((p) => (
                    <ProductCard key={p.id} products={p} />
                ))}
            </div>

            {/* Pagination controls */}
            {/* {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 py-8">
                    <button
                        onClick = {() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled = {currentPage === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
                    >
                        ← Prev
                    </button>

                    {Array.from({ length:totalPages }, (_, i) => i + 1).map((page) => (
                        <button 
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-md text-sm border transition-colors duration-200
                                ${currentPage === page
                                    ? "bg-gray-900 text-white border-gray-900"
                                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick = {() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled = {currentPage === totalPages}
                        className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
                    >
                        Next →
                    </button>
                </div>
            )} */}

        </div>
    )
}