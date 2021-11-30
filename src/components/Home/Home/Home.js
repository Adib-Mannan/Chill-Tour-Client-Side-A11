import React from 'react';
import Album from '../Album/Album';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <WhyChoose></WhyChoose>
            <Album></Album>
        </div>
    );
};

export default Home;