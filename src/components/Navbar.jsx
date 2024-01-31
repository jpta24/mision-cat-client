import { useState,useEffect } from 'react';
import { Button, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Navbar2 = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const dNav = () =>{
        if (scrollPosition > 50 && !isHovered) {
            return 'navbarTrans navbarTransCollapse'
        }
        return 'navbarTrans'
    }
    return (
    <>
    <Navbar className='col-md-12 mx-md-auto px-md-5' sticky="top" bg='white' expand="sm" collapseOnSelect 
    onMouseOver={()=>setIsHovered(true)}
    onMouseOut={()=>setIsHovered(false)}>
        <Navbar.Brand  className='mx-md-5 text-center'>
        {window.innerWidth < 450 ? 
        <Link to={"/"}>
            <img className='mx-2' src='https://res.cloudinary.com/dwtnqtdcs/image/upload/v1677147805/virgenDelPilar_fs1a8w.png' width="60px"  alt='altLogo'/>
            <span className="text-primary"> Misión Católica en Berlín</span>
        </Link>     
        :
        <Link to={"/"}>
            <img src='https://res.cloudinary.com/dwtnqtdcs/image/upload/v1677147805/virgenDelPilar_fs1a8w.png' 
            className={`${window.innerWidth > 450 && 'navImg'} ${(scrollPosition > 50 && !isHovered) && "imgSmall"}`} 
            // width={scrollPosition > 50 && !isHovered ? "60px" :"100px"}  
            alt='altLogo'/>
        </Link>
            
        }
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className='d-flex-lg justify-content-between flex-column '>
            {window.innerWidth > 450 && 
                <div>
                    <h1 className='text-primary'>Misión Católica de Lengua Española en Berlín</h1>
                </div>
            }
                
            <Nav className={`d-flex justify-content-around mb-1 col-12 ${dNav()}`}>
                <NavDropdown  className='mx-2 fw-bold dropItem' title="NOSOTROS">
                    <NavDropdown.Item href="/nosotros/#bienvenida" className='drop1'>
                        Bienvenida
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#mision"  className='dropOdd'>
                        La Misión
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#laFe" className='dropEven'>
                        Espacio de la Fé
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#historia" className='dropOdd'>
                        Historia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#sacerdotes" className='dropEven'>
                        Sacerdotes 
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#eventos" className='dropOdd'>
                        Eventos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nosotros/#proyectos" className='dropEven'>
                        Proyectos
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/nosotros/#" className='dropOdd'>
                        Advocación de la Virgen
                    </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown  className='mx-2 fw-bold dropItem' title="MISAS">
                    <NavDropdown.Item href="/misas/#dominicales" className='drop1'>
                        Dominicales
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/misas/#vespertinas" className='dropOdd'>
                        Vespertinas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/misas/#diasfestivos" className='dropEven'>
                        Días Festivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/misas/#intenciones" className='dropOdd'>
                        Intenciones de la Sta. Misa
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2 fw-bold dropItem' title="SACRAMENTOS">
                    <NavDropdown.Item href="/sacramentos/#bautizo" className='drop1'>
                        Bautizo
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/sacramentos/#comunion" className='dropOdd'>
                        Comunión
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/sacramentos/#confirmacion" className='dropEven'>
                        Confirmación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/sacramentos/#matrimonio" className='dropOdd'>
                        Matrimonio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/sacramentos/#uncion" className='dropEven'>
                        Unción de los Enfermos
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2 fw-bold dropItem' title="PASTORAL">
                    <NavDropdown.Item href="#action3" className='drop1'>
                        Consejo Pastoral
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Lectores
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
                        Monaguillos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Catequistas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
                        Coro
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Grupo Técnico
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
                        Grupo de Cocina
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Otros Gremios
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2 fw-bold dropItem' title="ASOCIACIÓN AMCLEB">
                    <NavDropdown.Item href="#action3" className='drop1'>
                        Estatutos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Proyectos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
                        Talleres
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='mx-2 fw-bold' title="CONTACTOS">
                    <NavDropdown.Item href="#action3" className='drop1'>
                        Párroco
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Horarios de Oficina
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
                        La Delegación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropOdd'>
                        Donaciones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='dropEven'>
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