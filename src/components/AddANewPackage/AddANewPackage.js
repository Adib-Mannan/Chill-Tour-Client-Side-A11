import React from 'react';
import { useForm } from 'react-hook-form';
import './AddANewPackage.css'

const AddANewPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://protected-mountain-05899.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Added')
                    reset();
                }
            })
        console.log(data)
    }
    return (
        <div className='form-style mt-5 pt-5'>
            <h1>Add A New Package</h1>
            <form className='package-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name'  {...register("name", { required: true })} />
                <input type='number' placeholder='price' {...register("price", { required: true })} />
                <input placeholder='img url' {...register("img", { required: true })} />
                <input type='number' placeholder='day' {...register("day", { required: true })} />
                <input type='number' placeholder='reviews'  {...register("reviews")} />
                <input placeholder='location' {...register("location", { required: true })} />
                <input placeholder='detail' {...register("detail", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="Submit" className='custom-bg-color text-white' value='ADD' />
            </form>
        </div>
    );
};

export default AddANewPackage;