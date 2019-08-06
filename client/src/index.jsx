import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Home from './components/Home';
import Footer from './components/Footer';
import Content from './components/Content/Content';

import ButtonToolbarComp from './components/bootstrap-comp/buttons/buttons';
import Login from './components/Login/Login';
import MaterialBtn from './components/material-comp/button';

const App = () => (
    <Container>
        {/*<Home />*/}
        <Content />
        {/*<ButtonToolbarComp />*/}
        {/*<Login />*/}
        {/*<Footer />*/}
        <MaterialBtn />
    </Container>
);

export default App;