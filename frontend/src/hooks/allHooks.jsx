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








export function ActivitieModel({ title, activitieNumber, description, guide, nImage }) {
  const imgAct = [
      <img src="../public/img/funcion1.png" alt="Imagen 1" />,
      <img src="../public/img/funcion2.png" alt="Imagen 2" />,
      <img src="../public/img/funcion3.png" alt="Imagen 3" />,
  ];

  return (
      <>
          <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
          <p className="text-blue-gray-500 mx-6 mb-2 italic">{guide}</p>
          <h2 className="text-xl font-semibold">{activitieNumber}</h2>
          {imgAct[nImage]}
          <h3 className="text-lg">{description}</h3>
      </>
  );
}







export function InputResponse({ answer1, answer2, className }) {
  const [valueActivitie, setValueActivitie] = useState(false);

  const answers = [answer1, answer2];

  function validationResponse() {
      const response1Value = document.getElementById("response1").value;
      const response2Value = document.getElementById("response2").value;

      if (parseInt(response1Value) === answers[0] && parseInt(response2Value) === answers[1]) {
          setValueActivitie(true);
          alert("Respuesta correcta");
      } else {
          alert("Respuesta incorrecta");
      }
  }

  return (
      <div className={`${className} space-y-4`}>
          {/* Input de respuesta 1 */}
          <div className="flex space-x-2 justify-center items-center">
              <input
                  type="text"
                  id="response1"
                  placeholder="xx/-xx"
                  maxLength={5}
                  className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-xl">---</span>
              <input
                  type="text"
                  id="response2"
                  placeholder="xx/-xx"
                  maxLength={5}
                  className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
          </div>

          <div className="flex justify-center mt-4">
              <button
                  onClick={validationResponse}
                  className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                  Responder
              </button>
          </div>
      </div>
  );
}









export function InputCoso () {

  return(
    <>
    
    </>
  )

}


export function Surrender({ className }) {
  function ayuda() {
      let supelhelper = 0;
      let helper = 0;
      supelhelper = helper + 1;
      console.log(supelhelper);
  }

  return (
      <div className={`${className} flex justify-between mt-6 max-w-sm mx-auto`}>
          <button
              onClick={ayuda}
              className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-200"
          >
              Ayuda
          </button>
          <button
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          >
              Siguiente Actividad
          </button>
      </div>
  );
}
