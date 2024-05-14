import React, { useState, createContext } from "react";
import { QuoteType, QuoteContextType, QuoteContextProviderType } from "../types";

export const QuoteContext = createContext<QuoteContextType>({
    quotes:[{
        _id: "FG1kVHjOKx",
        "content": "One loyal friend is worth ten thousand relatives.",
        "author": "Euripides",
        "tags": [
        "Friendship"
        ],
        "authorSlug": "euripides",
        "length": 49
    }],
    setQuotes: (quotes: React.SetStateAction<QuoteType[] | null>) => {}
})

function QuoteContextProvider({children}:QuoteContextProviderType) {
    const [ quotes, setQuotes] = useState<QuoteType[] | null>(null);

    console.log("States:: ",quotes)

    return(
        <QuoteContext.Provider value={{quotes, setQuotes}}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContextProvider;