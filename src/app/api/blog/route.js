import {connectToDB} from "@/lib/utils";
import {Post} from "@/lib/models";
import {NextResponse} from "next/server";


export const GET = async (request) => {
    try {
        await connectToDB();
        const posts = await Post.find();
        return NextResponse.json(posts)
    }
    catch (error) {
        console.log(error)
        throw new Error("failed to get data");
    }
}