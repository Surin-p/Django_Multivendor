import { Link } from "react-router-dom";
import logo from '../logo.svg';
import SingleProduct from './Customer/SingleProduct';
import AllProducts from './AllProducts';

export default function Home() {
  const products = [
    {
    
      'title': 'Django',
      'price':'500'
    },
    {
      'title': 'python',
      'price':'500'
    },
  ]
  return (
    <main className='mt-4'>
      <div className='container home'>
              {/* Popular Category*/}
              <p className="header-small-text">Categories</p>
              <h3 className='mb-4'>Explore our Top Categories<a href="#" className='float-end btn btn-sm btn-danger btn-bodhayana'><i className='fa-solid fa-arrow-right-long'></i></a></h3>
        <div className='row'>
          {/*Category Box*/}
          <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top card-img-cat" alt="..." />
              <div className="card-body">
                
              </div>
              
            </div>
            <div className='d-flex justify-content-center card-text'>
              <Link className="bodhayana-link">Category title</Link>
              </div>
          </div>
          {/* End Category Box*/}
          {/*Category Box*/}
          <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-danger"></h4>
              </div>
              <div className='card-footer'>
                Book Purchased: 2533
              </div>
            </div>
          </div>
          {/* End Category Box*/}
        </div>
        {/*End Latest Category*/}
        {/* Latest Product*/}
        <p className="home-small-text">Some quality items </p>
        <h3 className='mb-4 home-heading3'>Books<Link to="/products" className='float-end btn btn-sm btn-danger'>View All Products<i className='fa-solid fa-arrow-right-long'></i></Link></h3>
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 mb-4">
            {products.map((product) => (<SingleProduct product={product } />))}
        </div>
        </div>
        {/*End Latest Product*/}


        {/* Popular School*/}
        <h3 className='mb-4'>Popular School<a href="#" className='float-end btn btn-sm btn-danger'>View All School<i className='fa-solid fa-arrow-right-long'></i></a></h3>
        <div className='row'>
          {/*School Box*/}
          <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-danger">School title</h4>
              </div>
              <div className='card-footer'>
                Categories: <a href='#'>Reference</a>, <a href='#'>Primary</a>, <a href='#'>Secondary</a>
                <br />
                Book Purchased: 2233
              </div>
            </div>
          </div>
          {/* End School Box*/}
          {/*School Box*/}
          <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title text-danger">School title</h4>
              </div>
              <div className='card-footer'>
                Categories: <a href='#'>Reference</a>, <a href='#'>Primary</a>, <a href='#'>Secondary</a>
                <br />
                Book Purchased: 2233
              </div>
            </div>
          </div>
          {/* End School Box*/}

        </div>
        {/*End Latest School*/}

        {/*Rating and Reviews*/}
        <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
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