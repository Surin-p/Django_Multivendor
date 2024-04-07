import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext, CartContext } from '../Context';
export default function ProductDetail() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    //const [productTags, setProductTags] = useState([]);
    //const [relatedProducts, setRelatedProducts] = useState([]);
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    //for searching url parameters
    const { product_slug, product_id } = useParams();
    const {cartData, setCartData} = useContext(CartContext);
    const userContext = useContext(UserContext);
    
    
    //The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.
    useEffect(() => {
        fetchData(baseUrl+'/product/'+product_id);
       // fetchRelatedData(baseUrl+'/related-products/'+product_id);
        checkProductInCart(product_id);
    }, [product_id]); //In our case, we're fetching initial data for our component.if dependency use infinite loop By omitting dependencies from the useEffect hook, we ensure that the effect runs only once when the component mounts, and not again on subsequent re-renders. This is suitable for fetching initial data that doesn't depend on any props or state changes.
    
    //checking the cart in localstorage if there is item in cart the remove from cart will be shown
    function checkProductInCart(product_id){
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        if(cartJson!==null){
            cartJson.map((cart) => {
                if(cart!==null && cart.product.id === product_id){
                    setCartButtonClickStatus(true);
                }
            });
        }
    }
    function fetchData(baseurl) {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            setProductData(data);
            setProductImgs(data.product_imgs);
           // setProductTags(data.tag_list);
            
          }) 
    }

    // function fetchRelatedData(baseurl) {
    //     fetch(baseurl)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log('This is Related ProductResult: ',data); // Check the structure of the data
    //         setRelatedProducts(data.results);
    //       })
    // }
    // if(!productData) return<p>FETCHING DATE...</p>
    // const tagsLinks=[]
    // for(let i=0; i<productTags.length; i++){
    //     let tag = productTags[i].trim();
    //     tagsLinks.push(<Link className='badge bg-secondary text-white me-1' to ={`/products/${tag}`}>
    //     {tag}</Link>)
    // }
    
    const cartAddButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        var cartData={
                'product':{
                    'id' : productData.id,
                    'title' : productData.title,
                    'price' : productData.price,
                    'image' : productData.image,
                    },
                'user' : {
                    'id' : 1
                }
        }
        if(cartJson!=null){
            cartJson.push(cartData);
            var cartString = JSON.stringify(cartJson);
            localStorage.setItem('cartData', cartString);
            setCartData(cartJson);
        }else{
            var newCartList = [];
            newCartList.push(cartData);
            cartString = JSON.stringify(newCartList);
            localStorage.setItem('cartData', cartString);
        }
        
        setCartButtonClickStatus(true);
    }
    //remove element but there is null array is ther
    const cartRemoveButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index)=>{
            if(cart!==null && cart.product.id === productData.id){
                //delete cartJson[index];
                cartJson.splice(index,1); //remove array element from the index
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonClickStatus(false); // Reflect that the product is removed from the cart
        setCartData(cartJson);
    }

    //saveInCompareList
    function saveInCompareList(){
        const customerID = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer',customerID);
        formData.append('product',productData.id);
        //submit 
        // axios.post(baseUrl+'/orders/', formData)
        // .then(function(response){
        //     console.log(response.data);
        //     var orderId = response.data.id;
        //     setOrderAmount(total_amount);
        //     setOrderId(orderId);
        //     orderItems(orderId);
        //     setConfirmOrder(true);
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
              
            
    }
    
    return (
        <section className="container">
            <div className="row">
                <div className="col-4">
                <div id="productThumbnailSilder" className="carousel carousel-dark carousel-fade slide border text-white" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {productImgs.map((img, index) => {
                            if(index === 0){
                                return <button type="button"
                                 data-bs-target="#productThumbnailSilder"
                                  data-bs-slide-to={index} 
                                  className='active' 
                                  aria-current='true' 
                                  aria-label='Slide 1'></button>
                            }else{
                            return <button type="button" data-bs-target="#productThumbnailSilder" data-bs-slide-to={index} aria-current='true' aria-label='Slide 1'></button>}
                        })}
                    </div>
                    <div className="carousel-inner">
                    {productImgs.map((img, index) => {
                        if(index===0){
                            return <div className='carousel-item active'>
                            <img src={img.image} className="img-thumbnail mb-5" alt={`Product Image ${index + 1}`} />
                            </div>
                        }else{
                            return <div className='carousel-item'>
                            <img src={img.image} className="img-thumbnail mb-5" alt={`Product Image ${index + 1}`} />
                            </div>
                        }
                    })
                    }
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSilder" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSilder" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> ``
                </div>
                <div className="col-8">
                        <h3>{ productData.title }</h3>
                        <p>{ productData.detail }</p>
                        <h5 className="card-title">Price:<span className='text-muted'>{ productData.price }</span></h5>
                    <p className='mt-3'>
                        <button title="Buy Now" className='btn btn-success btn-sm'><i className='fa-solid fa-bag-shopping ms-1'></i>Buy Now</button>
                        {!cartButtonClickStatus &&
                            <button title="Add to Cart" type='button' onClick={cartAddButtonHandler} className='btn btn-danger btn-sm ms-1'><i className='fa-solid fa-cart-plus ms-1'></i>Add to Cart</button>
                        }
                        {cartButtonClickStatus &&
                            <button title="Add to Cart" type='button' onClick={cartRemoveButtonHandler} className='btn btn-warning btn-sm ms-1'><i className='fa-solid fa-cart-plus ms-1'></i>Remove from Cart</button>
                        }

                        {/* {
                            userContext.login && <button onClick={saveInCompareList} title="Add to Compare" className='btn btn-success btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced ms-1"></i> Compare</button>
                        }

                        {
                            userContext.login == null && <button title="Add to Compare" className='btn btn-danger btn-sm ms-1 disabled'><i className="fa-solid fa-scale-unbalanced ms-1"></i> Compare</button>
                        } */}
                        
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
            {/* <div id="relatedProductsSlider" className="carousel slide my-4 border text-white p-5 mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                {relatedProducts.map((product, index) => {
                            if(index === 0){
                                return <button type="button"
                                 data-bs-target="#productThumbnailSilder"
                                  data-bs-slide-to={index} 
                                  className='active' 
                                  aria-current='true' 
                                  aria-label='Slide 1'></button>
                            }else{
                            return <button type="button" data-bs-target="#productThumbnailSilder" data-bs-slide-to={index} aria-current='true' aria-label='Slide 1'></button>}
                        })}
                </div>
                <div className="carousel-inner">
                    
                    {productImgs.map((product, index) => {
                        if(index==0){
                            return <div className='carousel-item active'>
                                    <div className='row'>
                                    <div className='col-12 col-md-3 mb-4'>
                                   
                                        <SingleProduct product={product}/>
                                     
                                    </div>
                                    </div>
                            </div>
                        }else{
                            return <div className='carousel-item'>
                            <div className='row'>
                                    <div className='col-12 col-md-3 mb-4'>
                                   
                                        <SingleProduct product={product}/>
                                     
                                    </div>
                                    </div>
                            </div>
                        }
                    })
                    }
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-4'>
                            Product Box
                                <SingleProduct/>
                                 End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                             End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                            End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                product Box
                                <SingleProduct/>
                                End Product Box
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                                End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                                 End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                             End Product Box
                            </div>
                            <div className='col-12 col-md-3 mb-4'>
                                Product Box
                                <SingleProduct/>
                                 End Product Box
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
       
            </div>    */}
        </section>
    );
}