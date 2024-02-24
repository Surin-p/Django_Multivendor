import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <main className='mt-4'>
        <div className='container'>
          {/* Latest Product*/}
          <h3 className='mb-4'>Latest Books<a href="#" className='float-end btn btn-sm btn-danger'>View All Products<i className='fa-solid fa-arrow-right-long'></i></a></h3>
          <div className='row'>
            {/*Product Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">Product title</h4>
                  <h5 className="card-title">Price:<span className='text-muted'>Rs.500</span></h5>
                </div>
                <div className="card-footer"> 
                  <button title="Add to Cart" className='btn btn-success btn-sm'><i className='fa-solid fa-cart-plus'></i></button>
                  <button title="Add to Compare" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced"></i></button>
                </div>
                  
                
              </div>
            </div>
            {/* End Product Box*/}
            {/*Product Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">Product title</h4>
                  <h5 className="card-title">Price:<span className='text-muted'>Rs.500</span></h5>
                </div>
                <div className="card-footer"> 
                  <button title="Add to Cart" className='btn btn-success btn-sm'><i className='fa-solid fa-cart-plus'></i></button>
                  <button title="Add to Compare" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced"></i></button>
                </div>
                  
                
              </div>
            </div>
            {/* End Product Box*/}
          </div>
           {/*End Latest Product*/}
           {/* Popular Category*/}
          <h3 className='mb-4'>Popular Categories<a href="#" className='float-end btn btn-sm btn-danger'>View All Categories<i className='fa-solid fa-arrow-right-long'></i></a></h3>
          <div className='row'>
            {/*Category Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">Category title</h4>
                </div>
                <div className='card-footer'>
                  Book Purchased: 2233
                </div> 
              </div>
            </div>
            {/* End Category Box*/}
            {/*Category Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">Category title</h4>
                </div>
                <div className='card-footer'>
                  Book Purchased: 2533
                </div>
              </div>
            </div>
            {/* End Category Box*/}
          </div>
           {/*End Latest Category*/}

           {/* Popular School*/}
          <h3 className='mb-4'>Popular School<a href="#" className='float-end btn btn-sm btn-danger'>View All School<i className='fa-solid fa-arrow-right-long'></i></a></h3>
          <div className='row'>
            {/*School Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">School title</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href='#'>Reference</a>, <a href='#'>Primary</a>, <a href='#'>Secondary</a>
                  <br/>
                  Book Purchased: 2233
                </div> 
              </div>
            </div>
            {/* End School Box*/}
            {/*School Box*/}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">School title</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href='#'>Reference</a>, <a href='#'>Primary</a>, <a href='#'>Secondary</a>
                  <br/>
                  Book Purchased: 2233
                </div> 
              </div>
            </div>
            {/* End School Box*/}
            
          </div>
           {/*End Latest School*/}
        </div> 
      </main>
    </>
  );
}

export default App;
 