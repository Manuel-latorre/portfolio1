import React from 'react'
import './Tecnologias.css'


const Tecnologias = () => {
  return (
    <div>
      <p className='misProyectos'>Tecnologias</p>
      <div className='cube'>
        <div>
          <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
      </div>
    </div>
  )
}

export default Tecnologias