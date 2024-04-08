//Packages
import { Link } from 'react-router-dom';
//Assets
import Sidebar from './Sidebar';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function UpdateProduct() {
    const {product_id} = useParams();
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const vendor_id = localStorage.getItem('vendor_id');
    const [isFeatureImageSelected, setIsFeatureImageSelected] = useState(false);
    const [isMultipleImageSelected, setIsMultipleImageSelected] = useState(false);
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
        'product_imgs':'',
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
        if(event.target.name == 'image'){
            setIsFeatureImageSelected(true);
        }
    }

    const multipleFileHandler = (event) =>{
        var files = event.target.files;
        if(files.length>0){
            setIsMultipleImageSelected(true);
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
        if(isFeatureImageSelected){
            formData.append('image', productData.image);
        }
        

        //submit data
        axios.patch(baseUrl+'product/'+product_id+'/',formData,{
            header:{
                'content-type': 'multipart/form-data'
            }
        })
        .then(function (response){
            console.log(response);
            if(response.status==200){
                setErrorMsg('')
                setSuccessMsg(response.statusText);
                
                console.log(isMultipleImageSelected);
                if(isMultipleImageSelected){
                for (let i=0;i < productImgs.length; i++)
                {
                    const imageFormData = new FormData();
                    imageFormData.append('product', response.data.id);
                    imageFormData.append('image', productImgs[i]);
                    //Submit multiple images
                    axios.post(baseUrl + 'products-imgs/?from_update=1', imageFormData)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    //End Upload Images 
                    setProductImgs('');
                }
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
        fetchProductData(baseUrl+'product/'+product_id);
        console.log(categoryData);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data)=>{
            setCategoryData(data.results);
        });
    }

    

    function fetchProductData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data)=>{
            setProductData({
                'vendor': vendor_id,
                'category':data.category,
                'title':data.title,
                'slug':data.slug,
                'price':data.price,
                'detail':data.detail,
                'tags':data.tags,
                'image':data.image,
                'product_imgs':data.product_imgs,
            });
        });
    }
    console.log(productData)
    return (
        <section>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Update Product</h3>
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
                                            {categoryData.map((item, index) =><option selected={item.id==productData.category} value={item.id}>{item.title}</option>)}
                                              
                                            
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
                                        <textarea className="form-control" name='tags' value={productData.tags} rows="8" id="Tags" onChange={inputHandler} ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="ProductImg" className="form-label">Featured Image</label>
                                        <input type="file" name='image' className="form-control" id="ProductImg" onChange={fileHandler} />
                                        <img src={productData.image} className='img rounded border mt-2' width="200"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Product_Imgs" className="form-label">Product Image</label>
                                        <input type="file" multiple name='product_imgs' className="form-control" id="ProductImg" onChange={multipleFileHandler} />
                                        {productData.product_imgs && productData.product_imgs.map((img, val)=><img src={img.image} className='img rounded border m-2' width="200"/>)}
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