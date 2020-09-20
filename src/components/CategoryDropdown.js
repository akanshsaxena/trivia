import React, { useState, useEffect } from "react";

export default function CategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const getData = await fetch(url);
    const data = await getData.json();
    setCategories();
    console.log(categories);
  };
  useEffect(() => {
    getCategories();
  });

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <select
        value={selectedCategory}
        name="selectedCategory"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
