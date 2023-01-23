import { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap'

const Navbar2 = () => {

const [show, setShow] = useState(false)
const handleClose = () => setShow(false);

    return (
        <>
        <Navbar className='col-md-12 mx-md-auto px-md-5' sticky="top" bg='white' expand="sm" collapseOnSelect>
        <Navbar.Brand className='mx-md-5 text-center'>
        {window.innerWidth < 450 ? 
        <>
            <img className='mx-2' src='virgenDelPilar.png' width="60px"  alt='altLogo'/>
            <span className="text-primary"> Misión Católica en Berlín</span>
        </>     
        :
            <img src='virgenDelPilar.png' width="100px"  alt='altLogo'/>
        }
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className='d-flex-lg justify-content-between flex-column '>
            {window.innerWidth > 450 && 
                <div>
                    <h1 className='text-primary'>Misión Católica de Lengua Española en Berlín</h1>
                </div>
            }
                
            <Nav className='d-flex justify-content-around mb-1 col-12'>
                <NavDropdown  className='mx-2' title="Nosotros">
                    <NavDropdown.Item href="#action3">
                        La Misión
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Parróquia San Nikolaus
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Historia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Sacerdotes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Organigrama
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Proyectos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Eventos
                    </NavDropdown.Item><NavDropdown.Item href="#action4">
                        Jóvenes
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2' title="Misas">
                    <NavDropdown.Item href="#action3">
                        Dominicales
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Vespertinas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Días Festivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Intenciones de la Sta. Misa
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2' title="Sacramentos">
                    <NavDropdown.Item href="#action3">
                        Bautizo
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Comunión
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Confirmación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Matrimonio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Unción de los Enfermos
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2' title="Pastoral">
                    <NavDropdown.Item href="#action3">
                        Consejo Pastoral
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Lectores
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Monaguillos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Catequistas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Coro
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Grupo Técnico
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Grupo de Cocina
                    </NavDropdown.Item><NavDropdown.Item href="#action4">
                        Otros Gremios
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2' title="Asociación AMCLEB">
                    <NavDropdown.Item href="#action3">
                        Estatutos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Proyectos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Talleres
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2' title="Contactos">
                    <NavDropdown.Item href="#action3">
                        Párroco
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Horarios de Oficina
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        La Delegación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Donaciones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Subscripción
                    </NavDropdown.Item>
                </NavDropdown>
                    <Button variant='primary' className='mx-2 avisos col-md-2 col-5 mx-auto' onClick={()=>setShow(true)}>Avisos</Button>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
        
        <Modal
            show={show}
            onHide={handleClose}
            size="dialog-scrollable modal-lg"
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Avisos</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <p>
            Domingo 20.11. 2022 <br /><br />

            Colecta : Domingo de diáspora: para las obras del “Bonifatiuswerk” de los católicos alemanes <br /><br />

            El edificio de la iglesia está a una temperatura de 14 grados centígrados para que no se dañe el órgano así que podemos celebrar tranquilos. <br /><br />

            Después de la Santa Misa habrá confesiones. <br /><br />

            Para anotar las intenciones de la Sta. Misa por favor hacerlo telefónicamente en el horario de la oficina miércoles y viernes de 10:30 hasta 14:30 horas o enviar un email a la oficina hasta las 14:30 horas del viernes. <br /><br />

            La próxima catequesis prebautismal será el sábado 26 de noviembre 2022 a las 10:30 horas en los salones de la Misión. <br /><br />

            El próximo encuentro de jóvenes adultos será el viernes 16 de diciembre a las 19:00 horas en los salones de la misión , con ambiente navideño. <br /><br />

            El encuentro con el movimiento de Schönstatt queda suspendido hasta febrero 2023. <br /><br />

            Celebración de la Sta. Misa vespertina del sábado 19.11.22 a las 18:30 horas. <br /><br />

            Todavía sigue siendo importante y necesario protegerse de la infección del coronavirus y debemos guardar las medidas de protección.<br />

            -Durante su estadía en la iglesia es recomendado el uso de propia mascarilla que le cubra la nariz y la boca! <br />

            - No habrá nuevas inscripciones a la entrada de la Iglesia y no habrá la transmisión por internet via zoom. <br />

            -Las cestas para la colecta estarán a la salida de la iglesia al final de la Sta. Misa. ¡Gracias por su generosidad! <br />

            -La Sagrada Comunión se puede recibir solo en la mano y solo bajo la especie del Pan Eucarístico. <br />

            - Para las intenciones de la Sta. Misa le pedimos ponerse en contacto con la secretaria y de hacerlas telefónicamente en horario de oficina miércoles y viernes de 10:30 hasta las 14:30 horas o por email: info@mision-catolica-berlin.de <br />

            - Le pedimos por favor de no pasar por la sacristía. <br />

            - Solo se puede usar el baño de la sacristía entrando por fuera de la iglesia. Por favor utilice los desinfectantes antes y después de su uso. ¡Gracias!<br /><br />

            ¡Muchas gracias por su valiosa colaboración!<br /><br />

            Padre Franklin Zea y consejo parroquial de la Misión Católica de Lengua Española en Berlín.<br /><br />

            ¡Recemos especialmente por los enfermos, moribundos y fallecidos por la pandemia, pero también por todos los que sufren lo mismo de otras maneras!<br /><br />
            </p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" className='col-2' onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal> 
            
        </>
    )
}

export default Navbar2