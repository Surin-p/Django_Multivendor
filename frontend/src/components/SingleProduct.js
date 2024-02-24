import logo from '../logo.svg';

export default function SingleProduct(props){
    return(
        <section>
        {/* Latest Product*/}
       
          <div className=''>
            {/*Product Box*/}
            <div className=''>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger">{props.title} </h4>
                  <h5 className="card-title">Price:<span className='text-muted'>Rs.500</span></h5>
                </div>
                <div className="card-footer"> 
                  <button title="Add to Cart" className='btn btn-success btn-sm'><i className='fa-solid fa-cart-plus'></i></button>
                  <button title="Add to Compare" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced"></i></button>
                </div>
                  
                
              </div>
            </div>
            </div>
            {/* End Product Box*/}
        </section>
    )
}