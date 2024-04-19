import React from 'react';
import Link from "next/link";

function NotFound(props) {
    return (
        <div>
            <h2>Page is not found</h2>
        <p>Are you sure you know where to go?</p>
    <Link href={"/"}>Go to Home page</Link>
            </div>
    );
}

export default NotFound;