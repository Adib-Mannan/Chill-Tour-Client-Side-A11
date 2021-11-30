import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    const Clock = <FontAwesomeIcon icon={faClock} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    return (
        <div>
            <div className='row mt-5 pt-5' >
                <div className="col-lg-6 shadow-lg p-5">
                    <h3>KEEP IN TOUCH</h3>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="name"
                            placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Name</label>
                    </Form.Floating>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone" />
                        </Col>
                    </Row>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="subject"
                            placeholder="subject"
                        />
                        <label htmlFor="floatingPasswordCustom">Subject</label>
                    </Form.Floating>
                    <Form.Floating className='mt-3'>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="message"
                            placeholder="message"
                            style={{ height: '100px' }}
                        />
                        <label htmlFor="floatingPasswordCustom">Message</label>
                    </Form.Floating>
                    <Button className='mt-4 custom-bg-color text-white' variant="custom-bg-color" type="submit">
                        Submit
                    </Button>
                </div>
                <div className="col-lg-6 mt-5">
                    <h5>Contact Us</h5>
                    <h2>INFORMATION ABOUT US</h2>
                    <p>You can Send us Email or call us for any kind booking help or information . or you can take package from our package section .Enjoy . Feel Free to Travel.</p>
                    <div>
                        <h5><span className='custom-color'>{phone}</span> +880 17169696900</h5>
                        <h5><span className='custom-color'>{email}</span>  info@chillworld.com</h5>
                        <h5><span className='custom-color'>{location}</span> Dhanmondi-27 , Dhaka </h5>
                    </div>
                    <hr className='me-5 ' />
                    <div>
                        <div>
                            <h3>Working Hour</h3>
                            <div className='d-lg-flex'>
                                <h6><span className='custom-color'>{Clock}</span>  Mon - Thurs : 9.00 A.M - 5.00 P.M</h6>

                                <h6 className='ms-4'><span className='custom-color'>{Clock}</span>  Mon - Thurs : 9.00 A.M - 5.00 P.M</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;