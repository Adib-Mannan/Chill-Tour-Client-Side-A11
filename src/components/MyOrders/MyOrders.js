import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyOrder from './MyOrder';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://protected-mountain-05899.herokuapp.com/orders')
            .then(res => res.json())
            .then(result => {
                const myOrder = result.filter(order => order.Email === user.email)
                setOrders(myOrder)
            })
    }, [user.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure , You want to delete?');
        if (proceed) {
            const url = `https://protected-mountain-05899.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted')
                        const remaining = orders.filter(Order => Order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }

    return (
        <div className='m-5 pt-5'>
            <h1>My Orders</h1>
            <Row xs={1} md={3} className="g-4">
                {orders.map(order => <MyOrder key={order._id} order={order}>
                    <Button variant="secondary" onClick={() => handleDelete(order._id)}>Delete</Button>
                </MyOrder>)}
            </Row>
        </div>
    );
};

export default MyOrders;