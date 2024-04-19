import React from 'react';
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import {deletePost} from "@/lib/action";

function AdminPage(props) {
    return (
        <section className={"flex justify-center items-center m-auto w-full text-center"}>
            <div className={"flex flex-col flex-1 text-center items-center justify-center"}>
                <div className={"border rounded-2xl"}>
                    <AdminPosts/>
                </div>
                <div className={""}>
                    <AdminPostForm/>
                </div>
            </div>
            <div className={"flex flex-col flex-1 text-center items-center justify-center"}>
                <div>
                    <AdminUsers/>
                </div>
                <div>
                    <AdminUserForm/>
                </div>
            </div>

        </section>
    );
}

export default AdminPage;