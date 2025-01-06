import Product from "@/components/product";
import Reviews from "@/components/review";
import { Suspense } from "react";

export default function ProductDetailPage() {
    return (
        <>
        <div>Product details</div>
        <Suspense fallback={<div>Loading product...</div>}>
            <Product />
        </Suspense>
        <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews /> 
        </Suspense>
        </>
    );
}