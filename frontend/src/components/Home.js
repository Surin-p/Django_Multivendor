import { Link } from "react-router-dom";
import logo from '../logo.svg';
import SingleProduct from './Customer/SingleProduct';
import SingleCategory from "./Customer/SingleCategory";
import lotus from "../lotus.jpg";
import {useState, useEffect} from 'react';
import Testomonial from "./Customer/testomonial";
import SingleSeller from "./School/SingleSeller";

export default function Home() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [sellerList, setSellerList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData(baseUrl+'/products/?fetch_limit=4');
    fetchTestimonalData(baseUrl+'/productrating');
    fetchCategoryData(baseUrl+'/categories/?fetch_limit=4');
    fetchSellerData(baseUrl+'/vendors/?fetch_limit=4');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setCategories(data.results);
      });
  }
  function fetchCategoryData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
      });
  }

  function fetchSellerData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setSellerList(data.results);
      });
  }


  function fetchTestimonalData(baseurl){
    fetch(baseurl)
    .then((response)=>response.json())
    .then((data)=>{
        setReviewList(data.results);
    });
}
  return (
    <main className='mt-4'>
    <section class="header-section">
    <div className=" container">
      <div className="row">
        <div className="col-12 col-md-6 mt-5 p-5 header-text">
          <h2>BODHAYANA BOOKPLACE</h2>
          <p>"A book is a garden, an orchard, a storehouse, 
           party,<br/> a company by the way, a counselor, a multitude of counselors." <br/>– Charles Baudelaire</p>

          <button className="read-more-btn mt-5 mb-0"><Link className="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link></button>
          
        </div>
        <div className="col-12 col-md-6 mt-5 p-5">
          <img className="image-header" src={lotus}/>
        </div>
      </div>
      </div>
    </section>
      <div className='container home'>
              {/* Popular Category*/}
              <p className="header-small-text mt-2">Categories</p>
              <h3 className='mb-4'>Explore our Top Categories<a href="#" className='float-end btn btn-sm btn-danger btn-bodhayana'><i className='fa-solid fa-arrow-right-long'></i></a></h3>
                <div className='row mb-4'>
                      {/*Category Box*/}
                      {categories.map((product_category) => (<SingleCategory product_category={product_category} />))}
                    </div>
 
        {/*End Latest Category*/}
        {/* Latest Product*/}
        <p className="home-small-text">Some quality items </p>
        <h3 className='mb-4 home-heading3'>Books<Link to="/products" className='float-end btn btn-sm btn-danger'>View All Products<i className='fa-solid fa-arrow-right-long'></i></Link></h3>
        <div className="row mb-4">
            {products.map((product) => (<SingleProduct product={product } />))}
        </div>
        {/*End Latest Product*/}
        {/* Popular School*/}
        
        <h3 className='mb-4 home-heading3'>SCHOOLS<Link to="/sellers" className='float-end btn btn-sm btn-danger'>View All Schools<i className='fa-solid fa-arrow-right-long'></i></Link></h3>
        <div className="row mb-4">
            {sellerList.map((seller) => (<SingleSeller seller={seller } />))}
        </div>
        {/*End Latest School*/}

        {/*Rating and Reviews*/}
        <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            
            {
              reviewList.map((item, index)=><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to='true' className="active" aria-current="true" aria-label={index}></button>)
            }
          </div>
          <div className="carousel-inner">
            {
              reviewList.map((item, index)=><Testomonial index={index} item={item} />)
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*End of Rating and Reviews*/}
      </div>
    </main>
  )
}
