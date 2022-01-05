import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Item from "./Item"

const Explore = props => {
    return (
        <Container>

            <Row>
                <Col md={3}>
                    <Item 
                        image = "https://picsum.photos/30/30"
                        name = "Test1234"
                        />
                </Col>
               
                <Col md={3} style={{marginLeft: '1.5em'}}>
                    <Item 
                        image = "https://picsum.photos/30/30"
                        name = "Test1234"
                        />
                </Col>
                
                

                <Col md={3} style={{marginLeft: '1.5em'}}>
                    <Item 
                        image = "https://picsum.photos/30/30"
                        name = "Test1234"
                        />
                </Col>

                
                
            </Row>

            <Row>
                <div className="d-grid gap-2">
                    <Button variant="outline-info">Load More</Button>
                </div>
            </Row>

        </Container>
    );
};


export default Explore;