//Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import SchoolSidebar from './Sidebar';
import { useEffect, useState } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolOrders() {
    const vendor_id = localStorage.getItem('vendor_id');
    const [orderItems, setOrderItems] = useState([]);
 
    useEffect(()=>{
        fetchData(baseUrl+'vendor/'+vendor_id+'/orderitems');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>{
            setProductData(data.results);
        })
    }

    console.log(orderItems)

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
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderItems.map((item, index)=>
                                             <tr>
                                                <td><Link><img src={item.product.image} className='img-thumbnail' width='80'/></Link>
                                                    <p><Link>{item.product.title}</Link></p>
                                                </td>

                                                <td>Rs. {item.product.price}</td>
                                                <td>
                                                {item.order.status && <span className='text-success'><i className='fa fa-check-circle'>Completed</i></span>}
                                                {!item.order.status && <span className='text-success'><i className='fa fa-spinner'>Pending</i></span>}
                                                </td>
                                                
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
                                            )
                                        }
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