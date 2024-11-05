import React from "react";

export function InputEdit({ value, onChange }) {
  return (
    <div>
      <h1>Hola</h1>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
