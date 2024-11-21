import React from "react";

const Layaut = (props) => {
  return (
    <div className=" flex px-14 py-5 bg-gray-100">
      <section className="flex space-y-8 flex-col px-8 py-8 shadow-black shadow-md bg-light rounded-xl w-sceen ">
        {props.children}
      </section>
    </div>
  );
};

export default Layaut;
