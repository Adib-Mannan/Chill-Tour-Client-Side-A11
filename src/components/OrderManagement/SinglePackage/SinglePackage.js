import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const SinglePackage = () => {
    const clock = <FontAwesomeIcon icon={faClock} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const star = <FontAwesomeIcon icon={faStar} />
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState([]);

    useEffect(() => {
        const url = `https://protected-mountain-05899.herokuapp.com/packages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, [id]);

    return (
        <div className='m-5 pt-5'>
            <h1>Order Now</h1>
            <div className="row">
                <div className="col-lg-6">
                    <Card>
                        <Card.Img variant="top" src={singlePackage.img} />
                        <Card.Body>
                            <p>{singlePackage.reviews} Reviews <span className='star-color'>{star}{star}{star}{star}{star}</span></p>
                            <Card.Title>{singlePackage.name}</Card.Title>
                            <div>
                                <h5 className='custom-color'>$<span className='fw-bold'>{singlePackage.price}</span> | Per Person</h5>
                                <h6 className=''><span className='custom-color'>{clock}</span>  {singlePackage.day}</h6>
                                <h6 className=''><span className='custom-color'>{map}</span>  {singlePackage.location}</h6>
                                <p>Details : {singlePackage.detail}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <PlaceOrder key={singlePackage._id} singlePackage={singlePackage}></PlaceOrder>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;