import React, { useContext } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';

function MainSection () {
    const { quotes}  = useContext(QuoteContext);
    console.log("QUOTES:: ",quotes)

    const renderQuote = quotes?.map(quote => {
        return(
            <div key={quote._id}>
                <h1>{quote.author}</h1>
                <p>{quote.content}</p>
            </div>
        )
    })

    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
            {renderQuote}
        </div>
    )
};

export default MainSection;