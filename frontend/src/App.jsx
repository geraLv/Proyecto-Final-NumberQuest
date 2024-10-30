import React, { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./styles/index.css";
import { UserContexto } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())

      .then((res) => console.log(res))
      .then(() => setLoading(true));
  }, []);

  return loading ? (
    <UserContexto.Provider value={user}>
      <AppRouter />
    </UserContexto.Provider>
  ) : (
    <h1>Cargando</h1>
  );
}

export default App;
