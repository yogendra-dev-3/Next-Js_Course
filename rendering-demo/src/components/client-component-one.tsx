"use client"

import { useState } from "react";

export default function ClientComponentOne({children}:{children:React.ReactNode}) {

    const [name,setName]=useState()
    return (
        <>
        <div>Client component one</div>
        {children}
        </>
    );
}