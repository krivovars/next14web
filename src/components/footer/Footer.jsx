import React from 'react';

function Footer(props) {
    return (
        <div className={"flex justify-between items-center text-gray-500 max-md:flex-col max-md:justify-around"}>
            <div>mylogo</div>
            <div>All rights reserved</div>
        </div>
    );
}

export default Footer;