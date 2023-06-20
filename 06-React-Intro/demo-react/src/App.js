import './App.css';
import Title from './components/Title';
import Alumnos from './components/Alumnos';
import Boton_funcional from './components/Boton_funcional';
import Boton_clase from './components/Boton_clase';

function App() {
  const alumnosList =[
    {name:"diego", edad: 123},
    {name:"davud", edad: 75},
    {name:"gre", edad: 54},
    {name:"lope", edad: 645},
    {name:"base", edad: 1234}
  ]

  return (
    <div>
      <Title/> 
      {/* se paasan propiedades, los numeros y variables entrellaves  */}
      <Alumnos alumnos={alumnosList} total={400}/>  
      <Boton_funcional texto= "esto es un boton"/>
      <Boton_clase texto= "esto es un boton con clase"/>

    </div>
  );
}

export default App;
