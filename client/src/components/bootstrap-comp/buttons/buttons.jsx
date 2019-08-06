import React from 'react';
import { Button, ButtonToolbar, Row, Col, Container } from 'react-bootstrap';


const ButtonToolbarComp = () => (
    <Container>
        <Row>
            <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
            </ButtonToolbar>
        </Row>
        <Row>
            <ButtonToolbar>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>
        </Row>
    </Container>
)

export default ButtonToolbarComp;


