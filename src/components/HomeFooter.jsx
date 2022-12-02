import React from 'react'

const HomeFooter = () => {
  return (
    <div id='footer' className='bg-success text-bg-light d-flex'>
        <div className="col-4 text-start mx-3 p-3">
            <p className="fw-bold mb-3">Misión Católica de Lengua Española en Berlín</p>
            <p>Iglesia de St. Nikolaus. <br/> Techowpromenade 35-43.<br/>  13437 Berlin-Wittenau</p>
        </div>
        <div className="col-3 text-start mx-3 p-3">
            <p className="mt-4">Horario de Secretaría </p>
            <p>Miercoles y Viernes: <br/> 10:30 - 14:30 </p>
        </div>
        <div className="col-4 text-start mx-3 p-3">
            <p className="my-0 mt-4">Teléfono: +49 (0)30 83210774 /  +49 (0)30 22431778 </p>
            <p> Correo Electrónico: sekretariat@mision-catolica-berlin.de</p>
            <p className="my-0 mt-4">Copyright © 2014</p>
        </div>
    </div>
  )
}

export default HomeFooter