import React from 'react'

export const categories = [
  "Всі",
  "Звичайна",
  "Кальцоне",
  "Напої",
  "Соуси",
];
function Categories({ value, onClickCategories}) {

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={value === index ? "active" : " "}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories