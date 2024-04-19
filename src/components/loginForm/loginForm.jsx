"use client"

import {login} from "@/lib/action";
import {useFormState} from "react-dom"
import {useEffect} from "react";
import { useRouter } from 'next/navigation'

import Link from "next/link";


function LoginForm(props) {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();

    return (
        <form action={formAction} className={"flex flex-col gap-5 text-white items-center text-black"}>
            <input placeholder={"email"} type={"text"} name={"email"}/>
            <input placeholder={"password"} type={"password"} name={"password"}/>
            <button>Login</button>
            <Link href={"/register"} >No account?</Link>
            {state?.error && <p className={"text-red-500"}>{state.error}</p>}
        </form>
    );
}

export default LoginForm;