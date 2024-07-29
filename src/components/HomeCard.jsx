import React from 'react';
import {Button,Card} from 'react-bootstrap';

const HomeCard = ({card}) => {
  const renderText = (text) => {
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      return text;
    }
  };

  return (
    <Card className='col-md-3 mx-4 my-2'>
   
        <Card.Img variant="top" src={card.src} style={{maxWidth: "-webkit-fill-available", height: "200px", width: "fit-content"}} className='mx-auto'/>
    
       
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
         <Card.Text>{renderText(card.text)}</Card.Text>
        {card.link && <Button className='col-4' variant="primary" href={card.link}>Ver más</Button>}
        
      </Card.Body>
    </Card>
  )
}

export default HomeCard