import React from 'react';
import './Form.css';


const Form = (props) => {
    return (

        <div className='formContainer'>
            <form onChange={props.onChange} onClick={props.onClick}>
                <div>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' id='first_name' name='firstname' />
                </div>
                <div>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' id='last_name' name='lastname'/>
                </div>
                <div>
                    <label htmlFor='phonenumber'>Phone Number</label>
                    <input type='number' id='phonenumber' name='phone_number' />
                </div>
                <div>
                    <label htmlFor='role'>Role</label>
                    <select name='role' id='role' type='text' >
                        <option value='teacher'>Teacher</option>
                        <option value='student'>Student</option>
                        <option value='staff'>Staff</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='messages'>Message</label>
                    <textarea id='messages' name='message' cols='20' rows='5'></textarea>
                </div>
                <input type='submit' value='SEND'/>
            </form>
        </div>

    );
};

export default Form;