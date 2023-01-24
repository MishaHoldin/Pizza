import React from 'react'
import { categories } from './Categories'

export default function CategoriesTitle({value}) {
  return (
    <div>
      {categories.map((categoryName, index) => (
        <h2
          className="content__title"
          key={index}
        >
          {value === index ? categoryName : " "}
        </h2>
      ))}
    </div>
  );
}
