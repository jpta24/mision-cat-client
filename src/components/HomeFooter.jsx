import React from 'react'

const HomeFooter = () => {
  // Breakign the url was necessary to react-snap build working.
  // It was throwing error becuase of the ? in the url.
  const symbol = "?"
  const partOne = "https://www.google.com/maps/embed"
  const partTwo =  "pb=!1m18!1m12!1m3!1d2882.3783582300384!2d13.328847332728241!3d52.59164123803066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a853836aab9b2d%3A0x56134e301a6709c0!2sSt.%20Nikolaus!5e0!3m2!1ses!2sde!4v1677537342692!5m2!1ses!2sde"
  return (
    <div id='footer' src={`${partOne}${URL}${partTwo}`} className='bg-primary text-light d-flex flex-md-row flex-column'>
        <div className="col-md col-12 text-start mx-1 p-3">
        <iframe title="Map" src="" width="250" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="fw-bold mb-3">Misión Católica de Lengua Española en Berlín</p>
            <p>Iglesia de St. Nikolaus. <br/> Techowpromenade 35-43.<br/>  13437 Berlin-Wittenau</p>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="mt-4">Horario de Secretaría </p>
            <p>Miercoles y Viernes: <br/> 10:30 - 14:30 </p>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="my-0 mt-4">Teléfono: +49 (0)30 83210774 /  +49 (0)30 22431778 </p>
            <p> Correo Electrónico: sekretariat@mision-catolica-berlin.de</p>
            <p className="my-0 mt-4">Copyright © 2014</p>
        </div>
    </div>
  )
}

export default HomeFooter