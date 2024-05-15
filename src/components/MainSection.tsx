import React, { useContext } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';
import Card from './shared/Card';

function MainSection () {
    const { quotes}  = useContext(QuoteContext);
    console.log("QUOTES:: ",quotes)

    const renderQuote = quotes?.map(quote => {
        return(
            <Card key={quote._id}>
                <h1>{quote.author}</h1>
                <p>{quote.content}</p>
            </Card>
        )
    })

    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
            <div className="cards-container flex mx-20 flex-wrap">
                {renderQuote}
            </div>
        </div>
    )
};

export default MainSection;