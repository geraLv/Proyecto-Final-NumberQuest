import React, { useEffect, useState } from "react";

const MostrarUsuarios = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/api/users"),
      then((response) => response.json()).then((response) =>
        setUsers(response)
      );
    {
      users;
    }
  }, []);
  return (
    <div>
      <h1>"hola"</h1>
    </div>
  );
};

export default MostrarUsuarios;
