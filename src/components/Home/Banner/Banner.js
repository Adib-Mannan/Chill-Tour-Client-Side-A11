import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/banner-1.jpg';
import banner2 from '../../../image/banner/banner-2.jpg';
import banner3 from '../../../image/banner/banner-3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>MAKE YOU FREE TO TRAVEL WITH US</h1>
                        <p>Check our website and take your package </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>EXPLORE YOUR LIFE TRAVEL WHERE YOU WANT </h1>
                        <p>Choose the best destination.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>MAKE YOUT TRIP FUN AND MEMORABLE WHERE YOU WANT</h1>
                        <p>Feel Free To travel</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;