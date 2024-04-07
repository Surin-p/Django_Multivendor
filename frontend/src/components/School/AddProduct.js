//Packages
import { Link } from 'react-router-dom';
//Assets
import Sidebar from './Sidebar';
import { useState } from 'react';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function AddProduct(props) {
    const [productData, setProductData] = useState({
        'category':'',
        'vendor':'',
        'title':'',
        'slug':'',
        'detail':'',
        'tags':'',
        'image':'',
        'product_file':''
    })

    const inputHandler = (event) =>{
        setProductData({
            ...productData,
            [event.target.name]: event.target.value
        })
    };

    const fileHandler = (event) =>{
        setProductData({
            ...productData,
            [event.target.name]: event.target.files[0]
        })
    };

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
                                <form>
                                    <div className="mb-3">
                                        <label for="Category" className="form-label">Category</label>
                                        <select className='form-control' name='category' onChange={inputHandler}>
                                            <option value = 'nursary'>Nursary</option>
                                            <option value = 'lkg'>L.K.G</option>
                                            <option value = 'ukg'>U.K.G</option>
                                            <option value = 'primary'>Primary</option>
                                            <option value = 'secondary'>Secondary</option>
                                            <option value = 'reference'>Reference Books</option>
                                            <option value = 'dictionary'>Dictionary</option>
                                        </select>
                                        
                                    </div>
                                    {/* <div className="mb-3">
                                        <label for="Category" className="form-label">Primary</label>
                                        <select className='form-control' name='category' onChange={inputHandler}>
                                            <option value = 'one'>one</option>
                                            <option value = 'two'>two</option>
                                            <option value = 'three'>three</option>
                                            <option value = 'four'>four</option>
                                            <option value = 'five'>five</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Category" className="form-label">Secondary</label>
                                        <select className='form-control' name='category' onChange={inputHandler}>
                                            <option value = 'one'>one</option>
                                            <option value = 'two'>two</option>
                                            <option value = 'three'>three</option>
                                            <option value = 'four'>four</option>
                                            <option value = 'five'>five</option>
                                            
                                        </select>
                                        
                                    </div> */}
                                    <div className="mb-3">
                                        <label for="slug" className="form-label">Slug</label>
                                        <input type="text" value={productData.slug} className="form-control" id="slug" onChange={inputHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Price" className="form-label">Price</label>
                                        <input type="number" value={productData.price} className="form-control" id="Price" onChange={inputHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Description" className="form-label">Description</label>
                                        <textarea className="form-control" value={productData.detail} rows="8" id="Description" onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="tags" className="form-label">Tags</label>
                                        <textarea className="form-control" value={productData.tags} rows="8" id="Tags" onChange={inputHandler} ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="ProductImg" className="form-label">Featured Image</label>
                                        <input type="file" className="form-control" value={productData.image} id="ProductImg" accept="image/*" onChange={fileHandler} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Product_File" className="form-label">Product File</label>
                                        <input type="file" value={productData.product_file} className="form-control" id="Product_File" onChange={fileHandler}/>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}