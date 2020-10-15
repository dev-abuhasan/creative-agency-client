import React from 'react';
import './Css/Header.css'
import { Col, Container, Row } from 'react-bootstrap';
import slackLogo from '../../images/logos/slack.png';
import googleIcon from '../../images/logos/google.png';
import UberIcon from '../../images/logos/uber.png';
import netFlexIcon from '../../images/logos/netflix.png';
import airBnbIcon from '../../images/logos/airbnb.png';
import './Css/MediaQuery.css';

const Customer = () => {
    return (
        <Container id="customer-info">
            <Row className="text-center mt-4 align-items-center">
                <Col md={2} sm={3} xs={6} className="brand-logo">
                    <img src={slackLogo} alt=""/>
                </Col>
                <Col md={3} sm={3} xs={6} className="brand-logo">
                    <img src={googleIcon} alt=""/>
                </Col>
                <Col md={2} sm={3} xs={6} className="brand-logo">
                    <img src={UberIcon} alt=""/>
                </Col>
                <Col md={3} sm={3} xs={6} className="brand-logo">
                    <img src={netFlexIcon} alt=""/>
                </Col>
                <Col md={2} sm={3} xs={6} className="brand-logo">
                    <img src={airBnbIcon} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Customer;