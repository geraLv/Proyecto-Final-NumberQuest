import React from "react";

const Layaut = (props) => {
  return (
    <div className="px-14 py-5 justify-items-center bg-slate-100">
      <section className="space-y-8 py-8 shadow-black shadow-md flex-col bg-gray-300 rounded-xl w-full mx-auto px-8 ">
        {props.children}
      </section>
    </div>
  );
};

export default Layaut;
