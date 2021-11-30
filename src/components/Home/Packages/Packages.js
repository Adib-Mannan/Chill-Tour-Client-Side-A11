import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://protected-mountain-05899.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id='packages' className='m-5 pt-5'>
            <div className='mb-5'>
                <h5 className='text-gray'>FEATURED TOURS</h5>
                <h3>POPULAR PACKAGES PLANS</h3>
            </div>
            <Row xs={1} md={3} className="g-4">
                {packages.map(pack => <Package key={pack._id} package={pack}></Package>)}
            </Row>

        </div>
    );
};

export default Packages;