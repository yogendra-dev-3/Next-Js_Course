'use client'

import { useState } from "react";


export default function NavSearch() {
    const [search,setSearch]=useState("")
    console.log("Nav search rendered")
    return (
        <div>
            Nav search input
        </div>
    );
}