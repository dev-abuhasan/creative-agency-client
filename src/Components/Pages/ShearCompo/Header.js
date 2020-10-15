import React from 'react';
import { Container } from 'react-bootstrap';
import GoBlobsAni from '../../SpringAni/GoBlobsAni';
import './Css/Header.css';
import HeaderBottom from './HeaderBottom';
import Navbars from './Navbars';

const Header = () => {
    return (
        <header id="header-main" className="">
            <Container>
                <Navbars />
                <HeaderBottom />
                <GoBlobsAni />
            </Container>
        </header>
    );
};

export default Header;