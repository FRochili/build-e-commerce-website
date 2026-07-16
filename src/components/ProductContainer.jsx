"use client";

import { useEffect } from "react";
import useProductStore from "@/lib/store";
import ProductSection from "./ProductSection";
import ProductSectionSkeleton from "./ProductSectionSkeleton";

export default function ProductContainer() {

    const loading = useProductStore((state) => state.loading);
    const products = useProductStore((state) => state.products);
    const fetchProducts = useProductStore(
        (state) => state.fetchProducts
    );

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, [fetchProducts, products.length]);


    if (loading) {
        return <ProductSectionSkeleton />;
    }


    return <ProductSection />;
}