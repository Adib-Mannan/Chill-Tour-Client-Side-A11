import React from 'react';

const ManageSingleOrder = (props) => {
    const { _id, Name, Package, PackageId, Email, Address, City, Number } = props.order;
    return (
        <div>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">Order ID:  {_id}</div>
                <div className="card-body">
                    <h5 className="card-title">Package : {Package}</h5>
                    <div className='card-text'>
                        <h5>Package Id : {PackageId} </h5>
                        <h6>Name : {Name}</h6>
                        <h6>Email : {Email}</h6>
                        <h6>Address : {Address}</h6>
                        <h6>City : {City}</h6>
                        <h6>Number : {Number}</h6>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleOrder;