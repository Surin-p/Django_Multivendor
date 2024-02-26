//Packages
import { Link } from "react-router-dom"
import logo from '../../logo.svg';
import SchoolSidebar from "./Sidebar"
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolProducts() {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                     <SchoolSidebar/>
                    </div>
                    <div className='col-md-9 col-2 mb-2'>
                        <div className='row'>

                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <td colSpan="5">
                                                <Link to = "/seller/add-product" className='btn btn-outline-danger mb-4 float-end'>
                                                    <i class="fa-solid fa-circle-plus"></i> Add Product
                                                </Link>
                                            </td>
                                        </tr>
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
                                            <td><span className='text-success'><i className="fa-solid fa-circle-check"></i>Sold</span></td>
                                            <td>
                                                <Link to="/" className="btn btn-success">View</Link>
                                                <Link to="/" className="btn btn-primary ms-1">Edit</Link>
                                                <Link to="/" className="btn btn-danger ms-1">Delete</Link>
                                                
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
                                                <Link to="/" className="btn btn-success">View</Link>
                                                <Link to="/" className="btn btn-primary ms-1">Edit</Link>
                                                <Link to="/" className="btn btn-danger ms-1">Delete</Link>
                                                
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