import React from 'react';
import HomeFooter from '../components/HomeFooter';

function Sacramentos() {
	return (
		<div className='col10 '>
			<div className='mx-auto' id='sacramentos'>
				<h1 className='my-4 text-primary'>Los Sacramentos</h1>
				<h3 className='px-5 col-10 mx-auto'>
					La Santa Madre Iglesia instituyó los sacramentos como signos
					sagrados con los que expresan efectos, sobre todos
					espirituales, obtenidos por la intercesión del Espíritu
					Santo, para que los fieles en los acontecimientos de su vida
					sean santificados por la gracia divina del misterio Pascual
					de la pasión, muerte y resurrección de Cristo.
				</h3>
				<h3 className='px-5 col-10 mx-auto'>
					Los 7 sacramentos que se celebran en la Iglesia Católica son
					el Bautismo, la Confirmación, la Eucaristía, la Penitencia o
					Reconciliación, la Unción de los Enfermos, el Orden
					Sacerdotal y el Matrimonio
				</h3>
			</div>
			<hr />
			<div id='bautizo'>
				<h2 className='fw-bold mt-5 text-primary'>El Bautizo</h2>
				<div className='d-flex flex-row justify-content-center align-items-center m-5'>
					<div className='me-5 col-4'>
						<img
							src='/assets/fotos/mkssb10.jpg'
							alt='Descripción de la imagen'
							width='400'
						/>
					</div>
					<div className='text-start col-6 px-2 h4'>
						<p className=''>
							El Santo bautismo es el fundamento de toda vida
							cristiana, el pórtico de la vida en el espíritu de
							Dios. Por el bautismo somos liberados del pecado y
							regenerado como hijos de Dios, llegamos a ser
							miembros de Cristo y somos incorporados a su
							iglesia.
						</p>
					</div>
				</div>
				<div className='d-flex flex-column text-start m-5 col-8 mx-auto h5'>
					{/* <p>Para ver el Formulario para Bautismo</p> */}
					<h3 className='text-center text-primary'>Requisitos:</h3>
					<h5>NIÑO / NIÑA</h5>
					<ul>
						<li>
							Partida de nacimiento. Partida de nacimiento con
							fines religiosos o una copia de la misma.
						</li>
					</ul>
					<h5>PADRES</h5>
					<ul>
						<li>
							Nombres completos de los padres, fecha de
							nacimiento, religión, lugar de domicilio, número de
							teléfono y dirección email.
						</li>
						<li>Estado civil de los padres.</li>
						<li>
							Si están casados por la Iglesia: fecha y lugar de la
							Boda.
						</li>
					</ul>
					<h5>PADRINOS</h5>
					<ul>
						<li>
							Es necesario que sean católicos y vivan como tales.
						</li>
						<li>Nombres completos, domicilio, religión.</li>
						<li>
							Constancia de pertenencia a la Iglesia católica, la
							cual reciben en la Parroquia territorial en donde
							viven.
						</li>
					</ul>
					<h5 className='my-3'>
						Colocando su dirección en la siguiente página web, puede
						saber cuál es la parroquia territorial que le
						corresponde (
						<a href='http://www.pfarreifinder.de'>
							www.pfarreifinder.de
						</a>
						).
					</h5>
					<h5 className='my-3'>
						Padres y padrinos tienen que asistir a la charla
						prebautismal de la Misión o traer constancia que
						asistieron a la charla prebautismal en su parroquia
						territorial.
					</h5>
				</div>
			</div>
			<hr />
			<div id='comunion'>
				<h2 className='fw-bold mt-5 text-primary'>
					La Primera Comunión
				</h2>
				<h3 className='fw-bold'>(Sacramento de Penitencia)</h3>
				<div className='d-flex flex-row justify-content-around mx-auto col-10'>
					<div className='mx-3'>
						<img
							src='/assets/fotos/mkssb11.jpg'
							alt='Descripción de la imagen'
							width='300'
						/>
					</div>
					<div className='col-8'>
						<div className='text-start px-3 h5 me-3'>
							<p className='py-5'>
								La Eucaristía. Jesucristo en la última cena,
								instituyó el Sacrificio Eucarístico de su cuerpo
								y de su sangre. La Eucaristía es fuente y culmen
								de toda la vida cristiana y su efecto contiene
								toda la vida espiritual de su iglesia, es decir
								Cristo mismo. Por la celebración eucarística nos
								unimos ya a la liturgia del cielo y a la vida
								eterna.
							</p>
						</div>
						<div className='text-start px-3 h5'>
							<p className='py-5'>
								La Reconciliación. El que quiere recibir a
								cristo en la comunión Eucarística debe hallarse
								en estado de gracia. Los que se acercan a este
								sacramento obtienen de la misericordia de Dios
								el perdón de los pecados cometidos contra Él.
								Obtiene la reconciliación le mueve a conversión
								con su amor.
							</p>
						</div>
					</div>
				</div>
				<div className='d-flex flex-column text-start m-5 col-8 mx-auto h5'>
					<p>
						Véase Formulario de inscripción a la catequesis de la
						primera comunión.{' '}
						<a
							href='/primera-comunion-formulario.pdf'
							download='primera-comunion-formulario.pdf'
						>
							(Abrir documento PDF)
						</a>
					</p>
					<h3 className='text-center text-primary'>Requisitos:</h3>
					<h5>NIÑO / NIÑA</h5>
					<ul>
						<li>
							Para niños a partir de 9 años o que estén cursando
							la 3era. Clase de la escuela primaria.
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div id='confirmacion'>
				<h2 className='fw-bold mt-5 text-primary'>La Confirmación</h2>
				<div className='d-flex flex-row justify-content-center align-items-center m-5'>
					<div className='me-5 col-4'>
						<img
							src='/assets/fotos/mkssb12.jpg'
							alt='Descripción de la imagen'
							width='400'
						/>
					</div>
					<div className='text-start col-6 px-2 h4'>
						<p className=''>
							Con el bautismo y la eucaristía, el sacramento de la
							confirmación constituye el conjunto de los
							sacramentos de la iniciación cristiana. Este
							sacramento es necesario para llegar a la plenitud de
							la gracia bautismal. La Confirmación los une más
							íntimamente a la iglesia de Dios y los enriquece con
							la fortaleza del Espíritu Santo.
						</p>
					</div>
				</div>
				<div className='d-flex flex-column text-start m-5 col-8 mx-auto h5'>
					<p>
						Véase Formulario de inscripción a la catequesis de la
						Confirmación.{' '}
						<a
							href='/confirmacion-jovenes-fomulario.pdf'
							download='confirmacion-jovenes-fomulario.pdf'
						>
							(Abrir documento PDF)
						</a>
					</p>
					<h3 className='text-center text-primary'>Requisitos:</h3>
					{/* <h5>NIÑO / NIÑA</h5>
                <ul>
                    <li>Para niños a partir de 9 años o que estén cursando la 3era. Clase de la escuela primaria.</li>
                </ul> */}
				</div>
			</div>
			<hr />
			<div id='matrimonio'>
				<h2 className='fw-bold mt-5 text-primary'>El Matrimonio</h2>
				<div className='d-flex flex-row justify-content-center align-items-center m-5'>
					<div className='me-5 col-4'>
						<img
							src='/assets/fotos/mkssb13.jpg'
							alt='Descripción de la imagen'
							width='150'
						/>
					</div>
					<div className='text-start col-6 px-2 h4'>
						<p className=''>
							El amor conyugal comporta una totalidad de los
							elementos de una persona. El amor conyugal exige por
							su misma naturaleza, la unidad y la indisolubilidad
							de la comunidad de personas que abarca la vida entre
							los esposos, de manera que ya no son dos sino una
							sola carne.
						</p>
					</div>
				</div>
				<div className='d-flex flex-column text-start m-5 col-8 mx-auto h5'>
					{/* <p>Véase Formulario de inscripción a la catequesis de la Confirmación. <a href="confirmacion-jovenes-fomulario.pdf" target="_blank">(Abrir documento PDF)</a></p> */}
					<h3 className='text-center text-primary'>Requisitos:</h3>
					{/* <h5>NIÑO / NIÑA</h5>*/}
					<ul>
						<li>
							Fe de bautismo de cada contrayentes con las
							anotaciones del margen de página del libro de
							bautizo del lugar donde fue bautizadoCatequesis para
							los contrayentes.
						</li>
						<li>Catequesis para los contrayentes.</li>
					</ul>
				</div>
			</div>
			<hr />
			<div id='uncion'>
				<h2 className='fw-bold mt-5 text-primary'>
					Unción de los enfermos
				</h2>
				<div className='d-flex flex-row justify-content-around my-5 mx-auto col-10'>
					{/* <div className='me-5'>
						<img
							src='https://www.mision-catolica-berlin.de/eventos/caacupe.jpg'
							alt='Descripción de la imagen'
							width='350'
						/>
					</div> */}
					<div className='text-start col-12 ms-5 px-5 h4'>
						<p className='py-5'>
							Con la sagrada unción de los enfermos y con la
							oración de los presbíteros, toda la iglesia entera
							encomienda a los enfermos al Señor sufriente y
							glorificados para que los alivie y los salve.
						</p>
					</div>
				</div>
				<div className='d-flex flex-column text-start m-5 col-8 mx-auto h5'>
					{/* <p>Véase Formulario de inscripción a la catequesis de la Confirmación. <a href="confirmacion-jovenes-fomulario.pdf" target="_blank">(Abrir documento PDF)</a></p> */}
					{/* <h3 className='text-center text-primary'>Requisitos:</h3>
                <h5>NIÑO / NIÑA</h5>
                <ul>
                    <li>Fe de bautismo de cada contrayentes con las anotaciones del margen de página del libro de bautizo del lugar donde fue bautizadoCatequesis para los contrayentes.</li>
                    <li>Catequesis para los contrayentes.</li>
                </ul> */}
					<h5 className='my-3'>
						Solo se podrán hacer citas y encuentros poniéndose en
						contacto directo con el Presbítero.
					</h5>
					<ul>
						<li>Párroco: Franklin Zea</li>
						<li>E-Mail:parroco@mision-catolica-berlin.de</li>
						<li>Móvil: +49 (0)176 31 332 817</li>
					</ul>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Sacramentos;
