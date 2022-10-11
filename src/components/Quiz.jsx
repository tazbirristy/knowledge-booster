import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const quiz=useLoaderData();
    const quizQuestions= quiz.data.questions;
    return (
        <div>
            <h3 className='my-10 text-purple-700 md:text-3xl font-medium '>Take your test: {quiz.data.name}</h3>
            <div>
                {
                    quizQuestions.map((qs, index)=><QuizDetails
                    key={qs.id}
                    qs={qs}
                    index={index}
                    ></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;