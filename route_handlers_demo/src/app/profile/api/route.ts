import { NextRequest } from "next/server"
import { headers,cookies } from "next/headers"

export async function GET(request:NextRequest){
    const requestHeaders=new Headers(request.headers)
    const headersList=await headers()

    // cookies approach 1
    const theme=request.cookies.get("theme")
    console.log(theme)
    // cookies approach 2 using cookies method from next js headers
    const allCookies=await cookies()
    allCookies.set("resultsPerPage","30")
    console.log(allCookies.get("resultsPerPage"))
    console.log(requestHeaders.get("Authorization"))
    console.log((headersList).get("Authorization"))
    return new Response("<h1>Profile Data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}