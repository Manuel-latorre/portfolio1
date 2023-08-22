import React from 'react'
import './Inicio.css'
import perfil from './assets/fotoPerfil5.png'


const Inicio = () => {
  return (
    <div className='allInicio'>
      
        <div className='inicio'>
            <div className='divTexto'>
                <h1>Manuel Latorre</h1>
                <h5>Fullstack Developer</h5>
                <p className='text'>Cuento con experiencia desarrollando Apps y páginas web en el stack PERN(PostgreSQL, Express, React y Node js). <br /> Trabajo con la metodologia agil SCRUM, tanto en proyectos personales como grupales. </p>
            </div>
            <div className='fotoPerfil'>
                <img  src={perfil} alt="perfil" />
            </div>   
        </div>
    </div>

  )
}

export default Inicio