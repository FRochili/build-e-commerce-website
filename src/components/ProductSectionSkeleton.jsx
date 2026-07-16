import ProductCardSkeleton from "./ProductCardSkeleton"
export default function ProductSectionSkeleton() {
    return (
        <div className="w-full">
            <div className="bg-yellow-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({length: 8}).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        </div>
    )
}