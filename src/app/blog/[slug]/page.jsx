import React from 'react';
import Image from "next/image";



const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}


export async function generateMetadata ({params}) {
    const {slug} = params;
    const {post} = await getData(slug);
    return {
        title: post.title,
        description: post.desc
    }
}



async function SinglePostPage ({params}) {

    //FETCH DATA WITH AN API
    //const post = await getPost(params.slug);
    //const user = await getUser(post.userId)


    //FETCH DAT WITHOUT AN API
    const {slug} = params;
    const {post, username} = await getData(slug)
    console.log(post)
    //const user = await getUser(post.userId)

    return (
        <section className={"flex gap-20"}>
            <div className={"flex-1 max-md:hidden min-w-10"}>
                <Image src={"/post1.png"} alt={"first blog post"}
                width={0} height={0} sizes="150vw" priority="false"
                       className={"w-full"}
                />
            </div>
            <div className={"flex flex-col gap-10 flex-2"}>
                <h1 className={"font-bold text-6xl"}>{post.title}</h1>
                <div className={"flex w-10 h-10 gap-5 items-center"}>
                    <Image src={"/noavatar.png"} alt={"author"}
                           width={0} height={0} sizes="60vw" priority="false"
                           className={"w-full rounded-full"}
                    />
                    <div className={"flex flex-col flex-shrink-0"}>
                        <span className={"font-semibold text-gray-500 text-"}>Author</span>
                        <span>{username}</span>

                    </div>
                    <div className={"flex flex-col flex-shrink-0"}>
                        <span className={"font-semibold text-gray-500"}>Published</span>
                        <span>{post.createdAt.toString().slice(0,10)}</span>

                    </div>
                </div>
                <div className={"text-lg font-thin"}>
                    {post.desc}
                </div>
            </div>
        </section>
    );
}

export default SinglePostPage;