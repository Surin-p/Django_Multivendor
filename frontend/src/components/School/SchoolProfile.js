//Packages
import { Link } from 'react-router-dom';
//Assets

import SchoolSidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolProfile(props) {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <SchoolSidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Update Profile</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label for="schoolname" className="form-label">School Name</label>
                                        <input type="text" className="form-control" id="schoolname"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="Address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="Address"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastname" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="lastName"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="profileImage" className="form-label">Profile Image</label>
                                        <input type="file" className="form-control" id="profileImage" accept="image/*" />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-danger">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}