import React from 'react';
import './Css/Header.css';
import { Col, Row } from 'react-bootstrap';
import headerSideImg from '../../images/logos/Frame.png';
import './Css/MediaQuery.css'

const HeaderBottom = () => {
    return (
        <Row id="header-bottom" className="">
            <Col lg={5}>
                <div className="header-info p-5">
                    <h3>Let's Grow Your Brand To The Next Level</h3>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore odio dolorum, voluptate autem </p>
                    <button className="mt-3 btn btn-dark px-5 d-block">Hire us</button>
                </div>
            </Col>
            <Col lg={7}>
                <div className="header-sidebar-img p-5">
                    <img src={headerSideImg} alt=""/>
                </div>
            </Col>
        </Row>
    );
};

export default HeaderBottom;