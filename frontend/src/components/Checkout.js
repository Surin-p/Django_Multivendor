//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Checkout(props) {
  return (
    <section>
      
        <div className='container mt-4'>
            <h3 className='mb-4'>All Item</h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                            <p><Link>Asmita Publication</Link></p>
                            </td>
                            <td>Rs. 500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><Link><img src={logo} className="img-thumbnail" width="80" alt="..." /></Link>
                            <p><Link>HSCB SEE Collection</Link></p>
                            </td>
                            <td>Rs. 550</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th>Rs: 1050</th>
                        </tr>
                        <tr>
                            <td colSpan='3' align='right'>
                                <Link className='btn btn-danger ms-2'>Continue to Shop</Link>
                                <Link className='btn btn-danger ms-2'>Proceed to Checkout</Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
                </div>
            
            </div>
            
        </div>
    </section>
  )
}