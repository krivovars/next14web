import LoginForm from "@/components/loginForm/loginForm";
import {handleGithubLogin} from "@/lib/action";

function LoginPage(props) {

    return (
        <div className={"flex flex-col w-1/2 bg-blue-900 gap-6 items-center justify-center p-3 m-auto"}>
            <form action={handleGithubLogin} >
                <button className={"flex flex-1 bg-gray border p-1 bg-gray-500 text-white w-full"}>Login with GITHUB</button>
            </form>
            <span>or by using credentials</span>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;