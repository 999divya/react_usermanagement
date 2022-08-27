import React from 'react';
import Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Product = (props) => (
    // AIzaSyD43F4QREPh-3DUjva9iMu6q0J760wTmsI

  <Col xs={12} md={6} lg={4}>
    <Card style={{ width: '18rem', padding:"1rem" }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Img variant="top" src={props.img} />
 
      <Card.Body>
        {/* <Card.Img variant="top" src={props.product2} /> */}
        <Card.Text>
         By {props.author}
        </Card.Text>
        <Card.Text>Description: {props.date}
          </Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default Product;