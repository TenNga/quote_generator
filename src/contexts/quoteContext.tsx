import React, { useState, createContext } from "react";

type QuoteType = {
    _id: string
    // The quotation text
    content: string
    // The full name of the author
    author: string
    // The `slug` of the quote author
    authorSlug: string
    // The length of quote (number of characters)
    length: number
    // An array of tag names for this quote
    tags: string[]
  }

  type QuoteContextType = {
    quotes: [QuoteType] | null,
    setQuotes: React.Dispatch<React.SetStateAction<[QuoteType] | null>>;
  };

  type QuoteContextProviderType = {
    children: React.ReactNode;
  };

export const QuoteContext = createContext<QuoteContextType | null>(null)

function QuoteContextProvider({children}:QuoteContextProviderType) {
    const [ quotes, setQuotes] = useState<[QuoteType] | null>(null);

    return(
        <QuoteContext.Provider value={{quotes, setQuotes}}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContextProvider;