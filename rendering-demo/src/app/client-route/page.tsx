"use client"

import ImageSlider from "@/components/ImageCarousel";
import { useTheme } from "@/components/theme-context";
import { ClientSideFuntion } from "../utils/client-only";


export default function ClientSidePage() {
    // const result=serverSideFunction()
    const theme=useTheme()
    const result=ClientSideFuntion()
    return (
        <>
        <div style={{background:theme.colors.primary}}>ClientSidePage {result}</div>
        <ImageSlider />
        </>
    );
}