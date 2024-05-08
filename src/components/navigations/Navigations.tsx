import React from "react";
import Menu from "./Menu";
import Search from "./Search";

function Navigations() {
    return(
        <div className="flex justify-between px-20 text-white bg-teal-600">
            <Menu />
            <Search />
        </div>
    )
};

export default Navigations;