import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import GoBlobsAni from '../../SpringAni/GoBlobsAni';
import './Css/Header.css';

const Review = () => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-hollows-57552.herokuapp.com/all-review`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            })
    }, [])
    return (
        <Row id="Review">
            <GoBlobsAni />
            <div className="services-title text-center mt-5 mb-3 col-sm-12">
                <h3>Clients <span className="text-success">Feedback</span></h3>
            </div>
            {reviewData.length > 0 ? reviewData.map(data =>
                <Col lg={4} md={6} className="p-4" key={data._id}>
                    <div className="Review-card p-3">
                        <div className="Review-title p-3 text-center d-inline-block d-flex align-items-center">
                            <div className="review-img pr-4">
                                <img src={data.image} alt="img" />
                            </div>
                            <div className="review-title-text  text-uppercase">
                                <h4>{data.name}</h4>
                                <p>{data.company}</p>
                            </div>
                        </div>
                        <div className="Review-info ">
                            <p>{data.message}</p>
                        </div>
                    </div>
                </Col>
            ) : <div className="m-auto">
                    <LoadingSpinner />
                </div>
            }
        </Row>
    );
};

export default Review;