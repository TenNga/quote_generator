export type QuoteType = {
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

  export type QuoteContextType = {
    quotes: QuoteType[] | null,
    setQuotes: React.Dispatch<React.SetStateAction<QuoteType[] | null>>,
  };

  export type QuoteContextProviderType = {
    children: React.ReactNode;
  };