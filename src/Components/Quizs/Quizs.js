import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Quiz from "../Quiz/Quiz";

const Quizs = () => {
  const quizes = useLoaderData();
  console.log(quizes)
  const { data,status } = quizes;
  const { name, questions } = data;
  const [countCorrect, steCountCorrect] = useState(0);
  const [countIncorrect, steCountIncorrect] = useState(0);
  return (
    <div>
      {status ? (
        <div>
          <div>
            <h3 className="text-5xl font-bold">Interview of {name}</h3>
          </div>
          <div>
            {
            questions.map((OneQuestion) => (
              <Quiz
                OneQuestion={OneQuestion}
                key={OneQuestion.id}
                Correct={[countCorrect, steCountCorrect]}
                Incorrect={[countIncorrect, steCountIncorrect]}
              ></Quiz>
            ))}
          </div>
        </div>
      ) : (
        <ErrorPage></ErrorPage>
      )}
    </div>
  );
};

export default Quizs;
