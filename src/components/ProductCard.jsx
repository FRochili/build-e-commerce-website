import Image from "next/image";
import Link from "next/link";
// import AddToCartButton from "./AddToCartButton";

export default function ProductCard({products}) {
    return(
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-4 h-full">

            {/*Link image and details in Link*/}
            <Link href={`/products/${products.id}`} className="flex flex-col gap-2 flex-1">

                <div className="flex flex-col gap-2">
                {/*Product Image*/}
                <img
                    src={products.image}
                    alt={products.title}
                    width={200}
                    height={200}
                    className="object-contain h-48 w-full"
                />

                {/*Category*/}
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                    {products.category}
                </span>

                {/*Product Name*/}
                <p className="text-gray-900 font-semibold line-clamp-2">
                    {products.title}
                </p>
                
                {/*Price*/}
                <p className="text-gray-900 font-semibold whitespace-nowrap">
                    ${products.price}
                </p>
                
                {/*Rating*/}
                <div className="text-xs">
                    <span className="bg-yellow-50 border border-yellow-600 rounded-xs px-1 text-gray-900"><span className="text-yellow-400">★ </span>{products.rating.rate}</span>
                    <span className="text-gray-400 ml-1">{products.rating.count} Reviews</span>
                </div>
            </div>
            
            </Link>
            {/*Add to cart Button*/}
            {/* <AddToCartButton products={products} /> */}

        </div>
    )
}