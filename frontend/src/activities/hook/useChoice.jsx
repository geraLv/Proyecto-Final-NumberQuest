import React, { useState } from 'react';

const MultipleChoice = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["Berlín", "Madrid", "París", "Lisboa"]
    },
    {
      question: "¿Qué lenguaje se usa para desarrollar aplicaciones web?",
      options: ["Python", "JavaScript", "C++", "Java"]
    },
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Respuestas seleccionadas: ${selectedOptions.join(', ')}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <div key={index}>
          <h4>{q.question}</h4>
          {q.options.map((option, i) => (
            <label key={i}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Enviar respuestas</button>
    </form>
  );
};

export default MultipleChoice;

