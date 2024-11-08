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






export function InputResponse({answer1, answer2}) {

  const [valueActivitie, setValueActivitie] = useState(false);
  const [response, setResponse] = useState(""); 

  const answers = [answer1, answer2];

  function validationResponse() {
    const response1Value = document.getElementById("response1").value;
    const response2Value = document.getElementById("response2").value;

    console.log(answers[0]);
    console.log(answers[1]);
    console.log(response1Value);
    console.log(response2Value);

    if (parseInt(response1Value) === answers[0] && parseInt(response2Value) === answers[1]) {
      setValueActivitie(true);
      alert("Respuesta correcta");
    } else {
      alert("Respuesta incorrecta");
      return(
        {Surrender}
      )
    }
  }
  console.log(valueActivitie);
  return (
    <>
      <div>
        <input
          type="text"
          id="response1"
          placeholder="xx/-xx"
          maxLength={5}
        />
        <span>---</span>
        <input
          type="text"
          id="response2"
          placeholder="xx/-xx"
          maxLength={5}
        />
      </div>
      <button onClick={validationResponse}>Responder </button>
      <div>
      </div>
    </>
  );
}








export function InputCoso () {

  return(
    <>
    
    </>
  )

}


export function Surrender () {

  const [mondongo, setMondongo] = useState()

  function ayuda () {
    URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    window.open(URL, "_blank");
  }


  

  return( <div>    
    
    <button onClick={ayuda}>Hola capo</button>
    <button>Siguiente Actividad</button>

    </div>

  )

}