import React from "react";

function Menu() {
    return(
        <div className="mx-6 my-4 text-base">
            <ul className="flex">
                <li className="mr-6 capitalize cursor-pointer"><a href="https://www.kevinkarma.me" target="_blank">Developer</a></li>
                <li className="mr-6 capitalize cursor-pointer"><a href="https://github.com/lukePeavey/quotable" target="_blank">API</a></li>
            </ul>
        </div>
    )
};

export default Menu;