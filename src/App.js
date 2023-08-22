import './App.css';
import NavBar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Titulos from './components/Titulos/Titulos';
import Proyectos from './components/Proyectos/Proyectos';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Contacto from './components/Contacto/Contacto';
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Inicio/>
      <Proyectos/>
      <Titulos/>
      <Tecnologias/>
      <Contacto/>
    </div>
  );
}

export default App;
