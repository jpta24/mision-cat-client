import React from 'react'

const HomeFooter = () => {
  // Breakign the url was necessary to react-snap build working.
  // It was throwing error becuase of the ? in the url.
  // const symbol = "?"
  // const partOne = "https://www.google.com/maps/embed"
  // const partTwo =  "pb=!1m18!1m12!1m3!1d2882.3783582300384!2d13.328847332728241!3d52.59164123803066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a853836aab9b2d%3A0x56134e301a6709c0!2sSt.%20Nikolaus!5e0!3m2!1ses!2sde!4v1677537342692!5m2!1ses!2sde"
  return (
    <div id='footer' className='bg-primary text-light d-flex flex-md-row flex-column justify-content-center'>
        {/* <div className="col-md col-12 text-start mx-1 p-3">
        <iframe title="Map" src={`${partOne}${URL}${partTwo}`} width="250" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
        <div className="col-md-3 col-12 text-start p-3">
            <p className="fw-bold mb-3">Misión Católica de Lengua Española en Berlín</p>
            <p>Iglesia de St. Nikolaus. <br/> Techowpromenade 35-43.<br/>  13437 Berlin-Wittenau</p>
            <p className="my-0">Copyright © 2014</p>
        </div>
        <div className="col-md-2 col-12 text-start p-3">
            <p className="mt-4">Horario de Secretaría </p>
            <p>Miercoles y Viernes: <br/> 10:30 - 14:30 </p>
        </div>
        <div className="col-md-3 col-12 text-start p-3">
            <p className="my-0 mt-4">Teléfonos: </p>
            <p className="my-0">+49 (0)30 83210774 /  +49 (0)30 22431778 </p>
            <p className="my-0 mt-4"> Correos Electrónicos:</p>
            <p className="my-0 "> sekretariat@mision-catolica-berlin.de</p>
            <p className="my-0 "> info@mision-catolica-berlin.de</p>
        </div>
        <div className="col-md-4 col-12 text-start p-3">
            <p className="my-0 mt-4">Misión Católica de Lengua Española en Berlín</p>
            <p className="my-0"> Cuenta bancaria (Bankverbindung): Spanische Kath. Mission</p>
            <p className="my-0"> Pax-Bank DE87 3706 0193 6002 4830 07</p>
            <p className='my-0'><a className='footer-link' href="/Proteccion-de-Datos.pdf" download="Proteccion-de-Datos.pdf">Política de Protección de Datos</a></p>
            <p className='my-0'><a className='footer-link' href="/Impresion-Aviso-Legal.pdf" download="Impresion-Aviso-Legal.pdf">Impresión / Aviso Legal</a></p>
            
            
        </div>
    </div>
  )
}

export default HomeFooter