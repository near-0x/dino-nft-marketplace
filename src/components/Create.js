import React from 'react';
import {Form, FormGroup, Container, Button, Row, Col, Image} from 'react-bootstrap'
import Item from "./Item"

const Create = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src="https://picsum.photos/500/500"/>
                </Col>
                <Col>

                    <Form>
                        <Form.Group className="mb-3" controlId="file">
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control type="file" placeholder="Enter file" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="sell-option">
                            <Form.Label>Put on marketplace</Form.Label>
                            <Form.Select>
                                <option>Select An Option</option>
                                <option value="fixed-price">Fixed Price</option>
                                <option value="open-for-bids">Open for Bids</option>
                                <option value="timed-auction">Timed Auction</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="collection">
                            <Form.Label>Collection</Form.Label>
                            <Form.Select>
                                <option>Select An Option</option>
                                <option value="fixed-price">Create</option>
                                <option value="open-for-bids">DINO</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="royalties">
                            <Form.Label>Royalties</Form.Label>
                            <Form.Control type="text" placeholder="Royalties" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="outline-secondary">Create</Button>
                        </div>
                    

                    </Form>

                </Col>
            </Row>
            
        </Container>
    );
};


export default Create;