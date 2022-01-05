import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HotBids  from "./subsections/HotBids";
import LiveAuction from "./subsections/LiveAuction";
import TopCollection from "./subsections/TopCollection";
import TopSellers from "./subsections/TopSellers";
import Explore from "./Explore";

const Home = props => {
    return (
        <Container>

            <Row>
                <h5>Top Collections</h5>
                <hr/>
                <TopCollection />
            </Row>

            <Row>
                <h5>Hot Bids</h5>
                <hr/>
                <HotBids />
            </Row>

            <Row>
                <h5>Top Sellers</h5>
                <hr/>
                <TopSellers />
            </Row>

            <Row>
                <h5>Live Auctions</h5>
                <hr/>
                <LiveAuction />
            </Row>

            <Row>
                <h5>Explore</h5>
                <hr/>
                <Explore />
            </Row>


        </Container> 
    );
};


export default Home;