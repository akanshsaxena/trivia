import React, { useState } from "react";

export default function Dropdown(props) {
  const categories = props.option;
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    props.parentCallback(event.target.value);
    setSelectedCategory(event.target.value);
  };

  return (
    <fieldset className="dropdown">
      <label htmlFor="selectedCategory">
        <select
          value={selectedCategory}
          name="selectedCategory"
          onChange={handleChange}
          class="select"
        >
          <option key="0" value="select">
            Select {props.text}
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
    </fieldset>
  );
}
