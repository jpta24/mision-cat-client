import React from 'react';
import HomeFooter from '../components/HomeFooter';

const ContactoPage = () => {
	return (
		<div>
			<div className='mx-auto col-10' id='contacto'>
				<h1 className='my-4 text-primary'>Contacto</h1>
				<div className='col-md-3 col-10 mx-auto text-start p-3'>
					<h5 className='fw-bold mb-3'>
						Misión Católica de Lengua Española en Berlín
					</h5>
					<h5>
						Iglesia de St. Nikolaus. <br /> Techowpromenade 35-43.
						<br /> 13437 Berlin-Wittenau
					</h5>
				</div>
				<div className='col-md-3 col-10 mx-auto text-start p-3'>
					<p className=''>Horario de Secretaría </p>
					<p>
						Miercoles y Viernes: <br /> 10:30 - 14:30{' '}
					</p>
				</div>
				<div className='col-md-3 col-10 mx-auto text-start p-3'>
					<p className='my-0'>Teléfonos: </p>
					<p className='my-0'>
						+49 (0)30 83210774 / +49 (0)30 22431778{' '}
					</p>
					<p className='my-0'> Correos Electrónicos:</p>
					<p className='my-0 '>
						{' '}
						sekretariat@mision-catolica-berlin.de
					</p>
					<p className='my-0 '> info@mision-catolica-berlin.de</p>
				</div>
			</div>

			<hr className='col-10 mx-auto' />
			<div className='mx-auto' id='donaciones'>
				<h1 className='my-4 text-primary'>Donaciones</h1>
				<div className='col-md-3 col-10 mx-auto text-start p-3'>
					<p className='my-0'>
						Misión Católica de Lengua Española en Berlín
					</p>
					<p className='my-0'>
						{' '}
						Cuenta bancaria (Bankverbindung): Spanische Kath.
						Mission
					</p>
					<p className='my-0'>
						{' '}
						Pax-Bank DE87 3706 0193 6002 4830 07
					</p>
				</div>
			</div>

			<hr className='col-10 mx-auto' />
			<div className='mx-auto' id='formularios'>
				<h1 className='my-4 text-primary'>Formularios</h1>
				<h4>
					<a
						href='/confirmacion-jovenes-fomulario.pdf'
						download='confirmacion-jovenes-fomulario.pdf'
					>
						Descargar Formulario para la Confirmación
					</a>
				</h4>
				<h4>
					<a
						href='/Formulario-Comunion-2024.pdf'
						download='Formulario-Comunion-2024.pdf'
					>
						Descargar Formulario para la Primera Comunión
					</a>
				</h4>
				<h4 className='my-0'>
					<a
						href='/Proteccion-de-Datos.pdf'
						download='Proteccion-de-Datos.pdf'
					>
						Descargar la Política de Protección de Datos
					</a>
				</h4>
				<h4 className='my-0'>
					<a
						href='/Impresion-Aviso-Legal.pdf'
						download='Impresion-Aviso-Legal.pdf'
					>
						Descargar la Impresión / Aviso Legal
					</a>
				</h4>
			</div>

			<hr className='col-10 mx-auto' />
			<HomeFooter />
		</div>
	);
};

export default ContactoPage;
