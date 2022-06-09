
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Inicio from "./components/Inicio";
import Shop from "./components/Shop";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import NavBarExample from "./estilos/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<NavBarExample/>}>
          <Route index element = {<Inicio/>}/>
          <Route path= 'Shop' element = {<Shop/>}/>
          <Route path= 'Servicios' element = {<Servicios/>}/>
          <Route path= 'Contacto' element = {<Contacto/>}/>
          <Route path='*' element= {<Navigate replace to= "/"/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
