import React from 'react';
import Item from "../Item"
import {Container, Row, Col} from 'react-bootstrap';

const HotBids = () => {
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
        </Container>
    );
};

export default HotBids;