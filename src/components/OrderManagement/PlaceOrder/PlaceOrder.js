import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { name } = props.singlePackage;
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://protected-mountain-05899.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully')
                    reset();
                }
            })
        console.log(data);

    }
    return (
        <div className='form-style'>
            <h1>Place Order </h1>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("Name")} />

                <input defaultValue={user.email} {...register("Email", { required: true })} />
                <input defaultValue={name} {...register("Package")} />
                <input placeholder='Address' {...register("Address")} />
                <input placeholder='City'  {...register("City")} />
                <input placeholder='Number' {...register("Number")} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="Submit" className='custom-bg-color text-white' value='Buy Now' />
            </form>
        </div>
    );
};

export default PlaceOrder;