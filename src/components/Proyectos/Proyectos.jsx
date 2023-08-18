import React from 'react'
import './Proyectos.css'
import radtek from './assets/radtek.png'
import cactus from './assets/tiendaCactus.png'
import wise from './assets/wise.png'
import countries from './assets/countries.png'
import 'atropos/css'
import Atropos from 'atropos/react';
import bootstrap from './assets/bootstrap.png'
import css from './assets/css.png'
import html from './assets/html.png'
import js from './assets/js.png'
import ts from './assets/ts.png'
import ex from './assets/ex.png'
import react from './assets/reactjs.png'
import materialui from './assets/materialui.png'
import postgresql from './assets/postgresql.png'
import redux from './assets/redux.png'
import android from './assets/android.png'
import sass from './assets/sass.png'
import GitHubIcon from '@mui/icons-material/GitHub';

const Proyectos = () => {
  return (
    <div>
        <p className='misProyectos'>Mis Proyectos</p>

        <div className='containerProyectos'>
            <Atropos >
                <div className='cardProyecto'>
                    
                        <div className='contentCard'>
                            <img className='imgProyecto' src={radtek} alt="" data-atropos-offset="0" />
                            <p style={{fontSize:30, fontWeight: 'bold', marginBottom: 20}}>Radtek</p>
                            <p>Se trata Ecommerce de productos Gamers con el fin de simular el flujo de un Ecommerce real</p>
                            <br />
                            <hr />
                            <br />
                            <div className='sectionIcons'>
                                <img className='icontech' src={ts} alt="Icono de Typescript" />
                                <img className='icontech' src={react} alt="Icono de ReactJs" />
                                <img className='icontech' src={css} alt="Icono de Css" />
                                <img className='icontech' src={redux} alt="Icono de Redux" />
                                <img className='icontech' src={ex} alt="Icono de Express" />
                                <img className='icontech' src={postgresql} alt="Icono de PostgreSQL" />
                                <img className='icontech' src={materialui} alt="Icono de Material UI" />
                                <img className='icontech' src={bootstrap} alt='Icono de Bootstrap' />
                            </div>
                            <div className='containerBtn'>
                                <a className='a' href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <GitHubIcon style={{marginRight: 10}} sx={{fontSize: 30}}/>
                                    Visitar
                                </a>
                            </div>
                        </div>
                    
                </div>
            </Atropos>


            <Atropos>
                <div className='cardProyecto'>
                   
                        <div className='contentCard'>
                            <img className='imgProyecto' src={wise} alt="" />
                            <p style={{fontSize:30, fontWeight: 'bold', marginBottom: 20}}>Wise Wallet</p>
                            <p>Consiste en el desarrollo de un App para controlar tus gastos e ingresos.</p>
                            <br />
                            <hr />
                            <br />
                            <div className='sectionIcons'>
                                <img className='icontech' src={ts} alt="Icono de Typescript" />
                                <img className='icontech' src={react} alt="Icono de ReactJs" />
                                <img className='icontech' src={css} alt="Icono de Css" />
                                <img className='icontech' src={redux} alt="Icono de Redux" />
                                <img className='icontech' src={ex} alt="Icono de Express" />
                                <img className='icontech' src={postgresql} alt="Icono de PostgreSQL" />
                                <img className='icontech' src={android} alt="Icono de Android" />
                            </div>
                            <div className='containerBtn'>
                                <a className='a' href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <GitHubIcon style={{marginRight: 10}} sx={{fontSize: 30}}/>
                                    Visitar
                                </a>
                            </div>
                        </div>
                    
                </div>
            </Atropos>


            <Atropos>
                <div className='cardProyecto'>
                    
                        <div className='contentCard'>
                            <img className='imgProyecto' src={countries} alt="" />
                            <p style={{fontSize:30, fontWeight: 'bold', marginBottom: 20}}>MyCountry</p>
                            <p>MyCountry es un sitio Web donde el usuario puede conocer distintos paises y sus actividades turisticas</p>
                            <br />
                            <hr />
                            <br />
                            <div className='sectionIcons'>
                                <img className='icontech' src={js} alt="Icono de Javascript" />
                                <img className='icontech' src={react} alt="Icono de ReactJs" />
                                <img className='icontech' src={css} alt="Icono de Css" />
                                <img className='icontech' src={redux} alt="Icono de Redux" />
                                <img className='icontech' src={ex} alt="Icono de Express" />
                                <img className='icontech' src={postgresql} alt="Icono de PostgreSQL" />
                                
                            </div>
                            <div className='containerBtn'>
                                <a className='a' href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <GitHubIcon style={{marginRight: 10}} sx={{fontSize: 30}}/>
                                    Visitar
                                </a>
                            </div>
                        </div>
                    
                </div>
            </Atropos>

            <Atropos>
                <div className='cardProyecto'>
                    
                        <div className='contentCard'>
                            <img className='imgProyecto' src={cactus} alt="" />
                            <p style={{fontSize:30, fontWeight: 'bold', marginBottom: 20}}>Tienda Cactus</p>
                            <p>Tienda Cactus es un E-commerce ficticio de streetwear. Proximamente me gustaria agregarle una pasarela de pagos para que sea mas real y dinamico.</p>
                            <br />
                            <hr />
                            <br />
                            <div className='sectionIcons'>
                                <img className='icontech' src={html} alt="Icono de HTML" />
                                <img className='icontech' src={css} alt="Icono de Css" />
                                <img className='icontech' src={js} alt="Icono de Javascript" />
                                <img className='icontech' src={bootstrap} alt="Icono de Bootstrap" />
                                
                            </div>
                            <div className='containerBtn'>
                                <a className='a' href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <GitHubIcon style={{marginRight: 10}} sx={{fontSize: 30}}/>
                                    Visitar
                                </a>
                            </div>
                        </div>
                    
                </div>
            </Atropos>

        </div>
    </div>
  )
}

export default Proyectos