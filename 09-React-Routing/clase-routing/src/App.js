import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Person from './components/Person';
function App() {
  return (
    // rutas que se usarán
    <BrowserRouter>  

      <Routes>          
        <Route path=''     element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/profile'element={<Profile/>}>
            {/* Componentes variables, rutas dinamicas
             si la ruta es /profile/john, se renderizará 
             el componente Person con el parámetro person establecido como john
            */}
            <Route path=':person' element={<Person/>}/>     
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
