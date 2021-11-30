import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import './Package.css';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const clock = <FontAwesomeIcon icon={faClock} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const star = <FontAwesomeIcon icon={faStar} />
    const { name, price, img, day, reviews, location, _id } = props.package;
    return (
        <div>
            <Col>
                <Card style={{ height: '32rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <p>{reviews} Reviews <span className='star-color'>{star}{star}{star}{star}{star}</span></p>
                        <Card.Title>{name}</Card.Title>

                        <div>
                            <h5 className='custom-color'>$<span className='fw-bold'>{price}</span> | Per Person</h5>
                            <h6 className=''><span className='custom-color'>{clock}</span>  {day}</h6>
                            <h6 className=''><span className='custom-color'>{map}</span>  {location}</h6>
                            <Link to={`/packages/${_id}`}><Button className='custom-bg-color text-white' variant=''>Buy Now</Button></Link>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;