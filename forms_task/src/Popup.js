import React from 'react';
import './Popup.css';

const Popup = (props) => {
    return (
        <div className='popupContainer1'>
             <div className='popupContent'> 
            <h1> Check your output</h1>
            <p>First name:{props.firstname} </p>
            <p>Last Name: {props.lastname}</p>
            <p>Phone Number: {props.phone_number}</p>
            <p>Role: {props.role} </p>
            <p>Message: {props.message}</p>
            </div>
        </div>
    )

}

export default Popup;