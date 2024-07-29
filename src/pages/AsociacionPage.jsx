import React from 'react';
import HomeFooter from '../components/HomeFooter';

const AsociacionPage = () => {
	return (
		<div id='verein'>
			{' '}
			<h1 className='mt-4 text-primary'>
				Freundeskreise Katholische Mission Spanischer Sprache in Berlin
				e.V
			</h1>
			<h1 className=' text-primary'>(FKMSSB e.V)</h1>
			<h1 className=' text-primary'>
				Asociación de Amigos de la Misión Católica de Lengua Española en
				Berlín e.V
			</h1>
			<div
				id='asociacion'
				className='d-flex flex-row justify-content-center m-5'
			>
				<div className=''>
					<img
						src='/assets/fotos/verein.jpg'
						alt='Descripción de la imagen'
						width='300'
					/>
				</div>
				<div className='d-flex align-items-center  col-7 justify-content-center'>
					<h3 className='px-4 mx-auto'>
						Somos una Asociación sin fines de lucros, cuya finalidad
						es la promoción de la vida comunitaria de los creyentes
						de La Misión Católica de Lengua Española en Berlín y
						todas las demás personas interesadas. Promovemos y
						organizamos proyectos que apoyen el mantenimiento de
						nuestra Iglesia y que ayudan a nuestra congregación y a
						comunidades de nuestros países de origen.
					</h3>
				</div>
			</div>
			<hr className='col-10 mx-auto' />
			<div className='text-start col-8 mx-auto'>
				<p className='my-0'>
					<a
						className='footer-link'
						href='/Impresion-Aviso-Legal.pdf'
						download='Impresion-Aviso-Legal.pdf'
					>
						Impresión / Aviso Legal
					</a>
				</p>
				<h4 id='estatutos'>
					<a
						href='/Impresion-Aviso-Legal.pdf'
						download='Impresion-Aviso-Legal.pdf'
					>
						Descargar los Estatutos
					</a>
				</h4>
				<h4 id='estatutos'>
					<a
						href='/Impresion-Aviso-Legal.pdf'
						download='Impresion-Aviso-Legal.pdf'
					>
						Descargar la protección de Datos
					</a>
				</h4>
			</div>
			<hr className='col-10 mx-auto' />
			<div className='container'>
				<div id='actividades' className='mb-4'>
					<h3>
						Amigos de la Misión Católica de Lengua Española en
						Berlín e.V.
					</h3>
					<p className='h3'>Nuestras actividades:</p>
					<ul className='h3 col-10 mx-auto text-start list-unstyled'>
						<li>
							- Promoción de proyectos que sirvan para la
							conservación de la iglesia.
						</li>
						<li>- Organización de eventos y conmemoraciones.</li>
						<li>
							- Promoción de la vida parroquial mediante la
							organización de reuniones en los salones
							parroquiales.
						</li>
						<li>
							- Organización de talleres como el aprendizaje de
							instrumentos musicales o el aprendizaje de un
							idioma.
						</li>
					</ul>
					<br />
					<p className='h3 col-10 mx-auto'>
						También respondemos a los deseos de los miembros si
						están de acuerdo con los estatutos.
						<br />
						La junta directiva
					</p>
				</div>

				<hr className='col-10 mx-auto' />
				<div id='donaciones'>
					<h3>
						Amigos de la Misión Católica de Lengua Española en
						Berlín e.V.
					</h3>
					<p className='h3'>Contacto, donativos, información:</p>
					<ul className='h5 col-10 mx-auto  list-unstyled'>
						<li>Email: verein@mision-catolica-berlin.de</li>
						<li>Am Havelgarten 45</li>
						<li>13599 Berlín</li>
						<li>Para donativos: Spar Kasse Berlin</li>
						<li>IBAN: DE62 1005 0000 0191 3664 55</li>
					</ul>
					<p className='h3'>
						No dude en ponerse en contacto con nosotros si tiene
						alguna pregunta.
					</p>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
};

export default AsociacionPage;
