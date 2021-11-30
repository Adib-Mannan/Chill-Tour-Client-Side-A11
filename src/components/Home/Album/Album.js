import React from 'react';
import album1 from '../../../image/Album/album-1.jpg'
import album2 from '../../../image/Album/album-2.jpg'
import album3 from '../../../image/Album/album-3.jpg'
import album4 from '../../../image/Album/album-4.jpg'
import album5 from '../../../image/Album/album-5.jpg'
import album6 from '../../../image/Album/album-6.jpg'
import album7 from '../../../image/Album/album-7.jpg'
import album8 from '../../../image/Album/album-8.jpg'
import album9 from '../../../image/Album/album-9.jpg'

const Album = () => {
    return (
        <div className='mt-5 pt-5'>
            <h1>OUR MOST POPULAR ADVENTURES</h1>
            <h5>MODERN AND BEAUTIFUL</h5>
            <div>
                <div className="row m-5 g-4">
                    <div className="col-lg-3">
                        <img className='w-100' src={album1} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album2} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album3} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album4} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album5} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album6} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album7} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album8} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className='w-100' src={album9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;