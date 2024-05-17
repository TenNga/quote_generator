import React from "react";
import { QuoteContextProviderType } from "../../types";

function Card({children}:QuoteContextProviderType) {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md p-6 ml-6 mt-6 grow max-[600px]:ml-0">
            {children}
        </div>
    )
}
export default Card;