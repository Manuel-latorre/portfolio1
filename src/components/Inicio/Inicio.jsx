import React from 'react'
import './Inicio.css'
import perfil from './assets/fotoPerfil5.png'
import cv from './assets/Manuel-Latorre-Fullstack.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Inicio = () => {
  return (
    <div id='sobreMi' className='allInicio'>
      
        <div className='inicio'>
            <div className='divTexto'>
                <h1>Manuel Latorre</h1>
                <h5 style={{fontSize:28}}>Fullstack Developer</h5>
                <p className='text'>Cuento con experiencia desarrollando Apps y páginas web en el stack PERN(PostgreSQL, Express, React y Node js). <br /> Trabajo con la metodologia agil SCRUM, tanto en proyectos personales como grupales. </p>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <a className='btnContactame' href="#contacto">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      Contactame !
                                  </a>
                </div>
                <div className='sectionMedia'>
                  <div className='boxMedia'>
                    <span></span>
                    <a className='btnMedia' href={cv} download={'Manuel-Latorre-Fullstack'}>CV</a>
                  </div>
                  <div className='boxMedia'>
                    <span></span>
                    <a className='btnMedia' href="https://github.com/Manuel-latorre" target='_blank'><GitHubIcon  sx={{fontSize: 40}}/></a>
                  </div>
                  <div className='boxMedia'>
                    <span></span>
                    <a className='btnMedia' href="https://www.linkedin.com/in/manuel-latorre-936b72223/" target='_blank'><LinkedInIcon sx={{fontSize: 40}}/></a>
                  </div>
                </div>
            </div>
            <div className='fotoPerfil'>
                <img className='foto'  src={perfil} alt="perfil" />
            </div>   
        </div>
    </div>

  )
}

export default Inicio