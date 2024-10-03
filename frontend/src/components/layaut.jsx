import React from "react";

const Layaut = (props) => {
  return (
    <div className=" flex py-5 px-10 bg-slate-900">
      <section className="flex space-y-8 flex-col px-8 py-8 shadow-black shadow-md bg-gray-200 rounded-xl w-full ">
        {props.children}
      </section>
    </div>
  );
};

export default Layaut;
