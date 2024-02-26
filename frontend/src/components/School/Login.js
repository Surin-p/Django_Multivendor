//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolLogin(props) {
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
                                        <input type="text" className="form-control" id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="Password" />
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