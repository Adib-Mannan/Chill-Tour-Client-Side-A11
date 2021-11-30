import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faGlobeEurope, faTag } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
    const award = <FontAwesomeIcon icon={faAward} />
    const global = <FontAwesomeIcon icon={faGlobeEurope} />
    const tag = <FontAwesomeIcon icon={faTag} />
    return (
        <div className='m-5 pt-5'>
            <h1 className='mb-5'>Why Choose</h1>
            <div className="row">
                <div className="col-lg-4">
                    <h1 className="fw-bolder fs-1">{tag}</h1>
                    <h4>Competitive Pricing</h4>
                    <h6>With 500+ suppliers and the purchasing power of 300 million members, mytravel.com can save you more!</h6>
                </div>
                <div className="col-lg-4">
                    <h1 className="fw-bolder fs-1">{award}</h1>
                    <h4>Award-Winning Service</h4>
                    <h6>Travel worry-free knowing that we're here if you needus, 24 hours a day</h6>
                </div>
                <div className="col-lg-4">
                    <h1 className="fw-bolder fs-1">{global}</h1>
                    <h4>Worldwide Coverage</h4>
                    <h6>Over 1,200,000 hotels in more than 200 countries and regions and flights to over 5,000 cities</h6>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default WhyChoose;