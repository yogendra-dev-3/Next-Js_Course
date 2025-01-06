
"use client"
import { useState } from "react";

export default function DashboardPage() {

    console.log("client component rendered")

    const [name,setName]=useState("")
    return (
        <div>
            <h1>dashboard Page</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <h1>Hello {name}</h1>
        </div>
    );
}