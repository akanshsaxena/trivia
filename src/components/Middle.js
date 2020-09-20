import React, { useState } from "react";
import questions from "../questions.js";
import Dropdown from "./Dropdown.js";
import ShowQuestions from "./ShowQuestions.js";
import categories from "./category.json";
import difficulty from "./difficulty.json";
import count from "./count.json";

export default function Middle() {
  const [getCategory, setGetCategory] = useState("");
  const [getDifficulty, setGetDifficulty] = useState("");
  const [getCount, setGetCount] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  /* ----------------------------------------------------- */

  const categoryCallbackFunction = (childData) => {
    setGetCategory(childData);
  };
  const difficultyCallbackFunction = (childData) => {
    setGetDifficulty(childData);
  };
  const countCallbackFunction = (childData) => {
    setGetCount(childData);
  };

  /* ----------------------------------------------------- */
  const getChoices = async (event) => {
    event.preventDefault();
    setJsonData(await questions(getCategory, getDifficulty, getCount));
    setIsSubmit(true);
  };
  // let showQuestion = !isSubmit ? " " : <ShowQuestions data={jsonData} />;
  return (
    <div>
      <div className="search">
        <Dropdown
          parentCallback={categoryCallbackFunction}
          text="a category"
          option={categories}
        />
        <Dropdown
          parentCallback={difficultyCallbackFunction}
          text="difficulty level"
          option={difficulty}
        />
        <Dropdown
          parentCallback={countCallbackFunction}
          text="number of questions"
          option={count}
        />
      </div>
      <button className="btn" type="submit" onClick={getChoices}>
        Start!
      </button>
      {isSubmit && <ShowQuestions data={jsonData} />}
    </div>
  );
}
