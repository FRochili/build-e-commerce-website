"use client"
import useProductStore from "@/lib/store";

export default function Pagination() {
    const currentPage = useProductStore((state) => state.currentPage);
    const setCurrentPage = useProductStore((state) => state.setCurrentPage);
    const totalPages = useProductStore((state) => state.getTotalPages());
    console.log(currentPage)

    return (
        <div className="w-full flex justify-center">
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 py-8">
                    <button
                        onClick = {() => setCurrentPage(Math.max(currentPage - 1, 1))}
                        disabled = {currentPage === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-200 disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
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
                                    : "border-gray-300 text-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
    
                    <button
                        onClick = {() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        disabled = {currentPage === totalPages}
                        className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-200 disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    )
}