import logoPortfolio from './assets/ManuelLogo1.png'
import { useState } from 'react';
import './Navbar.css'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='navbar'>

        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div>
            <img className='logoPortfolio' src={logoPortfolio} alt={logoPortfolio} />
        </div>
        <div className={`nav_items ${isOpen && 'open'}`}>
            <a href="">Incio</a>
            <a href="">Sobre mi</a>
            <a href="">Proyectos</a>
            <a href="">Tecnologias</a>
            <a href="">Titulos</a>
            <a href="">Contacto</a>
        </div>
    </nav>
  );
}

export default NavBar;