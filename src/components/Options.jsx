import React from 'react';

const Options = ({option, index, handleCorrect}) => {
    return (
        <div className='text-centre bg-purple-200 hover:bg-purple-400 p-2 m-2'>
            <button onClick={()=>handleCorrect(option)}>{index+1}. {option}</button>
        </div>
    );
};

export default Options;