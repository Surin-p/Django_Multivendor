//Packages
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//Assets
import logo from '../../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Register(props) {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [registerFormData, setRegisterFormData] = useState({
        "firstname": '',
        "lastname": '',
        "email": '',
        "username": '',
        "password":'',
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
        formData.append('firstname', registerFormData.firstname);
        formData.append('lastname', registerFormData.lastname);
        formData.append('email', registerFormData.email);
        formData.append('username', registerFormData.username);
        formData.append('password', registerFormData.password);
        
        //Submit Data
        axios.post(baseUrl + 'customer/register/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                } else {
                    localStorage.setItem('customer_register', true);
                    localStorage.setItem('customer_username', response.data.user);
                    setFormError(false);
                    setErrorMsg('');
                }
                
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const buttonEnable = (registerFormData.firstname !== '') && (registerFormData.lastname !== '') && (registerFormData.email !== '') && (registerFormData.username !== '') && (registerFormData.password !== '') 
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
                                <form>
                                    <div className="mb-3">
                                        <label for="firstname" className="form-label">First Name</label>
                                        <input type="text" name="firstname" className="form-control" value={registerFormData.firstname} onChange={inputHandler} id="firstName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastname" className="form-label">Last Name</label>
                                        <input type="text" name="lastname" className="form-control" value={registerFormData.lastname} onChange={inputHandler} id="lastName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={registerFormData.email} onChange={inputHandler} id="email"/>
                                        <div id="emailHelp" name="email" className="form-text">We'll never share your email with anyone else.</div>
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