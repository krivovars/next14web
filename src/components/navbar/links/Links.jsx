"use client"

import React, {useState} from 'react';
import NavLink from "@/components/navbar/links/navLink/navLink";
import Image from "next/image";
import {handleLogout} from "@/lib/action";


const links = [
    {
        name: 'Home',
        link: '/',
    },

    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'Blog',
        link: '/blog',
    }
]

function Links(props) {

    const [isOpen, setIsOpen] = useState(false)

    // TEMPORARY
    const isAdmin = false

    return (
        <div>
        <div className={"flex gap-2 justify-center items-center max-md:hidden"}>
            {links.map((link, index) =>
                <NavLink key={index} item={link} />
            )}
            {props.session?.user.email ? (
                <>
            {props.session.user?.isAdmin && <NavLink item={{name: 'Admin', link: '/admin'}} />}
                    <form action={handleLogout}>
                    <button className={"cursor-pointer bg-white text-[#0d0c22] px-2"}>Logout</button>
                    </form>
                </>
                ):(
                    <NavLink item={
                        {
                            name: 'Login',
                            link: '/login'
                        }
                    }/>
            )}
        </div>
            <div className={"hidden max-md:inline"}>
                <Image onClick={() => setIsOpen(prevState => !prevState)} src={"/menu.png"} width={0} height={0} sizes="50vw" alt="menu" priority="false" className={"object-cover w-full cursor-pointer"}/>
                {isOpen && <div
                    className={"flex flex-col absolute items-center justify-center top-[100px] right-0 w-1/2 h-[90vh] gap-2.5 bg-[#0d0c22] z-20"}>
                    {links.map((link, index) =>
                        <NavLink key={index} item={link}/>
                    )}
                </div>}
            </div>
        </div>
    )

}


export default Links;