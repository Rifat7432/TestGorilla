import React from 'react';
import { useState } from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash,faCheckSquare } from "@fortawesome/free-solid-svg-icons";


const Quiz = ({OneQuestion,Correct,Incorrect}) => {
    const [isCorrectAnswer,setIsCorrectAnswer] = useState(true)
    const {question,options,correctAnswer} = OneQuestion;
    const showCorrectAnswer = () =>{
        setIsCorrectAnswer(!isCorrectAnswer)
    } 
        return (
        <div className='w-3/5 mx-auto bg-slate-200 border-current my-16 p-8 hover:shadow-lg border-2 rounded-2xl '>
            <div className='text-2xl font-semibold relative'>
                <button
              className="eye-button xl:pr-5 pr-9 transition duration-200 ease-in "
              onClick={showCorrectAnswer}
            >
              <FontAwesomeIcon icon={isCorrectAnswer ? faEyeSlash : faEye} />
            </button>
                <p className='mt-5'>{question}</p>
            </div>
            <div className='grid grid-cols-1 gap-5 my-10'>
               {
                options.map((option,idX) => <Option correctAnswer={correctAnswer} option={option} Correct={Correct} key={idX} Incorrect={Incorrect} setIsCorrectAnswer={setIsCorrectAnswer}></Option>)
               }
            </div>
            <div className={`mt-5  rounded-2xl  mx-auto correct p-10  border-4 h-28 w-2/3 ${isCorrectAnswer ? 'hidden' : 'block'}`}>
            <h2 className='text-xl font-medium'> <span className='text-slate-300 mx-2'>
                
                <FontAwesomeIcon 
                icon={ faCheckSquare }
                />
                
                </span> 
                <span className='mx-1'>Correct answer : </span>
                 {correctAnswer}</h2>
            </div>
        </div>
    );
};

export default Quiz;