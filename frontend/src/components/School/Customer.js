//Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import SchoolSidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Customer() {
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                                                <p><Link>Ram</Link></p>
                                            </td>

                                            <td>Ram@gmail.com</td>
                                            <td>58888888888888</td>
                                            <td> 
                                                <button className='btn btn-danger btn-sm ms-1'>Orders</button>
                                                <button className='btn btn-danger btn-sm ms-1'>Remove from list</button>    
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                                                <p><Link>Haree</Link></p>
                                            </td>

                                            <td>Hari@gmail.com</td>
                                            <td>544444444444</td>
                                            <td> 
                                                <button className='btn btn-danger btn-sm ms-1'>Orders</button>
                                                <button className='btn btn-danger btn-sm ms-1'>Remove from list</button>      
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