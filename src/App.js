import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navegacion/Navbar';
import Inicio from './Componentes/Paginas/Inicio';
import Favoritos from './Componentes/Paginas/Favoritos';
import Peliculas from './Componentes/Paginas/Peliculas';
import Footer from './Componentes/Navegacion/Footer';
import Barra from './Componentes/Navegacion/Barra';
import Login from './Componentes/Login/Login';
import Regis from './Componentes/Login/Regis';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Barra/>

      <Routes>
      <Route path='/Inicio' element={<Inicio/>} />
      <Route path='/Favoritos' element={<Favoritos/>} />
      <Route path='/Peliculas' element={<Peliculas/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Regis' element={<Regis/>} />
  
      </Routes>
      <Footer/>
      </Router>
      
      



    </div>
  );
}

export default App;
