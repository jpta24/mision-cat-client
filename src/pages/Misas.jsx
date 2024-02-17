import React from 'react';
import Formulario from '../components/Formulario';
import HomeFooter from '../components/HomeFooter';
import TableFestivos from '../components/TableFestivos';

function Misas() {
	return (
		<div className='col10 '>
			<div className='mx-auto'>
				<h1 className='my-4 text-primary'>Misas en español</h1>
				<h3 className='px-5 col-10 mx-auto'>
					La tercera palabra del decálogo de la Iglesia Católica es:
					<strong>
						"Santificarás las fiestas ennombre de Dios."
					</strong>{' '}
					En esta palabra Dios nos encomienda horrarlo con obras de
					culto en losdías de fiesta.
				</h3>
			</div>
			<div className='d-flex flex-row justify-content-center m-5'>
				<div className='me-5'>
					<img src='/assets/fotos/mkssb9.jpg' width='350' />
				</div>
				<div className='text-start ms-5 px-5 pt-3 border border-dark h4'>
					<p>Iglesia de St. Nikolaus.</p>
					<p>Dirección:</p>
					<p>Techowpromenade 35-43</p>
					<p>13437 Berlin-Wittenau</p>
				</div>
			</div>
			<div
				id='dominicales'
				className='d-flex flex-row justify-content-start m-5 col-8 mx-auto'
			>
				<div>
					<h3 className='text-primary'>Dominicales:</h3>
					<img
						src='/clock12.png'
						alt='Descripción de la imagen'
						width='100'
					/>
				</div>
				<div>
					<p className='h4 mt-5 ms-3 pt-3'>
						La misa se realiza cada domingo a los 12:00 horas.
					</p>
				</div>
			</div>
			<div
				id='confesiones'
				className='d-flex flex-row justify-content-start m-5 col-8 mx-auto'
			>
				<div>
					<h3 className='text-primary'>Confesiones:</h3>
				</div>
				<div>
					<p className='h4 ms-3 pt-1 text-start'>
						Todos los domingos después de la misa dominical (Se
						informará en los avisos en caso que no pueda realizarse
						ese día).
					</p>
				</div>
			</div>
			<div
				id='vespertinas'
				className='d-flex flex-row justify-content-start m-5 col-8 mx-auto'
			>
				<div>
					<h3 className='text-primary'>Vespertinas:</h3>
					<img
						src='/clock18.png'
						alt='Descripción de la imagen'
						width='100'
					/>
				</div>
				<div>
					<p className='h4 mt-3 pt-3 ms-3 text-start'>
						Esta Misa corresponde a la Misa del domingo.
					</p>
					<p className='h4 mt-1 ms-3 text-start'>
						La misa se realiza cada sábado a los 18:30 horas en los
						salones de la misión o a veces en la iglesia. (Se
						informará en los avisos en caso que no pueda realizarse
						ese día)
					</p>
				</div>
			</div>
			<div id='diasfestivos' className='col-8 mx-auto mb-5'>
				<h3 className='text-primary text-start'>
					Días festivos más importantes:
				</h3>
				<TableFestivos />
			</div>
			<div id='intenciones' className='col-8 mx-auto mb-5'>
				<h3 className='text-primary text-start'>Intenciones:</h3>
				<Formulario />
			</div>
			<HomeFooter />
		</div>
	);
}

export default Misas;
