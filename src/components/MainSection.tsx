import React from 'react';
import PrimaryImage from './PrimaryImage';
import TagInput from './form/TagInput';

function MainSection () {
    return(
        <div className='flex flex-col items-center justify-center'>
            <TagInput />
            <PrimaryImage />
        </div>
    )
};

export default MainSection;