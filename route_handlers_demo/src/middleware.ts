import { NextResponse,type NextRequest } from "next/server";

export function middleware(request:NextRequest){

    const response=NextResponse.next()

    const themePreference=request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("themePreference","dark")
    }

    response.headers.set("custom-header","custom-value")

    return response

    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/hello",request.url))
    // }
    // return NextResponse.redirect(new URL("/",request.url)) // param 1 - where to redirect // param 2- base url
}

// export const config={
//     matcher:"/profile"
// }