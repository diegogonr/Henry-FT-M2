import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import { useState, useEffect } from 'react';
import Characters from './components/Characters';


function App() {
  const [show, setShow] = useState ({
    contador: true,
    characters:true
  })

  const toggle=(event)=>{
    setShow ({
      ...show, 
      [event.target.name]: !show[event.target.name]  // !show.contador
    })
  }

 
  return (
    <div className="App">
      <button onClick={toggle} name= 'contador'>{show.contador? 'HIDE' : 'SHOW'}</button>
      {show.contador && <Contador/> }

    <hr></hr>

      <button onClick={toggle} name= 'characters'>{show.characters? 'esconder' : 'mostrar'}</button>
      {show.characters && <Characters/>}
    </div>
  );
}

export default App;
