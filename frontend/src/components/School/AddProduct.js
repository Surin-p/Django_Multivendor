//Packages
import { Link } from 'react-router-dom';
//Assets
import Sidebar from './Sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function AddProduct() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const vendor_id = localStorage.getItem('vendor_id');
    const [categoryData, setCategoryData]=useState([]);
    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');
    const [productData, setProductData] = useState({
        'vendor': vendor_id,
        'category':'',
        'title':'',
        'slug':'',
        'price':'',
        'detail':'',
        'tags':'',
        'image':'',
    });

    const [imgUploadErrorMsg, setImgUploadErrorMsg] = useState('');
    const [imgUploadSuccessMsg, setImgUploadSuccessMsg] = useState('');
    const [productImgs, setProductImgs] = useState([]);

    const inputHandler = (event) =>{
        setProductData({
            ...productData,
            [event.target.name]: event.target.value
        })
    };

    const fileHandler = (event) =>{
        setProductData({
            ...productData,
            [event.target.name]:event.target.files[0]
        })
    }

    const multipleFileHandler = (event) =>{
        var files = event.target.files;
        if(files.length>0){
            setProductImgs(files);
        }
    };

    const submitHandler = ()=>{
        const formData = new FormData();
        formData.append('vendor', productData.vendor);
        formData.append('category', productData.category);
        formData.append('title', productData.title);
        formData.append('slug', productData.slug);
        formData.append('price', productData.price);
        formData.append('detail', productData.detail);
        formData.append('tags', productData.tags);
        formData.append('image', productData.image);

        //submit data
        axios.post(baseUrl+'products/',formData,{
            header:{
                'content-type': 'multipart/form-data'
            }
        })
        .then(function (response){
            console.log(response);
            if(response.status==201){
                setProductData({
                    'vendor': vendor_id,
                    'category':'',
                    'title':'',
                    'slug':'',
                    'price':'',
                    'detail':'',
                    'tags':'',
                    'image':'',
                });
                setErrorMsg('')
                setSuccessMsg(response.statusText);

                for (let i=0;i < productImgs.length; i++)
                {
                    const imageFormData = new FormData();
                    imageFormData.append('product', response.data.id);
                    imageFormData.append('image', productImgs[i]);
                    //Submit multiple images
                    axios.post(baseUrl + 'products-imgs/', imageFormData)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    //End Upload Images 
                    setProductImgs('');
                }
            }else{
                setErrorMsg(response.statusText);
                setSuccessMsg('');
            }
        })
        .catch(function (error){
            console.log(error);
        });
    }

    useEffect(()=>{
        fetchData(baseUrl+'categories/');
        console.log(categoryData);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data)=>{
            setCategoryData(data.results);
        });
    }
    
    return (
        <section>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Add Product</h3>
                        <div className='card'>
                            <div className='card-body'>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                                <form>
                                    <div className="mb-3">
                                        <label for="Category" className="form-label">Category</label>
                                        {productData.category === "" && <p className="text-danger">Please choose an option</p>}
                                        <select className='form-control' name='category' onChange={inputHandler}>
                                            <option value="">--------</option>
                                            {categoryData.map((item, index) => (
                                                <option key={item.id} value={item.id}>{item.title}</option>
                                            ))}  
                                        </select> 
                                    </div>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text" name='title' value={productData.title} className="form-control" id="Title" onChange={inputHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="slug" className="form-label">Slug</label>
                                        <input type="text" name='slug'  value={productData.slug} className="form-control" id="Slug" onChange={inputHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Price" className="form-label">Price</label>
                                        <input type="number" name='price'  value={productData.price} className="form-control" id="Price" onChange={inputHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="detail" className="form-label">Description</label>
                                        <textarea className="form-control"  name='detail' value={productData.detail} rows="8" id="Detail" onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="tags" className="form-label">Tags</label>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="ProductImg" className="form-label">Featured Image</label>
                                        <input type="file" name='image' className="form-control" id="ProductImg" onChange={fileHandler} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Product_Imgs" className="form-label">Product Image</label>
                                        <input type="file" multiple name='product_imgs' className="form-control" id="ProductImg" onChange={multipleFileHandler} />
                                    </div>
                                    <button type="button" onClick={submitHandler} className="btn btn-danger">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}