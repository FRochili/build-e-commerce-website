"use client"
import useProductStore from "@/lib/store";

export default function AddToCartButton({product}) {
    const { addToCart } = useProductStore();
    return(
        <button 
            onClick={() => addToCart(product)}
            className="bg-blue-950 p-4 rounded-lg border border-gray-700 font-bold cursor-pointer"
        >
            Add To Cart
        </button>
    )
}