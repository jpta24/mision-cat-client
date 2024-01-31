import React from 'react';
import { Button } from 'react-bootstrap';

function Formulario() {
	return (
		<form className='col-8 mx-auto h5'>
			<div>
				<label htmlFor='nombre' className='col-4'>
					Nombre:
				</label>
				<input
					type='text'
					id='nombre'
					name='nombre'
					required
					className='col-8 my-1'
				/>
			</div>
			<div>
				<label htmlFor='correo' className='col-4'>
					Correo Electrónico:
				</label>
				<input
					type='email'
					id='correo'
					name='correo'
					required
					className='col-8 my-1'
				/>
			</div>
			{/* <div>
				<label htmlFor='nombre' className='col-4 '>
					Intenciones:
				</label>
				<input
					type='text'
					id='nombre'
					name='nombre'
					required
					className='col-8 my-1'
				/>
			</div> */}
			<div className='d-flex align-items-start'>
				<label htmlFor='intenciones' className='col-4'>
					Intenciones Por:
				</label>
				<textarea
					id='intenciones'
					name='intenciones'
					placeholder='Intenciones por:'
					rows='3'
					required
					className='col-8 my-1'
				></textarea>
			</div>
			<div className='d-flex'>
				<div className='col-4'></div>
				<div className='col-8'>
					<Button
						variant='primary'
						className='mx-2 avisos col-6 my-2'
					>
						Enviar Intención
					</Button>
				</div>
			</div>
		</form>
	);
}

export default Formulario;
