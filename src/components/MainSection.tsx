import React, { useContext, useEffect } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';

function MainSection () {
    const quoteContext  = useContext(QuoteContext);
    const testQuote = {
        "_id": "FG1kVHjOKx",
        "content": "One loyal friend is worth ten thousand relatives.",
        "author": "Euripides",
        "tags": [
        "Friendship"
        ],
        "authorSlug": "euripides",
        "length": 49
    };
    useEffect(()=>{
        quoteContext?.setQuotes(prev => {
            return [...prev,testQuote]
    })
    },[])
    
    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
        </div>
    )
};

export default MainSection;