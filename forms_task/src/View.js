import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div className='viewContainer'>
            <h1> This is your Input</h1>
            <p>First name:{props.firstname} </p>
            <p>Last Name: {props.lastname}</p>
            <p>Phone Number: {props.phone_number}</p>
            <p>Role: {props.role} </p>
            <p>Message: {props.message}</p>
        </div>
    )
}

export default View;