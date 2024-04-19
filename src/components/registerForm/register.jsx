"use client"

import {handleRegister} from "@/lib/action";
import {useFormState} from "react-dom"
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";


function Register(props) {
    const [state, formAction] = useFormState(handleRegister, undefined);
    const router = useRouter();

    useEffect(()=>{
        state?.success && router.push("/login")
    }, [state?.success, router]);


    return (
        <form action={formAction} className={"flex flex-col gap-5 text-blue-900 "}>
            <input placeholder={"username"} type={"text"} name={"username"}/>
            <input placeholder={"email"} type={"text"} name={"email"}/>
            <input placeholder={"password"} type={"password"} name={"password"}/>
            <input placeholder={"repeat password"} type={"password"} name={"repeat_password"}/>

            <button>Register</button>
            <Link href={"/login"} >Have an account?</Link>
            {state?.error && <p className={"text-red-500"}>{state.error}</p>}
        </form>
    );
}

export default Register;