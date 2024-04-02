//Packages
import { Link } from 'react-router-dom';
import SingleProduct from './Customer/SingleProduct';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function ProductDetail() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productData, setProductData] = useState();
   
    //for searching url parameters
    const { product_slug, product_id } = useParams();
    //The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.
    useEffect(() => {
        
        console.log(baseurl)
    }, []); //In our case, we're fetching initial data for our component.if dependency use infinite loop By omitting dependencies from the useEffect hook, we ensure that the effect runs only once when the component mounts, and not again on subsequent re-renders. This is suitable for fetching initial data that doesn't depend on any props or state changes.
    function fetchData(baseurl) {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            console.log('This is Result: ',data); // Check the structure of the data
            setProductData(data);
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });   
    }
    if(!productData) return<p>FETCHING DATE...</p>
    console.log('this is product: ', productData);
    return (
        
        <section className="container">
            <div className="row">
                <div className="col-4">
                    {/* <div id="productThumbnailSilder" className="carousel carousel-dark carousel-fade slide border text-white" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#productThumbnailSilder" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#productThumbnailSilder" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#productThumbnailSilder" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                         {productData['product_imgs'].map((img) => 
                                <div className="carousel-item">
                                <img src={img} className="img-thumbnail mb-5" alt="..." />
                                </div>
                            )}
                                  
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                         */} 
                </div>
                
                <div className="col-8">
                        <h3>{ productData.title}</h3>
                        <p>{ productData.detail}</p>
                        <h5 className="card-title">Price:<span className='text-muted'>{ productData.price}</span></h5>
                    <p className='mt-3'>
                        <button title="Buy Now" className='btn btn-success btn-sm'><i className='fa-solid fa-bag-shopping ms-1'></i>Buy Now</button>
                        <button title="Add to Cart" className='btn btn-success btn-sm mx-auto'><i className='fa-solid fa-cart-plus ms-1'></i>Cart</button>
                        <button title="Add to Compare" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced ms-1"></i> Compare</button>
                    </p>
                    <div className='product-tags'>
                        <h5 className='mt-3'>
                            Tags
                        </h5>
                        <p >
                            <Link to="#" className='badge bg-secondary text-white me-1'>Reference</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Reference</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Reference</Link>
                        </p>
                    </div>
                </div>
            </div>            
            {/*Related Products*/ }
            <div id="relatedProductsSlider" className="carousel slide my-4 border text-white p-5 mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                {/*Product Box*/}
                                <SingleProduct title="Asmita Publication" />
                                {/* End Product Box*/}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>   
        </section>
  
    );
}