import React from 'react';
import { getUsers} from "@/lib/data";
import { deleteUser} from "@/lib/action";

async function AdminUsers(props) {
    const users = await getUsers();

    return (
        <div className={"flex flex-col gap-5 mb-5 mx-5"}>
            <h1>Users</h1>
            {users.map((user) =>
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                    <form action={deleteUser}>
                        <input type={"hidden"} name={"id"} value={user.id}/>
                        <button className={"border rounded-xl bg-gray-600 hover:cursor-pointer w-20"}>
                            Delete
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminUsers;