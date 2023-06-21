import React, { useEffect, useState } from "react";

const Dropdown = ({handleFilterChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toppings = ["New Prototype", "Run Prototype", "Visit"];

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    const checkedArray = toppings.filter((topping, index) => updatedCheckedState[index]);
    handleFilterChange(checkedArray);

  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="dropdown-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          Filter
        </button>
      </div>
      {isOpen && (
        <ul className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-menu">
          {toppings.map((topping, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    <input
                      type="checkbox"
                      className="mr-[10px]"
                      id={`custom-checkbox-${index}`}
                      name={topping.name}
                      value={topping.name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {topping}
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;