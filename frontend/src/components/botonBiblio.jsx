import React from 'react';

const BotonPantallaCompleta = ({ texto, onClick }) => {
  return (
    <div className='container my-2'>  
    <button
      onClick={onClick}
      className="flex justify-between items-center my-2 text-start px-5 w-full h-14 bg-transparent text-gray-900 font-semibold text-lg rounded-lg shadow-lg transition-all transform focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-gray-800 mr-7 hover:h-16 hover:text-black"
    >
      {texto}
    <svg className='text-lime-900  w-10 h-6' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg>
    </button>
    </div>
  );
};

export default BotonPantallaCompleta;
