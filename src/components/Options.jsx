import React from 'react';

const Options = ({option, index}) => {
    return (
        <div className='text-centre bg-purple-200 p-2 m-2'>
            <button>{index+1}. {option}</button>
        </div>
    );
};

export default Options;