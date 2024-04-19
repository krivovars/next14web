import PostCard from "@/components/postCard/postCard";
import {getPosts} from "@/lib/data";




//FETCHING DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", );
  if (!res.ok) {
      throw new Error("Failed to fetch data");
  }

  return res.json();
}


async function BlogPage(props) {
    //FETCHING DATA WITH AN API
    const posts = await getData();

    //FETCHING DATA WITHOUT AN API
    //const posts =  await getPosts()
    return (
        <div className={"flex flex-wrap mt-20 gap-10 items-center"}>
            {posts.map((post) => <PostCard key={post.id} post={post}/>)}
        </div>
    );
}

export default BlogPage;