"use server"

import {connectToDB} from "@/lib/utils";
import {Post, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try {
        connectToDB()
        const newPost = new Post({title, desc, slug, userId})

        await newPost.save()
        console.log("saved to the DB")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return ("something went wrong")
    }
}


export async function deletePost(data) {
    const {id} = Object.fromEntries(data)
    try {
        connectToDB()
        await Post.findByIdAndDelete(id)
        revalidatePath("/blog")
        revalidatePath("/admin")
        return {message: "true"}
    } catch (err) {
        console.log(err)
        return {error: "something went wrong"}
    }
}


export const addUser = async (prevState, formData) => {
    const {username, email, password} = Object.fromEntries(formData)

    try {
        connectToDB()
        const newUser = new User({username, email, password})

        await newUser.save()
        console.log("saved to the DB")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return ("something went wrong")
    }
}

export async function deleteUser(data) {
    const {id} = Object.fromEntries(data)
    try {
        connectToDB()
        await Post.deleteMany({userId: id})
        await User.findByIdAndDelete(id)
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return ("something went wrong")
    }
}


export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
    return {success: "true"}
}

export async function login(prevState, fromData) {
    const {email, password} = Object.fromEntries(fromData)
    connectToDB();

    try {
        await signIn("credentials", {email, password})
        return {success: "true"}
    } catch (error) {
        if (error.message.includes("CredentialsSignin")) {
            return {error: "Invalid credentials"}
        }
        throw error
    }
}

export const handleLogout = async () => {
    "use server"
    await signOut()
}

export async function handleRegister(prevState, formData) {
    "use server"
    const {username, email, password, repeat_password} = Object.fromEntries(formData)

    if (password !== repeat_password) {
        return {error: "Passwords do not match"}
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    connectToDB();
    try {
        const user = await User.findOne({email: email})
        if (user) {
            return {error: "User already exists"}
        } else {
            const newUser = new User({
                username: username,
                email: email,
                password: hashedPassword
            })

            await newUser.save();

            return {success: "true"}
        }

    } catch (err) {
        console.log(err)
        return {error: "Something went wrong"}
    }
}