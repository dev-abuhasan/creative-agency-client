import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [formData, updateFormData] = useState({
      email: '',
      adminAddBy: sessionStorage.getItem("user")
    });
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }
    
    const onSubmits = (e) => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/make-admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === true) {
                    alert("New Admin Aded Success... Hurray!!");
                }
            })
            .then(() => {
                window.location.reload();
            })
        e.preventDefault()
    }
    return (
        <div className=" m-4 bg-white make-admin">
            <Form className="row" onSubmit={e => onSubmits(e)}>
                <div className="col-md-6">
                    <Form.Control type="email" placeholder="Enter email" required onBlur={(e) => getData(e)} name="email" />
                </div>
                <div className="responsive-tablet">
                    <Button variant="success" type="submit">
                        Submit
                </Button>
                </div>
            </Form>
        </div>
    );
};

export default MakeAdmin;