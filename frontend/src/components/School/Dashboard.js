//Packages
import { useEffect, useState } from "react";
import SchoolSidebar from "./Sidebar"
import { Link } from "react-router-dom";
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SchoolDashboard() {
    const baseUrl='http://127:0.0.1:8000/api/'
    const [vendorData, setVendorData] = useState({
        'totalProducts':0,
        'totalOrders':0,
        'totalCustomers':0,
    });

    const vendor_id = localStorage.getItem('vendor_id');
    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>{
            setVendorData(data.results);
        });
    }

    useEffect(()=>{
        fetchData(baseUrl+'/vendor/'+'vendor_id');
    },[]);
    
    fetchData(baseurl+'vendor/'+vendor_id+'/dashboard/');
    console.log(vendorData);
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                     <SchoolSidebar/>
                    </div>
                    <div className='col-md-9 col-2'>
                        <div className='row'>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Products</h4>
                                <h5><Link to='/seller/products' className='text-muted'>{vendorData.totalProducts}</Link></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Orders</h4>
                                <h5><Link tp='/sellet/orders' className='text-muted'>{vendorData.totalOrders}</Link></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Customers</h4>
                                <h5><Link tp='/seller/customers' className='text-muted'>{vendorData.totalCustomers}</Link></h5>
                            </div>
                        </div>
                        
                        </div>
                        
                     
                        </div>
                </div>
                
            </div>
        </section>
    )
}