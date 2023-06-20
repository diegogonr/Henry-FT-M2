import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import { useState, useEffect } from "react";   //HOOK DE ESTADOS, ciclo de vida

export default function Zoo() {
  /* Escribe acá tu código */
const [zoo, setZoo] = React.useState({
  zooName: "",
  animals : [],
  species: [],
  allAnimals : []
})

React.useEffect(()=>{
  fetch('http://localhost:3001/zoo')
  .then((res) => res.json())
  .then((data) =>
     setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
     })
  )
  .catch((error) => console.log(error));


},[])                         //primer parametro: Callback, segundo: array de dependencias



const handleInputChange = (event) => {
  setZoo( (prevState) => ({                 //solo modifica la varibale zooName lo demás lo deja sin cambios
    ...prevState,zooName: event.target.value }));
}


const handleSpecies = (event) => {
  let especieFiltro = event.target.value;
  let animalFiltro = zoo.allAnimals.filter((animales) => animales.specie == especieFiltro);

  console.log(animalFiltro)
  setZoo( (prevState) => ({                 //solo modifica la varibale zooName lo demás lo deja sin cambios
    ...prevState, animals: animalFiltro }));
}


const handleAllSpecies = () => {
  setZoo( (prevState) => ({                 //solo modifica la varibale zooName lo demás lo deja sin cambios
    ...prevState, animals: zoo.allAnimals }));
}

  return (
    <div>
      <label>"Zoo Name: "</label>
      <input  value={zoo.zooName} onChange={handleInputChange}/>
      <h1>{zoo.zooName}</h1>

      <Species 
          species={zoo.species} 
          handleSpecies={handleSpecies}
          handleAllSpecies={handleAllSpecies}
      /> 
      <Animals  
          animals={zoo.animals}
      />

    </div>
  );
}
