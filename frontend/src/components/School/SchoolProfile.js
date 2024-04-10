//Packages
import { Link } from 'react-router-dom';
//Assets

import SchoolSidebar from './Sidebar';
import { useEffect, useState } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolProfile(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [profileData, setProfileData] = useState({
        'user_id':'',
        'username':'',
        'email':'',
        'mobile':'',
        'p_image':''
    })
    const vendor_id = localStorage.getItem('vendor_id');
    console.log(vendor_id);

    useEffect(()=>{
        fetchData(baseUrl+'/vendor/'+customer_id);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .thrn((data)=>{
            setProfileData({
                'user_id':data.user.id,
                'username':data.user.username,
                'email':data.user.email,
                'mobile':data.phone,
                'address':data.address,
                'p_image':data.profile_img,
            });
        });
    }

    const inputHandler = (event) =>{
        setProfileData({
            ...profileData,
            [event.target.name]:event.target.value
        })
    }

    const handleFileChange=(event)=>{
        setProfileData({
            ...profileData,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('user', profileData.user_id);
        formData.append('phone', profileData.phone);
        formData.append('address', profileData.address);
        formData.append('profile_img', profileData.p_image);
        
        //submit
        axios.put(baseUrl+'/vendor/'+vendor_id+'/',formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error)
        });

        //submit Data
        const formUserData = new FormData();
    
        formUserData.append('username', profileData.username);
        formUserData.append('email', profileData.email);
        formUserData.append('address', profileData.address);
        formUserData.append('first_name', profileData.first_name);
    }
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <SchoolSidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Welcome <span className='text-primary'>{profileData.username}</span></h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">School Name</label>
                                        <input type="text" value={profileData.username}  onChange={inputHandler}  name="username" className="form-control" id="Username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                    <div>
                                        <p>
                                            <img src={profileData.p_image} width="100" class="mt-1 rounded"/>
                                        </p>                                 
                                        <label for="profileImage" className="form-label">Profile Image</label>
                                        <input type="file" name="p_image" onChange={handleFileChange} className="form-control" id="profileImage" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" value={profileData.email}    className="form-control" id="Email"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Address" className="form-label">Address</label>
                                        <input type="text" value={profileData.address}  onChange={inputHandler}  className="form-control" id="Address"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="mobile" className="form-label">Mobile</label>
                                        <input type="number" value={profileData.mobile}  onChange={inputHandler}  name="mobile" className="form-control" id="Mobile"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" value={profileData.mobile}  onChange={inputHandler} className="form-control" id="Password" />
                                    </div>
                                    
                                    <button type="submit" onClick={submitHandler} className="btn btn-danger">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}