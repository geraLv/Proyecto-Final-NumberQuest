import React from "react";

const Dropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <select className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500">
          <h1></h1>
          <option value="1">Opción 1</option>
          <h1></h1>
          <option value="2">Opción 2</option>
          <h1></h1>
          <option value="3">Opción 3</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
