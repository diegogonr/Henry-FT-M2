import React from "react";
import Botones from "./Botones";

let studentName = "";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  studentName = "Diego Gonzales"
  return(
    <div> 
      <h1>06 Ejercicio 1</h1>
      <h3>{studentName}</h3>
      <ul>
        {
          techSkills.map (skills  =>{
            return(
              <>
                <li>{skills}</li>
              </>
            )
          })

        }
      </ul>

      <Botones alerts={alerts} />

    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
