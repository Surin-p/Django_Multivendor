
//Packages
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function ChangePassword(props) {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                       <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Change Password</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                <div className="mb-3">
                                    <label for="oldPassword" className="form-label">Old Password</label>
                                    <input type="password" className="form-control" id="oldPassword" />
                                </div>
                                <div className="mb-3">
                                    <label for="newPassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="newPassword" />
                                </div>
                                <div className="mb-3">
                                    <label for="confirmPassword" className="form-label">Confirm New Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" />
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