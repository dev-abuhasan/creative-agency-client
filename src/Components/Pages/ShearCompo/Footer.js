import React from 'react';
import './Css/Header.css'
import { Button, Col, Form } from 'react-bootstrap';

const Footer = () => {
    const onSubmits = (e) => {

        e.preventDefault()
    }

    return (
        <footer id="footer" className="p-5 row">
            <Col md={1} className="">

            </Col>
            <Col md={5} className="footer-title">
                <h2 className="mb-3">Let us handle your project, professionally.</h2>
                <p>With well written codes, We build amazing apps for all platforms, mobile and web apps in general.</p>
            </Col>
            <Col md={6} className="">
                <Form onSubmit={e => onSubmits(e)} method="post">
                    <Form.Control type="email" size="lg" placeholder="Your email address" name="email" />
                    <br />
                    <Form.Control type="text" size="lg" placeholder="Your name / Company's name" name="address" />
                    <br />
                    <Form.Control as="textarea" rows="6" size="lg" placeholder="Your Message" name="message" />
                    <br />
                    <Button className="login-btn w-25 footer-submit" variant="dark" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
            <Col md={12} className="text-center pt-5 mt-5 copyright">
                Copyright Orange labs 2020
            </Col>
        </footer>
    );
};

export default Footer;