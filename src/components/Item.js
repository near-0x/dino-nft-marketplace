import React from 'react';
import {Container, Card, ListGroup, ListGroupItem, Image} from 'react-bootstrap';

const Item = (props) => {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Image src={props.image } roundedCircle="true"/>
                </Card.Header>
                <Card.Img variant="top" src={ props.image } />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Name</ListGroupItem>
                    <ListGroupItem>Price</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                </Card.Body>
                </Card>
        </Container>
    );
};

export default Item;