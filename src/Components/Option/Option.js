import React from "react";
import { useState } from "react";
import "./Option.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Option = ({
  option,
  correctAnswer,
  Incorrect,
  Correct,
  setIsCorrectAnswer,
}) => {
  const [countCorrect, steCountCorrect] = Correct;
  const [countIncorrect, steCountIncorrect] = Incorrect;
  const [answer, setAnswer] = useState("");
  const [icons, setIcons] = useState(true);
  const isCorrect = () => {
    if (option === correctAnswer) {
      setAnswer(true);
      setIcons(true);
      steCountCorrect(countCorrect + 1);
      toast.success("Correct Answer", { autoclose: 1000 });
    } else {
      setAnswer(false);
      setIcons(false);
      steCountIncorrect(countIncorrect + 1);
      setIsCorrectAnswer(false);
      toast.error(`Incorrect Answer Correct Answer is : ${correctAnswer}`, {
        autoclose: 1000,
      });
    }
  };
  return (
    <button onClick={isCorrect}>
      <div
        className={`p-5 border-slate-600  text-slate-700 border-4 md:h-28 md:w-3/4 rounded-2xl  mx-auto hover:shadow-lg ${
          answer === true ? "correct" : ""
        } ${answer === false ? "in-correct" : ""}`}
      >
        <h2 className="text-xl font-medium">
          {" "}
          <span className="text-slate-300 mx-2">
            {icons ? (
              <FontAwesomeIcon
                icon={answer === true ? faCheckSquare : faSquare}
              />
            ) : (
              <FontAwesomeIcon
                icon={answer === false ? faXmarkSquare : faSquare}
              />
            )}
          </span>
          {option}
        </h2>
      </div>
    </button>
  );
};

export default Option;
