import Carousel from 'react-bootstrap/Carousel';

const HomeCarrousel = () => {
  return (
  <Carousel fade className='col-8 mx-auto'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.st-franziskus-berlin.de/fileadmin/_processed_/f/5/csm_Nikolaus_029a_Altar_e6e6f54112.jpg"
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.mision-catolica-berlin.de/fotogaleria/_data/i/upload/2015/11/25/20151125005859-13273d6c-sm.jpg"
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.mision-catolica-berlin.de/fotogaleria/_data/i/upload/2015/11/25/20151125005957-7b9a2713-sm.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
    
  )
}

export default HomeCarrousel