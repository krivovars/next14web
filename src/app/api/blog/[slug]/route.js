import {connectToDB} from "@/lib/utils";
import {Post, User} from "@/lib/models";
import {NextResponse} from "next/server";


export async function GET(request, { params }) {
    const { slug } = params;

    try {
        await connectToDB();

        // Fetch the post using the slug
        const post = await Post.findOne({ slug });

        if (!post) {
            throw new Error(`Post not found for slug: ${slug}`);
        }

        // Fetch the user associated with the post
        const user = await User.findById(post.userId);

        if (!user) {
            throw new Error(`User not found for post: ${post._id}`);
        }

        // Return both post and username as JSON response
        return NextResponse.json({ post, username: user.username });
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
    }}