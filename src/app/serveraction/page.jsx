import {addPost, deletePost} from "@/lib/action";

function serverActionTestPage() {
    return (<div >
        <form action={addPost}
            className={"flex flex-col gap-5 text-blue-900"}>
            <input type={"text"} name={"title"} placeholder={"Your name"}/>
            <input type={"text"} name={"desc"} placeholder={"Your desc"}/>
            <input type={"text"} name={"slug"} placeholder={"Your slug"}/>
            <input type={"text"} name={"userId"} placeholder={"Your userId"}/>
            <button>Submit</button>
        </form>

        <form action={deletePost}
              className={"flex flex-col gap-5 text-blue-900"}>
            <input type={"text"} name={"id"} placeholder={"Your id"}/>
            <button>Submit</button>
        </form>
    </div>)
}



export default serverActionTestPage;