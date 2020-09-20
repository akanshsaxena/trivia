import React from "react";

export default function DisplayQuestion(props) {
  const array = props.question;
  console.log(`array ${props.question}`);
  //   const answers = [array.incorrect_answers, array.correct_answer];
  return (
    <div>
      {/* <h3>{array.question}</h3>
      {answers.map((answer) => (
        <p>{answer}</p>
      ))} */}
    </div>
  );
}
