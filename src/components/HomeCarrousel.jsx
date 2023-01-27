import Carousel from 'react-bootstrap/Carousel';

const HomeCarrousel = () => {
  return (
  <Carousel fade className='col-12 col-md-8 mx-auto mb-4'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dwtnqtdcs/image/upload/v1674815319/cat4_vq7gm5.jpg"
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dwtnqtdcs/image/upload/v1674815319/cat2_wcrmch.jpg"
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dwtnqtdcs/image/upload/v1674815319/cat3_w99ewj.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dwtnqtdcs/image/upload/v1674815320/cat1_b4bxjl.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
    
  )
}

export default HomeCarrousel