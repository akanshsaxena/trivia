import React, { useState, useEffect } from "react";
// import DisplayQuestion from "./DisplayQuestion.js";

export default function ShowQuestions(props) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const array = props.data;

  const handleClick = (event) => {
    event.preventDefault();
    setIndex(index + 1);
    setChoice("");
    setIsCorrect(false);
    setIsWrong(false);
  };

  let answers = [
    ...array[index].incorrect_answers,
    array[index].correct_answer,
  ];

  const getValue = (event) => {
    setChoice(event.target.value);
    console.log(choice);
  };

  const checkAnswer = (event) => {
    event.preventDefault();
    if (choice === array[index].correct_answer) {
      console.log(`if ${isCorrect}`);
      setIsCorrect(true);
      setIsWrong(false);
      setCorrectAnswer(correctAnswer + 1);
    } else {
      console.log(`else ${isCorrect}`);
      setIsCorrect(false);
      setIsWrong(true);
    }
  };

  const handleFinish = (event) => {
    event.preventDefault();
    setIsFinished(true);
  };
  return (
    <div className="question-section">
      <h3 className="question">{array[index].question}</h3>
      {answers.map((answer) => (
        <label className="label">
          <input
            type="radio"
            name="answer"
            value={answer}
            checked={choice === answer}
            onChange={getValue}
          />
          {answer}
          <br />
        </label>
      ))}
      <div className="container">
        <div className="buttons">
          <button className="btn-1" onClick={checkAnswer}>
            Submit
          </button>
          {index < array.length - 1 && (
            <button className="btn-1" onClick={handleClick}>
              Next
            </button>
          )}
          {index === array.length - 1 && (
            <button className="btn-1" onClick={handleFinish}>
              Finish
            </button>
          )}
        </div>
        {isCorrect && <p id="correct">CORRECT</p>}
        {isWrong && <p id="incorrect">INCORRECT</p>}
        {isFinished && (
          <p id="correctA">You got {correctAnswer} correct answers</p>
        )}
      </div>
    </div>
  );
}
