import React, { useContext, useEffect } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';

function MainSection () {
    const { quotes, setQuotes }  = useContext(QuoteContext);

    useEffect(()=>{
        console.log("quotes:: ",quotes)
    },[])
    
    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
        </div>
    )
};

export default MainSection;