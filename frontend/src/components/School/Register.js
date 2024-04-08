//Context api: way to pass data through component tree not need to pass
//data from parent to child to child to child
//also we turn parent into content and pass data to all children
//use authentication if user is logged in or not using it

//Packages
import { Link } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';
//Assets
import logo from '../../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolRegister(props) {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        "last_name": '',
        "email": '',
        "phone": '',
        "address": '',
        "username": '',
        "password": '',
        
    })

    //arrow function for input handler
    const inputHandler = (event) => {
        setRegisterFormData(
            {
                ...registerFormData,
                [event.target.name]: event.target.value
            }
        )
    }
    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('email', registerFormData.email);
        formData.append('phone', registerFormData.phone);
        formData.append('address', registerFormData.address);
        formData.append('username', registerFormData.username);
        formData.append('password', registerFormData.password);
        
        //Submit Data
        axios.post(baseUrl + 'vendor/register/', formData)
            .then(function (response) {
                if (response.data.bool === false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                    setSuccessMsg('');
                } else {
                    setRegisterFormData({
                        "first_name": '',
                        "last_name": '',
                        "email": '',
                        "phone": '',
                        "address": '',
                        "username": '',
                        "password": '',
                        
                    })
                    setFormError(false);
                    setSuccessMsg(response.data.msg);
                    setErrorMsg('');
                }
                
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const buttonEnable = (registerFormData.firstname !== '') && (registerFormData.lastname !== '') && (registerFormData.email !== '') && (registerFormData.phone !== '') && (registerFormData.address !== '') &&(registerFormData.username !== '') && (registerFormData.password !== '') 
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-6 col-12 mt-5'>
                        <img src={logo} className="img-thumbnail" alt="..." />
                    </div>
                    <div className='col-md-6 col-12'>
                        <h3 className='mb-4'>Register</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <p className='text-muted'><strong className='text-secondary'>Note:</strong> All the fields are required.</p>
                                {successMsg && <p className='text-success'>{ successMsg}</p>}
                                {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                                <form>
                                    <div className="mb-3">
                                        <label for="firstname" className="form-label">First Name</label>
                                        <input type="text" name="first_name" className="form-control" value={registerFormData.first_name} onChange={inputHandler} id="firstName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastname" className="form-label">Last Name</label>
                                        <input type="text" name="last_name" className="form-control" value={registerFormData.last_name} onChange={inputHandler} id="lastName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" value={registerFormData.email} onChange={inputHandler} id="email"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone Number</label>
                                        <input type="number" name="phone" className="form-control" value={registerFormData.phone} onChange={inputHandler} id="phone"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <textarea type="text" name="address" className="form-control" value={registerFormData.address} onChange={inputHandler} id="address"></textarea>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" name="username" className="form-control" value={registerFormData.username} onChange={inputHandler} id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" value={registerFormData.password} onChange={inputHandler} id="Password" />
                                    </div>
                                    
                                    <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-danger">Submit</button>
                                    {formError &&
                                        <p className='text-danger'>{errorMsg }</p>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}