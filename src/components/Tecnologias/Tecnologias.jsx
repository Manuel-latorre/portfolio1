import React from 'react'
import './Tecnologias.css'
import js from '../Proyectos/assets/js.png'
import html from '../Proyectos/assets/html.png'
import css from '../Proyectos/assets/css.png'
import react from '../Proyectos/assets/reactjs.png'
import ts from '../Proyectos/assets/ts.png'
import redux from '../Proyectos/assets/redux.png'
import ex from '../Proyectos/assets/ex.png'
import sass from '../Proyectos/assets/sass.png'
import postgreSQL from '../Proyectos/assets/postgresql.png'
import node from '../Proyectos/assets/node.png'



const Tecnologias = () => {
  return (
    <div className='sectionTec'>

      <p className='titleTecnologias'>Tecnologias</p>
    
    <div className='tecnologias'>
      <div id='html' className='cube'>
        <div id='htmlTop' className='top'><img src={html}/></div>
        <div>
          <img style={{ '--i': 0 }} src={html} alt="" />
          <img style={{ '--i': 1 }} src={html} alt="" />
          <img style={{ '--i': 2 }} src={html} alt="" />
          <img style={{ '--i': 3 }} src={html} alt="" />
        </div>
      </div>
      <div id='css' className='cube'>
        <div id='cssTop' className='top'><img src={css}/></div>
        <div>
          <img style={{ '--i': 0 }} src={css} alt="" />
          <img style={{ '--i': 1 }} src={css} alt="" />
          <img style={{ '--i': 2 }} src={css} alt="" />
          <img style={{ '--i': 3 }} src={css} alt="" />
        </div>
      </div>
      <div id='sass' className='cube'>
        <div id='sassTop' className='top'><img src={sass} className='top'/></div>
        <div>
          <img style={{ '--i': 0 }} src={sass} alt="" />
          <img style={{ '--i': 1 }} src={sass} alt="" />
          <img style={{ '--i': 2 }} src={sass} alt="" />
          <img style={{ '--i': 3 }} src={sass} alt="" />
        </div>
      </div>
      <div id='js' className='cube'>
        <div id='jsTop' className='top'> <img src={js} /></div>
        <div>
          <img style={{ '--i': 0 }} src={js} alt="" />
          <img style={{ '--i': 1 }} src={js} alt="" />
          <img style={{ '--i': 2 }} src={js} alt="" />
          <img style={{ '--i': 3 }} src={js} alt="" />
        </div>
      </div>
      <div id='ts' className='cube'>
        <div id='tsTop' className='top'><img src={ts}/></div>
        <div>
          <img style={{ '--i': 0 }} src={ts} alt="" />
          <img style={{ '--i': 1 }} src={ts} alt="" />
          <img style={{ '--i': 2 }} src={ts} alt="" />
          <img style={{ '--i': 3 }} src={ts} alt="" />
        </div>
      </div>
      <div id='react' className='cube'>
        <div id='reactTop' className='top'><img src={react}/></div>
        <div>
          <img style={{ '--i': 0 }} src={react} alt="" />
          <img style={{ '--i': 1 }} src={react} alt="" />
          <img style={{ '--i': 2 }} src={react} alt="" />
          <img style={{ '--i': 3 }} src={react} alt="" />
          {/* <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span> */}
        </div>
      </div>
      <div id='redux' className='cube'>
        <div id='reduxTop' className='top'><img src={redux}/></div>
        <div>
          <img style={{ '--i': 0 }} src={redux} alt="" />
          <img style={{ '--i': 1 }} src={redux} alt="" />
          <img style={{ '--i': 2 }} src={redux} alt="" />
          <img style={{ '--i': 3 }} src={redux} alt="" />
          {/* <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span> */}
        </div>
      </div>
      <div id='ex' className='cube'>
        <div id='exTop' className='top'><img src={ex}/></div>
        <div>
          <img style={{ '--i': 0 }} src={ex} alt="" />
          <img style={{ '--i': 1 }} src={ex} alt="" />
          <img style={{ '--i': 2 }} src={ex} alt="" />
          <img style={{ '--i': 3 }} src={ex} alt="" />
          {/* <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span> */}
        </div>
      </div>
      <div id='node' className='cube'>
        <div id='nodeTop' className='top'><img src={node}/></div>
        <div>
          <img style={{ '--i': 0 }} src={node} alt="" />
          <img style={{ '--i': 1 }} src={node} alt="" />
          <img style={{ '--i': 2 }} src={node} alt="" />
          <img style={{ '--i': 3 }} src={node} alt="" />
          {/* <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span> */}
        </div>
      </div>
      <div id='postgreSQL' className='cube'>
        <div id='postgreSQLTop' className='top'> <img src={postgreSQL}/></div>
        <div>
          <img style={{ '--i': 0 }} src={postgreSQL} alt="" />
          <img style={{ '--i': 1 }} src={postgreSQL} alt="" />
          <img style={{ '--i': 2 }} src={postgreSQL} alt="" />
          <img style={{ '--i': 3 }} src={postgreSQL} alt="" />
          {/* <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span> */}
        </div>
      </div>
      <div>
      </div>
    </div>
    </div>
  )
}

export default Tecnologias