//Packages
import { Link } from 'react-router-dom';
//Assets

import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Addresses(props) {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <div className='row'>
                            <div className='col-12'>
                                <Link to = "/customer/add-address" className='btn btn-outline-danger mb-4 float-end'>
                                    <i class="fa-solid fa-circle-plus"></i> Add Address
                                </Link>
                            </div>
                        </div>
                    <h3 className='mb-4'>Address List</h3>
                        <div className='row'>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                            <i className="fa-solid fa-circle-check text-success fa-2x mb-2"></i><br></br>
                                            Chabil, Kathmandu, Nepal
                                        </h6>      
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                            <span className='badge bg-danger mb-2'>Mark Default</span><br></br>
                                            Bhaktapur, Kathmandu, Nepal
                                        </h6> 
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                            <span className='badge bg-danger mb-2'>Mark Default</span><br></br>
                                            Dumre, Palpa, Nepal
                                        </h6> 
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <div className='card-body text-muted'>
                                        <h6>
                                            <span className='badge bg-danger mb-2'>Mark Default</span><br></br>
                                            Lazimpat, Kathmandu, Nepal
                                        </h6> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>

                </div>

            </div>
        </section>
    )
}