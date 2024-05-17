import React, { useContext, useEffect } from "react";
import Card from "./shared/Card";
import { QuoteType } from "../types";

type propType = {
    quotes: QuoteType[]
}

function QuoteContainer({quotes}: propType) {
    const renderQuote = quotes?.map(quote => {
        return(
            <Card key={quote._id}>
                <h1 className='font-bold text-lg mb-1'>{quote?.author}</h1>
                <p className="text-sm">{quote?.content}</p>
            </Card>
        )
    })
    return(
        <div className="cards-container flex mx-20 flex-wrap max-[600px]:mx-4">
            {renderQuote}
         </div>
    )
};

export default QuoteContainer;