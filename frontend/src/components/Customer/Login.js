//Packages
import { useState } from 'react';
import axios from 'axios';
//http client use axios third party api to call http
//Assets
import logo from '../../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
//button and submit has different function
export default function Login(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        "username": '',
        "password":'',
    })

    //arrow function for input handler
    const inputHandler = (event) => {
        setLoginFormData(
            {
                ...loginFormData,
                [event.target.name]: event.target.value
            }
        )
    }

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);
        
        //Submit Data
        axios.post(baseUrl + 'customer/login/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                } else {
                    localStorage.setItem('customer_login', true);
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
    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        window.location.href='/customer/dashboard'
    }
    const buttonEnable = (loginFormData.username !== '') && (loginFormData.password !== '') 
      
    
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-6 col-12 mt-5'>
                        <img src={logo} className="img-thumbnail" alt="..." />
                    </div>
                    <div className='col-md-6 col-12'>
                        <h3 className='mb-4'>Login</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" name = "username" value={loginFormData.username} onChange={inputHandler} className="form-control" id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password"  className="form-label">Password</label>
                                        <input type="password" name = "password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="Password" />
                                    </div>
                                    
                                    <button type="button" disabled={!buttonEnable } onClick={ submitHandler}  className="btn btn-danger">Submit</button>
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