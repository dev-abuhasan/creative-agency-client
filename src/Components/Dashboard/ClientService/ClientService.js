import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import './ClientService.css';

const ClientService = () => {
    const getEmail = sessionStorage.getItem('user');
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/user-service-list?email=${getEmail}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [getEmail])

    return (
        <Row>

            {serviceData.length > 0 ? serviceData.map(data =>
                <Col lg={6} className="p-3" key={data._id}>
                    <div className="client-service-card">
                        <div className="service-title-sec">
                            <div className="service-img">
                                <img src={`data:image/jpeg;base64,${data.createImg.img}`} alt="img" />
                            </div>
                            <div className="service-status">
                                <button className={data.statusOption === 'Pending' ?
                                    'btn btn-pending' : 'd-none'
                                }>{data.statusOption}</button>
                                <button className={data.statusOption === 'Done' ?
                                    'btn btn-done' : 'd-none'
                                }>{data.statusOption}</button>
                               <button className={data.statusOption === 'onGoing' ?
                                    'btn btn-onGoing' : 'd-none'
                                }>{data.statusOption}</button>
                            </div>
                        </div>
                        <div className="service-info-sec">
                            <h3>{data.courseCategory}</h3>
                            <p>{data.projectDetails}</p>
                            <div className="d-flex justify-content-between responsive-mobile-flex">
                                <span className="text-danger">{data.name}</span>
                                <span>Price: $ <span className="text-success">{data.price}</span></span>
                            </div>
                        </div>
                    </div>
                </Col>
            ) : <LoadingSpinner />}
        </Row>
    );
};

export default ClientService;