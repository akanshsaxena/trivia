import React, { useState } from "react";
// import DisplayQuestion from "./DisplayQuestion.js";

export default function ShowQuestions(props) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const array = props.data;
  const handleClick = (event) => {
    event.preventDefault();
    setIndex(index + 1);
  };

  let answers = [
    ...array[index].incorrect_answers,
    array[index].correct_answer,
  ];

  const checkAnswer = (event) => {
    event.preventDefault();
    setChoice(event.target.value);
  };
  return (
    <div>
      <h3>{array[index].question}</h3>
      {answers.map((answer) => (
        <label>
          <input type="radio" name="answer" value={answer} />
          {answer}
          <br />
        </label>
      ))}
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={handleClick}> Next </button>
    </div>
  );
}
