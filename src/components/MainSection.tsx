import React, { useContext, useEffect } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';
import { useQueryQuote } from '../hooks/useQueryQuote';
import { QuoteContextType, QuoteType } from '../types';

function MainSection () {
    const { quotes, setQuotes }  = useContext(QuoteContext);

    const { isLoading, error, data } = useQueryQuote();

    setQuotes((prev) => {
        if(prev) {
            return [...prev, data?.data[0]]
        }
        return data?.data;
    })

    console.log("QUOTES:: ",quotes)

    const renderQuote = quotes?.map(quote => {
        return(
            <div>
                <h1>{quote.author}</h1>
                <p>{quote.content}</p>
            </div>
        )
    })

    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
            {isLoading? <h4>Loading...</h4> : renderQuote}
        </div>
    )
};

export default MainSection;