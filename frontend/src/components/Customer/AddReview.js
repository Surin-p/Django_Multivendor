import { Form, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api'
export default function AddReview(){
    const {product_id} = useParams();
    var customer_id = localStorage.getItem('customer_id');
    const [errorMsg, setErrorMsg] = useState();
    const [successMsg, setSuccessMsg] = useState(); 

    const [reviewFormData, setReviewFormData] = useState({
        'reviews':'',
        'rating':1
    });

    const inputHandler = (event)=>{
        setReviewFormData({
            ...reviewFormData,
            [event.target.name]:event.target.value
        });
    };

    const submitHandler = () =>{
        const formData = new FormData();
        formData.append('reviews', reviewFormData.reviews)
        formData.append('rating', reviewFormData.rating);
        formData.append('customer', customer_id);
        formData.append('product', product_id);

        //submit data
        axios.post(baseUrl+'/productrating/', formData)
        .then(function(response){
            if(response.status!=201){
                setErrorMsg('Data is not saved');
                setSuccessMsg('');
            }else{
                setErrorMsg('');
                setSuccessMsg('Data saved');
                setReviewFormData({
                    'reviews':'',
                    'rating':'',
                });
            }
        })
        .catct(function(error){
            console.log(error);
        });

    }

    const disableBtn = (reviewFormData.reviews=='' || reviewFormData.rating=='');
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                       <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                    
                        <h3 className='mb-4'>Add Review</h3>
                        <div className='card'>
                            <div className='card-body'>
                            {errorMsg && <p className='alert alert-danger'>{errorMsg}</p>}
                            {successMsg && <p className='alert alert-success'>{successMsg}</p>}
                                <div className="mb-3">
                                    <label for="review" className="form-label">Review</label>
                                    <textarea className="form-control" name='reviews' rows="8" id="Review" value={reviewFormData.reviews} onChange={inputHandler}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="rating" className="form-label">Rating</label>
                                    <select className='form-control' name='rating' id='Rating' onChange={inputHandler}>
                                           
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                    </select>
                                </div>

                                    
                                <button type="button" disabled={disableBtn} onClick={submitHandler} className="btn btn-danger">Submit</button>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )

}