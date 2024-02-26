//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function SingleProduct(props) {
  return (
    <section>
      {/* Latest Product*/}

      <div className=''>
        {/*Product Box*/}
        <div className=''>
          <div className="card">
            <Link to='/products/reference-asmita/123'><img src={logo} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h4 className="card-title text-danger"><Link to='/products/reference-asmita/123'>{props.product.title}</Link> </h4>
              <h5 className="card-title">Price:<span className='text-muted'>{props.product.price}</span></h5>
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