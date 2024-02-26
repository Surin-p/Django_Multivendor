//Packages
import { Link } from 'react-router-dom';
//Assets
import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function AddProduct(props) {
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
                                        <select className='form-control'>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="Title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="Title"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="Price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="Price"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="Description" className="form-label">Description</label>
                                        <textarea className="form-control" id="Description"></textarea>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="profileImage" className="form-label">Product Image</label>
                                        <input type="file" className="form-control" id="profileImage" accept="image/*" />
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