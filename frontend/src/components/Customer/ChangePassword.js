//Packages
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function changePassowrd(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [passwordData, setPasswordData] = useState({
        'password':'',
        'c_password':'',
    })
    const [confirmError, setConfirmError] = useState(false);
    const customer_id = localStorage.getItem('customer_id');
    const inputHandler = (event) =>{
        setPasswordData({
            ...profileData,
            [event.target.name]:event.target.value
        });
        if(passwordData.password!=passwordData.c_password){
            setConfirmError(true);
        }else{
            setConfirmError(false);
        }
    }

    function submitHandler(){
        if(passwordData.password==passwordData.c_password){
            setConfirmError(false);
        }else{
            setConfirmError(true);
        }
        const formData = new FormData();
        formData.append('password', passwordData.password);

        //submit
        axios.post(baseUrl+'/customer-change-password/'+customer_id,formData)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error)
        });

        
    }
    console.log(passwordData)
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                       <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                    {
                        confirmError && <p className='text-danger'>Password should match!!!</p>
                    }
                        <h3 className='mb-4'>Change Password</h3>
                        <div className='card'>
                            <div className='card-body'>
                        
                                
                                <div className="mb-3">
                                    <label for="newPassword" className="form-label">New Password</label>
                                    <input type="password" name='password' onChange={inputHandler} value={passwordData.password} className="form-control" id="newPassword" />
                                </div>
                                <div className="mb-3">
                                    <label for="confirmPassword" className="form-label">Confirm New Password</label>
                                    <input type="password" name='c_password' onChange={inputHandler} value={passwordData.c_password} className="form-control" id="confirmPassword" />
                                </div>

                                    
                                    <button type="button" onClick={submitHandler} className="btn btn-danger">Submit</button>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}