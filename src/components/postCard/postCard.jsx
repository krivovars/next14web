import React from 'react';
import Image from "next/image";
import Link from "next/link";

function PostCard({post}) {
    return (
        <section className="flex flex-wrap gap-10 mb-5 w-full md:w-1/4">
            <div className={"flex relative justify-center items-center"}>
                <div className={"relative w-full"}>
                    <Image src={"/post1.png"} alt={"Blog image"}
                           width={0}
                           height={0}
                           sizes="200vw"
                           priority="false" className={"object-cover w-full"}/>
                </div>
                <span className={"text-xs -rotate-90 w-full"}>{post.createdAt.toString().slice(4,10)}</span>
            </div>
            <div className={"w-9/10"}>
                <h1 className={"mb-5 text-lg"}>
                    {post.title}
                </h1>
                <p className={"mb-5 font-thin text-gray-300"}>
                    {post.desc}
                </p>
                <Link href={`/blog/${post.slug}`} className={"underline"}>Read More</Link>
            </div>
        </section>
    );
}

export default PostCard;