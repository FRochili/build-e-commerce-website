export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-4 h-full">

            {/* Image */}
            <div className="bg-gray-200 animate-pulse h-48 w-full rounded-lg" />

            {/* Category */}
            <div className="bg-gray-200 animate-pulse h-4 w-1/3 rounded-lg" />

            {/* Product name */}
            <div className="bg-gray-200 animate-pulse h-6 w-full rounded-lg" />

            {/* Price */}
            <div className="bg-gray-200 animate-pulse h-5 w-1/2 rounded-lg" />

            {/* Button */}
            <div className="bg-gray-200 animate-pulse h-10 w-full rounded-lg mt-auto" />

        </div>
    );
}