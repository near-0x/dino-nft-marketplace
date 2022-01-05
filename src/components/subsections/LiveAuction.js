import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Item from "../Item"

const LiveAuction = () => {
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

export default LiveAuction;