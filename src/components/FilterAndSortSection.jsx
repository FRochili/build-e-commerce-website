"use client"
import useProductStore from "@/lib/store"

const categories = ["ALL", "men's clothing", "jewelery", "electronics", "women's clothing"] 

export default function FilterAndSortSection() {
    const { sortBy, setSortBy, selectedCategory, setSelectedCategory, setCurrentPage } = useProductStore()
    
    const handleCategoryChange = (c) => {
        setSelectedCategory(c)
        setCurrentPage(1)
    }
    
    return (
        <div className="flex">
            {/* Sort Dropdown */}
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
            </select> 

            {/*Category Bar*/}
            <ul className="bg-gray-300 w-full p-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
            </ul>
        </div>
    )
}