import { useState, useEffect } from "react";

function Inicio() {

  const [equipos, setEquipos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {

    fetch("https://api.openligadb.de/getbltable/bl1/2025")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEquipos(data);
      })
      .catch(error => console.error("Error:", error));

  }, []);

  const resultados = equipos.filter(equipo =>
    equipo.teamName
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <>
      <h1>Liga Alemana</h1>

      <input
        type="text"
        placeholder="Buscar equipo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {equipos.length === 0 ? (
        <p>Cargando equipos...</p>
      ) : (
        <div>

          {resultados.map((equipo) => (

            <div key={equipo.teamInfoId}>

              <h2>{equipo.teamName}</h2>

              <p>Posición: {equipo.position}</p>

              <p>Puntos: {equipo.points}</p>

            </div>

          ))}

        </div>
      )}
    </>
  );
}

export default Inicio;