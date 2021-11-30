import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageSingleOrder from './ManageSingleOrder';
import { Button } from 'react-bootstrap';


const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://protected-mountain-05899.herokuapp.com/orders')
            .then(res => res.json())
            .then(result => setOrders(result))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Admin Are You sure , You want to delete?');
        if (proceed) {
            const url = `https://protected-mountain-05899.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }
    return (
        <div className='m-5 pt-5'>
            <h1 className='pb-4'>Manage All order </h1>

            <Row xs={1} md={3} className="g-4">
                {orders.map(order => <ManageSingleOrder key={order._id} order={order}>
                    <Button variant="secondary" onClick={() => handleDelete(order._id)}>Delete</Button>
                </ManageSingleOrder>)}
            </Row>
        </div>
    );
};

export default ManageAllOrder;