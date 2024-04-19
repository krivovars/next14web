import {connectToDB} from "@/lib/utils";
import error from "@/app/error";
import {Post, User} from "@/lib/models";

export async function getPosts () {
    try {
        connectToDB();
        return await Post.find();
    } catch (err) {
        console.log(err)
        throw error("failed to fetch Posts, sorry")
    }
}

export async function getPost (slug) {
    try {
        connectToDB();
        return await Post.findOne({slug});
    } catch (err) {
        console.log(err)
        throw error("failed to fetch Post, sorry")
    }
}

export async function getUser (id) {
    try {
        connectToDB();
        return await User.findById(id);
    } catch (err) {
        console.log(err)
        throw error("failed to fetch User, sorry")
    }
}

export async function getUsers () {
    try {
        connectToDB();
        return await User.find();
    } catch (err) {
        console.log(err)
        throw error("failed to fetch Users, sorry")
    }
}