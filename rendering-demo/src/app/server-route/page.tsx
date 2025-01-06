import ImageSlider from "@/components/ImageCarousel";
import { serverSideFunction } from "../utils/server-only";
// import { ClientSideFuntion } from "../utils/client-only";

export default function ServerSidePage() {
    const result=serverSideFunction()
    // const clientResult=ClientSideFuntion()
    return (
        <>
        <div>ServerSidePage</div>
        <div>{result}</div>
        <ImageSlider />
        </>
    );
}