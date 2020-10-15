import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Review.css'
import '../MediaQuery.css'
const Review = () => {
    const [formData, updateFormData] = useState({
        name: "",
        company: "",
        message: "",
        image: sessionStorage.getItem("photo")
    });
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }
    const onSubmits = (e) => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/set-review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formData })
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    alert("Thank You For your Review...")
                }
                if(data.success === false){
                    alert("Your Review is not Successful... Please try again");
                }
            })
            .then(() => {
                window.location.reload();
            })
        e.preventDefault()
    }
    return (
        <Row>
            <Col md={7}>
                <Form onSubmit={e => onSubmits(e)} method="post">
                    <Form.Control type="text" placeholder="Your Name" name="name" onBlur={(e) => getData(e)} required />
                    <br />
                    <Form.Control type="text" placeholder="Company's name Designation" name="company" onBlur={(e) => getData(e)} required />
                    <br />
                    <Form.Control as="textarea" rows="3" placeholder="Description" name="message" onBlur={(e) => getData(e)} required />
                    <br />
                    <Button className="login-btn w-25 responsive-sm-btn" variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Review;