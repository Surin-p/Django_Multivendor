//Packages
import { Link } from "react-router-dom"
import logo from '../../logo.svg';
import SchoolSidebar from "./Sidebar"
import { useEffect, useState } from "react";
//If you ever remove the column from other while referencing single product
//Product columns her cola and row

export default function SchoolProducts() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        fetchData(baseUrl+'products/');
        
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data)=>{
            setProductData(data.results);
        });
    }

    console.log(productData);
    function showConfirm(product_id){
        var delete_confirm = window.confirm('Are you Sure you want to delete this product?');
        console.log(delete_confirm);
        if(delete_confirm){
            fetch(baseurl+'product/'+product_id,{
                method:'DELETE'
            })
            .then((response) => {
                console.log(response);
                if(response.status=204){
                    fetch(baseurl+'products/');
                }
            });    
        }
    }
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
                                                    <i class="fa-solid fa-circle-plus"></i> Product
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productData.map((product, index)=>
                                            <tr>
                                                <td>{product.id}</td>
                                                <td><Link to={`/seller/update-product/${product.id}`}>{product.title}</Link></td>
                                                <td>Rs.{product.price}</td>
                                                <td>
                                                    <Link to={`/seller/update-product/${product.id}`} className="btn btn-success ms-1">Edit</Link>
                                                    <Link href={`/seller/delete-product/${product.id}`} onClick={()=>showConfirm(product.id)} className="btn btn-danger ms-1">Delete</Link>
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