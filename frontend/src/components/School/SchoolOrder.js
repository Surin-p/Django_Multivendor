//Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import SchoolSidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolOrders() {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <SchoolSidebar />
                    </div>
                    <div className='col-md-9 col-2'>
                        <div className='row'>

                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                                                <p><Link>Asmita Publication</Link></p>
                                            </td>

                                            <td>Rs. 500</td>
                                            <td><span className='text-success'><i className="fa-solid fa-circle-check"></i>Completed</span></td>
                                            <td> 
                                                <div class="dropdown">
                                                    <button class="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Approve</a>
                                                        <a class="dropdown-item" href="#">Sent</a>
                                                        <a class="dropdown-item" href="#">Completed</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                                                <p><Link>HSCB SEE Collection</Link></p>
                                            </td>
                                            <td>Rs. 550</td>
                                            <td><span className='text-danger'><i className="fa-solid fa-circle-xmark"></i>Cancelled</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Approve</a>
                                                        <a class="dropdown-item" href="#">Sent</a>
                                                        <a class="dropdown-item" href="#">Completed</a>
                                                        <a class="dropdown-item" href="#">Cancelled</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                    
                                </table>
                            </div>


                        </div>
                    </div>

                </div>
                </div>
        </section>
    )
}