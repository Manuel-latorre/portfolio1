import React from 'react'
import './Titulos.css'
import henry from './assets/certifHenry.png'
import coderWeb from './assets/certifCoderWeb.png'
import coderJs from './assets/certifJavascript.png'
import 'atropos/css'
import Atropos from 'atropos/react';

const Titulos = () => {
  return (
    <div id='titulos'>

    
    <div className='allTtiulos'>
      <p className='titleCertificados'>Mis Certificados</p>
    <div className='sectionTitulos'>
      <Atropos>
        <div className='boxCard'>
            <img className='certificado' src={henry} alt="certificado henry" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Full Stack Web Developer</p>
            <p>Marzo 2023 - Julio 2023</p>
        </div>
      </Atropos>
      <Atropos>
        <div className='boxCard'>
            <img className='certificado' src={coderWeb} alt="certificado desarrollo web" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Desarrollo Web</p>
            <p>Marzo 2022 - Junio 2022</p>
        </div>
      </Atropos>
      <Atropos>
        <div className='boxCard'>
            <img className='certificado' src={coderJs} alt="certificado Js" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Javascript</p>
            <p>Julio 2022 - Septiembre 2022</p>
        </div>
      </Atropos>
    </div>
    </div>
    



    <div className='allTtiulosFooter'>
      <p style={{fontSize: 40, fontWeight: 'bold', textAlign:'center', color: 'white' }}>Mis Certificados</p>
    <div className='sectionTitulos'>
      
        <div className='boxCard'>
            <img className='certificado' src={henry} alt="certificado henry" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Full Stack Web Developer</p>
            <p>Marzo 2023 - Julio 2023</p>
        </div>
      
      
        <div className='boxCard'>
            <img className='certificado' src={coderWeb} alt="certificado desarrollo web" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Desarrollo Web</p>
            <p>Marzo 2022 - Junio 2022</p>
        </div>
      
      
        <div className='boxCard'>
            <img className='certificado' src={coderJs} alt="certificado Js" />
            <p style={{fontWeight:'bolder', fontSize: 20}}>Certificado Javascript</p>
            <p>Julio 2022 - Septiembre 2022</p>
        </div>
      
    </div>
    </div>
    </div>
  )
}

export default Titulos