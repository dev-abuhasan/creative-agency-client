import React, { useState } from 'react';
import './AddService.css';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import '../MediaQuery.css';
const AddService = () => {
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />

    const actualBtn = document.getElementById('actual-btn');
    const fileChosen = document.getElementById('file-chosen');
    if (actualBtn) {
        actualBtn.addEventListener('change', function () {
            fileChosen.textContent = this.files[0].name
        })
    }

    const [formData, updateFormData] = useState({
        title: "",
        description: "",
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
        formsData.append("title", formData.title);
        formsData.append("description", formData.description);
        formsData.append("image", formData.image);

        fetch(`https://obscure-hollows-57552.herokuapp.com/add-service`, {
            method: 'POST',
            body: formsData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    alert("Service Add Successfully... Hurray!")
                }
                if (data.success === false) {
                    alert("Service Not Added... Sad!")
                }
            })
            .then(() => {
                window.location.reload();
            })
        e.preventDefault()
    }
    return (
        <Form className="row bg-white p-4 m-3" onSubmit={e => onSubmits(e)}>
            <div className="col-md-6">
                <label htmlFor="">Service Title</label>
                <Form.Control type="text" placeholder="Enter Title" name="title" required onBlur={(e) => getData(e)} />
                <br />
                <label htmlFor="">Description</label>
                <Form.Control as="textarea" rows="3" placeholder="Enter Description" name="description" onBlur={(e) => getData(e)} required />
                <br />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Icon</label> <br />
                <Form.File name="image" required onBlur={(e) => getUploadFils(e)} accept="image/*" id="actual-btn" className="file-input" />
                <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                    {uploadIcon} Upload 
                    <span className="responsive-file"> project file</span>
                </label>
                <span id="file-chosen"></span>
            </div>
            <div className="col-md-12">
                <Button variant="success" type="submit" className="float-right responsive-tablet-btn">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default AddService;