import React, { useState } from 'react';
import './Order.css';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Oder = () => {
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />

    const actualBtn = document.getElementById('actual-btn');
    const fileChosen = document.getElementById('file-chosen');
    if (actualBtn) {
        actualBtn.addEventListener('change', function () {
            fileChosen.textContent = this.files[0].name
        })
    }
    const getName = sessionStorage.getItem('name');
    const getEmail = sessionStorage.getItem('user');

    const [formData, updateFormData] = useState({
        name: getName,
        email: getEmail,
        courseCategory: "",
        projectDetails: "",
        price: "",
        statusOption: "Pending",
        image: null
    });
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }
    const getUploadFils = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.files[0] })
    }

    const onSubmits = (e) => {
        const formsData = new FormData();
        formsData.append("name", formData.name);
        formsData.append("email", formData.email);
        formsData.append("courseCategory", formData.courseCategory);
        formsData.append("projectDetails", formData.projectDetails);
        formsData.append("price", formData.price);
        formsData.append("statusOption", formData.statusOption);
        formsData.append("image", formData.image);


        fetch(`https://obscure-hollows-57552.herokuapp.com/add-order`, {
            method: 'POST',
            body: formsData
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    alert('Order added successfully');
                }
                if(data.success === false){
                    alert('Order added failed');
                }
            })
            .then(() => {
                window.location.reload();
            })
        e.preventDefault();
    }
    return (
        <Form className="row" onSubmit={e => onSubmits(e)}>
            <div className="col-md-9">
                <label htmlFor="" className="text-success">Your Name : </label>
                <Form.Control type="text" placeholder="Your Name / Company's Name" name="name" required onBlur={(e) => getData(e)} defaultValue={getName} />

                <label htmlFor="" className="text-success">Your Email : </label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => getData(e)} name="email" value={getEmail} />
                <br />
                <Form.Control type="text" placeholder="Category Graphics, Web or Else" name="courseCategory" required onBlur={(e) => getData(e)} />
                <br />
                <Form.Control as="textarea" rows="3" placeholder="Project Details" name="projectDetails" onBlur={(e) => getData(e)} required />
                <br />
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <Form.Control type="text" placeholder="Price" name="price" required onBlur={(e) => getData(e)} pattern="[0-9]+" />
                        <small className="ml-2 text-warning">only accept numbers</small>
                    </div>
                    <div className="col-md-7">
                        <Form.File placeholder="Name" name="image" required onBlur={(e) => getUploadFils(e)} accept="image/*" id="actual-btn" className="file-input" />
                        <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                            {uploadIcon} Upload <span className="responsive-file"> project file</span>
                        </label>
                        <span id="file-chosen"></span>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-md-12 ">
                <Button variant="dark" type="submit" className="responsive-mobile-btn">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default Oder;