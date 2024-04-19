import React from 'react';
import {getPosts} from "@/lib/data";
import {deletePost} from "@/lib/action";

async function AdminPosts(props) {

    const posts = await getPosts();

    return (
        <div className={"flex flex-col gap-5 mb-5 mx-5"}>
            <h1>Posts</h1>
            {posts.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <form action={deletePost}>
                        <input type={"hidden"} name={"id"} value={post.id}/>
                        <button className={"border rounded-xl bg-gray-600 hover:cursor-pointer w-20"}>
                            Delete
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminPosts;