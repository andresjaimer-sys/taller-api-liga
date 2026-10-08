import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./style.css";

function LigaAlemana() {

  const { name } = useParams();

  const [equipo, setEquipo] = useState(null);

  useEffect(() => {

    fetch("https://api.openligadb.de/getbltable/bl1/2025")
      .then(response => response.json())
      .then(data => {

        const nombre = decodeURIComponent(name);

        const encontrado = data.find(
          equipo =>
            equipo.teamName.toLowerCase() === nombre.toLowerCase()
        );

        setEquipo(encontrado);

      })
      .catch(error => console.error("Error:", error));

  }, [name]);


  if (!equipo) {
    return <p>Cargando...</p>;
  }


  return (
    <div className="detalle-equipo">

      <h1>{equipo.teamName}</h1>

      <p>
        <strong>Puntos:</strong> {equipo.points}
      </p>

      <p>
        <strong>Partidos:</strong> {equipo.matches}
      </p>

      <p>
        <strong>Victorias:</strong> {equipo.won}
      </p>

      <p>
        <strong>Empates:</strong> {equipo.draw}
      </p>

      <p>
        <strong>Derrotas:</strong> {equipo.lost}
      </p>

      <p>
        <strong>Goles:</strong> {equipo.goals}
      </p>

      <p>
        <strong>Diferencia de goles:</strong> {equipo.goalDiff}
      </p>

    </div>
  );
}

export default LigaAlemana;