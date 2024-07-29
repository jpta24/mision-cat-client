import React, {useState} from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Formulario() {
	const initialState = {
		nombre: '',
		correo: '',
		intenciones: '',
	};
	const [message, setMessage] = useState(initialState);
	const [showModal, setShowModal] = useState(false)

	const postAPI = async () => {
		try {
			await axios.post(
				`https://pink-clumsy-gosling.cyclic.app/mails/webcatmessage`,
				message
			);
			setShowModal(true)
		} catch (error) {
			console.error(error)
		}
	};

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
					onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
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
					onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
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
					onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
				></textarea>
			</div>
			<div className='d-flex'>
				<div className='col-4'></div>
				<div className='col-8'>
					<Button
						variant='primary'
						className='mx-2 avisos col-6 my-2'
						onClick={postAPI}
					>
						Enviar Intención
					</Button>
				</div>
			</div>
			<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					backdrop='static'
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Intenciones Enviadas</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Muchas gracias, su intenciones han sido recibidas en nuestro correos, serán revisadas e incluidas en la próxima misa.
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={() => setShowModal(false)}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
		</form>
	);
}

export default Formulario;
