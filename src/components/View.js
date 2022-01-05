import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const View = () => {
    return (
        <Container>

            <Row>
                <Col md="auto">
                    <Image src="holder.js/500x500"/>
                </Col>

                <Col md="auto">
                    <div>
                        Item Name
                    </div>
                    <div>
                        On Sale for $1
                    </div>
                    <Row>
                        <Col>
                            Creator
                        </Col>
                        <Col>
                            Collection
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Row>
                        <Col md="6">
                            <Button variant="primary">Buy for Price</Button>
                        </Col>
                        <Col md="6">
                            <Button variant="success">Place a bid</Button>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default View;