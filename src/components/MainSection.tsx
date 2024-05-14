import React, { useContext } from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';
import { QuoteContext } from '../contexts/quoteContext';

function MainSection () {
    const quotes  = useContext(QuoteContext);
    console.log("QUOTE: ",quotes)
    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
        </div>
    )
};

export default MainSection;