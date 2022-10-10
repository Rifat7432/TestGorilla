import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizes = useLoaderData()
    const {data} = quizes
    const {name,questions} = data;
    const [countCorrect,steCountCorrect] = useState(0)
    const [countIncorrect,steCountIncorrect] = useState(0)
    return (
        <div className=' bg-slate-700 text-slate-400 '>
            <div>
                <h3 className='text-5xl font-bold'>Interview of {name}</h3>
            </div>
            <div>
                {
                    questions.map(OneQuestion => <Quiz OneQuestion={OneQuestion} key={OneQuestion.id} Correct={[countCorrect,steCountCorrect]} Incorrect={[countIncorrect,steCountIncorrect]}></Quiz>)
                }
            </div>
            
        </div>
    );
};

export default Quizs;