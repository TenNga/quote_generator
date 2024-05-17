import React, { useContext } from 'react';
import PrimaryImage from './PrimaryImage';
import { QuoteContext } from '../contexts/quoteContext';
import SearchInput from './form/SearchInput';
import QuoteContainer from './QuoteContainer';

function MainSection () {
    const { quotes}  = useContext(QuoteContext);

    return(
        <div className='flex flex-col items-center justify-center'>
            <SearchInput />
            {quotes? 
                <QuoteContainer quotes={quotes} /> :
                <PrimaryImage /> 
                
            }
        </div>
    )
};

export default MainSection;