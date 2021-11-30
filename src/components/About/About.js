import React from 'react';
import banner1 from '../../image/about-banner-1.jpg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faPlaneDeparture, faHotel, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const phoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
    const planeDeparture = <FontAwesomeIcon icon={faPlaneDeparture} />
    const hotel = <FontAwesomeIcon icon={faHotel} />
    const mapMarkerAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className='mt-5 pt-5'>
            <div className='row'>
                <div className='col-lg-6 text-start ps-5'>
                    <h4 className='custom-color'>About Us </h4>
                    <h2>WE'RE TRULY DEDICATED TO MAKE YOUR TRAVEL EXPERIENCE</h2>
                    <br />
                    <p><span className='custom-color'>Chill Tour</span> is a full-service Outbound Tour operator in Bangladesh. The Founder of <span className='custom-color'>Chill Tour</span> is 100% tourism professional with knowledge of most of the destination and services in the world for people to enjoy . Our specialized department with expertise offer a variety of services.Each department works independently to provide the best services to our customers and clients and become the best travel agency in bangladesh ,creating friendship and a long-lasting relationship with our beloved clients</p>
                    <ul>
                        <li>Safety Travel System</li>
                        <li>Expert Trip Planning</li>
                        <li>Right Solution and Guide</li>
                    </ul>
                </div>
                <div className='col-lg-6 pic-size'>
                    <img src={banner1} alt='' />
                </div>
            </div>
            <div className='row m-5' >
                <div className="col-lg-3  border shadow p-5">
                    <h1>{phoneAlt}</h1>
                    <h5>ADVICE SUPPORT</h5>
                    <p>You can Take your advice and support for Tour</p>
                </div>
                <div className="col-lg-3 border p-5">
                    <h1>{planeDeparture}</h1>
                    <h5>AIR TICKETING</h5>
                    <p>You can Buy ticket in discount price .</p>
                </div>
                <div className="col-lg-3 border shadow p-5">
                    <h1>{hotel}</h1>
                    <h5>HOTEL SERVICES</h5>
                    <p>You will get your hotel room in discount price .</p>
                </div>
                <div className="col-lg-3 border p-5">
                    <h1>{mapMarkerAlt}</h1>
                    <h5>TOUR PACKAGE</h5>
                    <p>You will get everything for tour in our package. </p>
                </div>
            </div>
        </div>
    );
};

export default About;