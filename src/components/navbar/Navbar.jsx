import React from 'react';
import Links from "@/components/navbar/links/Links";
import Link from "next/link";
import {auth} from "@/lib/auth";

async function Navbar(props) {

    const session = await auth();

    return (
        <section className={"flex justify-between items-center"}>
            <Link href={"/"} className={"text-3xl font-bold"}>Logo</Link>
            <div>
                <Links session={session}/>
            </div>
        </section>
    );
}

export default Navbar;