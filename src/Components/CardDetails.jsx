import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardDetails = (props) => {
  const handleClick = ()=>{
    props.onClick(props.title)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.discription}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
