"use client"
import { FaCartArrowDown } from "react-icons/fa"

export default function Header({searchQuery, setSearchQuery}) {
    return (
        <div className="w-full flex justify-between bg-gray-50 dark:bg-gray-950 p-4">
            <h1 className='text-gray-950 dark:text-gray-100 font-extrabold text-4xl'>MarketPlace</h1>
            <div className="flex gap-2">
                {/* search input */}
                <input 
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="bg-gray-800 text-gray-100 text-sm rounded-md px-4 py-2 outline-none border border-gray-600 w-40"
                />
                {/* cart icon */}
                <div
                    className="relative flex items-center cursor-pointer"
                >
                    <FaCartArrowDown className="text-2xl" />
                </div>
            </div>
        </div>
    )
}