//Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Compare() {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
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
                                            
                                            <td><button className='btn btn-danger btn-sm'>Remove</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                                                <p><Link>HSCB SEE Collection</Link></p>
                                            </td>
                                            <td>Rs. 550</td>
                                            
                                            <td><button className='btn btn-danger btn-sm'>Remove</button></td>
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