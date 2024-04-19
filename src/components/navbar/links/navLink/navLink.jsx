"use client"

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function NavLink({item}) {

    const pathName = usePathname();
    return (
        <Link href={item.link} className={` border border-transparent rounded-2xl text-center min-w-20
        ${pathName === item.link ? "bg-white text-[#0d0c22]" : ""}`}>{item.name}</Link>
    );
}

export default NavLink;