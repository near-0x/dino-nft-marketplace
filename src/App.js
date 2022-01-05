import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";

import Explore from "./components/Explore"
import Create from "./components/Create"
import Home from "./components/Home"
import Profile from "./components/Profile"
import View from "./components/View"

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

    return(
        <Router>
            <Navbar style={{margin: 0}} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Dino</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Explore">Explore</Nav.Link>
                            <Nav.Link href="/Collections">Collections</Nav.Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Collections, Items or Users"
                                className="me-4"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav>
                            <Nav.Link href="/Create">Create</Nav.Link>
                            <Nav.Link onClick={window.accountId === "" ? login : logout}>
                                {window.accountId === "" ? "Login" : window.accountId}
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <Button>Connect Wallet</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/Create" exact element={<Create/>} />
                <Route path="/Explore" exact element={<Explore/>} />
                <Route path="/Profile" exact element={<Profile/>} />
                <Route path="/View" exact element={<View/>} />
            </Routes>
        </Router>
    )
  
}
