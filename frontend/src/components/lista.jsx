import React from "react";

const Dropdown = () => {
  return (
    <div className=" inline-block text-left">
      <div className="">
        <select className="bg-gray-300 py-2 block w-full mt-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500">
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;