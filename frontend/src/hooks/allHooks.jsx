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







export function CheckResponse({ selectedValue }) {

  let imgRes = [
    <img
    style={{ width: 560, height: 292 }}
    src="https://th.bing.com/th/id/OIP.k6H2Q8P1DKlgmf4tMLFwvgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3"
    alt=""
  />,
  <img
    src="https://media.licdn.com/dms/image/C5112AQEYARonHijMaQ/article-cover_image-shrink_600_2000/0/1549770046623?e=2147483647&v=beta&t=9B-KDNvL_mfs2VrOXKrsHf8T5NMG2MXAKCi5i89cXeE"
    alt=""
  />
  ]


  function sendResponse() {

    if (selectedValue === "Correcto") {
      return(
        <div>
        <p className="text-green-600">Correcto</p>
        {imgRes[0]}
        </div>
      )
    } else {
      alert("Hola capo");
    }
  }

  return (
    <button onClick={sendResponse}>
      Responder
    </button>
    

  );
}








export function ActivitieModel ({title, activitieNumber, description, guide, nImage}) {

  const imgAct = [
    <img src="../public/img/funcion1.png" />,
    <img src="../public/img/funcion2.png" />,
    <img src="../public/img/funcion3.png" />
  ]

  return(
  <>
    <h1 className="text-3xl" >  <b>{title}</b></h1>
    <p className="text-blue-gray-500 mx-6 mb-2 " >  *{guide}*</p>
    <h2 className="" >{activitieNumber}</h2>
    {imgAct[nImage]}
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

  const [actNum, setActNum] = useState()


  function ayuda () {
    let supelhelper = 0
    let helper = 0
    supelhelper = helper + 1
    console.log(supelhelper);
  } 


  

  return( 
  <div
  >    
    
    <button onClick={ayuda}> Ayuda </button>
    <button>Siguiente Actividad</button>

    </div>

  )

}