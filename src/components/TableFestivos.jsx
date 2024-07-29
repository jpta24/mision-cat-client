import React from 'react';

function TableFestivos() {
	return (
		<table className='text-start mx-auto h5'>
			<thead>
				<tr className='drop1 border border-dark text-center'>
					<th>Fecha en 2023</th>
					<th>Motivo</th>
				</tr>
			</thead>
			<tbody className='border border-dark'>
				<tr>
					<td>01.12.2024</td>
					<td>I Domingo de Adviento</td>
				</tr>
				<tr>
					<td>29.12.2024</td>
					<td>Sagrada Familia</td>
				</tr>
				<tr>
					<td>05.01.2025</td>
					<td>Epifanía, donde se traslada</td>
				</tr>
				<tr>
					<td>12.01.2025</td>
					<td>Bautismo del Señor</td>
				</tr>
				<tr>
					<td>05.03.2025</td>
					<td>Miércoles de Ceniza</td>
				</tr>
				<tr>
					<td>20.04.2025</td>
					<td>Domingo de Resurrección</td>
				</tr>
				<tr>
					<td>29.05.2025 / 01.06.2025</td>
					<td>La Ascensión del Señor</td>
				</tr>
				<tr>
					<td>08.06.2025</td>
					<td>Domingo de Pentecostés</td>
				</tr>
				<tr>
					<td>09.06.2025</td>
					<td>La B.V. María, Madre de la Iglesia</td>
				</tr>
				<tr>
					<td>12.06.2025</td>
					<td>Jesucristo Sumo y Eterno Sacerdote</td>
				</tr>
				<tr>
					<td>15.06.2025</td>
					<td>Santísima Trinidad</td>
				</tr>
				<tr>
					<td>19.06.2025 / 22.06.2025</td>
					<td>Santísimo Cuerpo y Sangre de Cristo</td>
				</tr>
				<tr>
					<td>27.06.2025</td>
					<td>Sagrado Corazón de Jesús</td>
				</tr>
				<tr>
					<td>28.06.2025</td>
					<td>Inmaculado Corazón de María</td>
				</tr>
				<tr>
					<td>23.11.2025</td>
					<td>N. S. Jesucristo, Rey del Universo</td>
				</tr>
			</tbody>
		</table>
	);
}

export default TableFestivos;
