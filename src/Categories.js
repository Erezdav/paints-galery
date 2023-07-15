// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className="filter-btn"
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

import React, { useState } from "react";
import styled from "styled-components";

const Categories = ({ categories, filterItems }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Toggle off if same category clicked again
    } else {
      setSelectedCategory(category);
      filterItems(category);
    }
  };

  return (
    <Wrapper>
      <div className="box-container">
        <h3>טכניקות ציור</h3>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .box-container {
    text-align: center;
    padding: 1rem;
    background-color: #f3f3f3;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h3 {
    text-transform: none;
    color: #333;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .categories {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .filter-btn {
    background: transparent;
    border: none;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.375rem 0.75rem;
    color: #333;
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
  }

  .filter-btn.active {
    background-color: var(--clr-gold);
    color: var(--clr-white);
  }

  .filter-btn:hover {
    background-color: var(--clr-gold);
    color: var(--clr-white);
  }
`;

export default Categories;
