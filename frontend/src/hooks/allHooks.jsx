import React, { useState } from "react";





export function InputEdit({ value, onChange, selectedValue }) {
  
  function handleCheckboxChange() {
    onChange(value); 
  }

  return (
    <input
      type="checkbox"
      value={value}
      checked={selectedValue === value}  
      onChange={handleCheckboxChange}
    />
  );
}







export function Button({ selectedValue }) {
  function sendResponse() {
    if (selectedValue === "Correcto") {
      alert("La respuesta es correcta");
    } else {
      alert("La respuesta es incorrecta. Intenta de nuevo.");
    }
  }

  return (
    <button onClick={sendResponse}>
      Responder :v
    </button>
  );
}








export function XD ({title, activitieNumber, description, guide}) {

  const imgAct = [
    <img src="../public/img/funcion1.png" />,
    <img src="" />,
    <img src="" />
  ]

  return(
  <>
    <h1 className="text-3xl" >  <b>{title}</b></h1>
    <p className="text-blue-gray-500 mx-6 mb-2 " >  *{guide}*</p>
    <h2 className="" >{activitieNumber}</h2>
    {imgAct[0]}
    <h3 className="" >    {description}</h3>
  </>
  )
}

export function InputResponse ({}){

  return(
    <>
    <input onChange={e => setMondongo(e.target.value)} />
  </>
  )
}








export function InputCoso () {

  return(
    <>
    
    </>
  )

}


export function Surrender () {

  const [mondongo, setMondongo] = useState()

  return(
    <button onClick={meRindo}></button>
  )

}