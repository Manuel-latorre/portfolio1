import React from 'react'
import logo from '../Navbar/assets/ManuelLogo1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

const Footer = () => {
  return (

        <div className='footer'>
            <div style={{display:'flex'}}>
                <a className='btnMediaFooter' href="https://www.linkedin.com/in/manuel-latorre-936b72223/" target='_blank'><LinkedInIcon sx={{fontSize: 40}}/></a>
                <a className='btnMediaFooter' href="https://github.com/Manuel-latorre" target='_blank'><GitHubIcon  sx={{fontSize: 40}}/></a>
            </div>
            <div>
                <img className='logoFooter' src={logo} alt="" />
            </div>
            <div className='sectionEmail'>
                <EmailIcon className='emailIcon'/>
                <p className='email'>manuel.latorre11@gmail.com</p>
            </div>
        </div>
      )

}

export default Footer