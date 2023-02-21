import React from 'react'
import { Button } from 'react-bootstrap'

function Formulario() {
  return (
    <form className='col-8 mx-auto'>
        <div >
            <label for="nombre" className='col-4'>Nombre:</label>
            <input type="text" id="nombre" name="nombre" required  className='col-8 my-1'/>
        </div>
        <div >
            <label for="correo" className='col-4'>Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" required className='col-8 my-1'/>
        </div>
        <div >
        <label for="nombre" className='col-4 '>Intenciones:</label>
            <input type="text" id="nombre" name="nombre" required  className='col-8 my-1'/>
        </div>
        <div className='d-flex align-items-start'>
            <label for="intenciones" className='col-4'>Intenciones Por:</label>
            <textarea id="intenciones" name="intenciones" placeholder="Intenciones por:" rows="4" required className='col-8 my-1'></textarea>
        </div>
        <div>
        <Button variant='primary' className='mx-2 avisos col-5 mx-auto my-2'>Enviar Intención</Button>
        </div>
        </form>

  )
}

export default Formulario