//Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import SchoolSidebar from './Sidebar';
import { useEffect, useState } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Customer() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const vendor_id = localStorage.getItem('vendor_id');
    const [customerList, setCustomerList] = useState([]);

    useEffect(()=>{
        fetchData(baseUrl+'vendor/'+vendor_id+'/customers/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>{
            setCustomerList(data.results);
        });
    }

    console.log(customerList);

    function showConfirm(customer_id){
        var delete_confirm = window.confirm('Are you Sure you want to delete this product?');
        console.log(delete_confirm);
        if(delete_confirm){
            fetch(baseurl+'delete-customer-orders/'+customer_id,{
                method:'DELETE'
            })
            .then((response) => {
                console.log(response);
                if(response.status=204){
                    fetch(baseUrl+'seller/customer/'+customer_id+'/orderitems');
                }
            });    
        }
    }
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
                                        {
                                            customerList.map((item, index)=>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>
                                                    <p><Link>{item.user.username}</Link></p>
                                                </td>

                                                <td>{item.user.email}</td>
                                                <td>{item.customer.phone}</td>
                                                <td> 
                                                    <Link to={`seller/customer/${item.customer.id}/orderitems/`}><button className='btn btn-danger btn-sm ms-1'>Orders</button></Link>
                                                    <button onClick={()=>showConfirm(item.customer.id)} className='btn btn-danger btn-sm ms-1'>Remove from list</button>      
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