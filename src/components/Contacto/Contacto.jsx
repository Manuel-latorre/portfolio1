import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css'
import Swal from 'sweetalert2'

const Contacto = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_023xrkm', 'template_ftvcxea', form.current, '_CdUnxT0WVgK2pTat')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contacto' className='contacto'>
        <p className='contactame'>Contactame !</p>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='inputs'>
              <input type="text" name="user_name" required='required'/>
              <span>Nombre</span>
            </div>
            <div className='inputs'>
              <input type="email" name="user_email" required='required' />
                <span>Email</span>
            </div>
            <div className='inputs'>
              <textarea className='textArea' placeholder='Escriba su mensaje ...' name="message" required='required'/>
            </div>
            <div className='divBtnSend'>
              <input className='btnSend' type="submit" value="Send" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contacto