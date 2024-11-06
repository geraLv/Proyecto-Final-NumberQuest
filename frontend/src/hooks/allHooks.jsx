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
    <p className="text-blue-gray-500" >  *{guide}*</p>
    <h2 className="Dra" >    {activitieNumber}</h2>
    <h3 className="" >    {description}</h3>
    {imgAct[0]}
  </>
  )
}










export function InputCoso () {

}


export function Surrender () {

  const [mondongo, setMondongo] = useState()

  return(
    <button onClick={meRindo}></button>
  )

}