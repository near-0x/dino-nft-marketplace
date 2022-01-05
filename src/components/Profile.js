import React from 'react';
import {Container, Row} from 'react-bootstrap';

const Profile = props => {
    return (
        <Container>
            <Row>
                <div>
                    <Image src="" rounded/>
                </div>
            </Row>
            <Row>
                <Tabs defaultActiveKey="onsale" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="onsale" title="On Sale">
                        
                    </Tab>
                    <Tab eventKey="owned" title="Owned">
                        
                    </Tab>
                    <Tab eventKey="created" title="Created" disabled>
                        
                    </Tab>
                    <Tab eventKey="liked" title="Liked" disabled>
                        
                    </Tab>
                    <Tab eventKey="activity" title="Activity" disabled>
                        
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};


export default Profile;