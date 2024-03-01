import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

function SingleProduct(props) {
  // Check if props.product is defined before accessing its properties
  //if you single product is in same folder the the file where you are fetching data use props.product?.title
  
  const title = props.product.title;
  const price = props.product.price;

  return (
    <section>
      <div className=''>
        <div className=''>
          <div className="card">
            <Link to={`/product/${title}/${price}`}>
              <img src={logo} className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h4 className="card-title text-danger">
                <Link to={`/product/${title}/${price}`}>
                  {title}
                </Link>
              </h4>
              <h5 className="card-title">Price:<span className='text-muted'>{price}</span></h5>
            </div>
            <div className="card-footer">
              <button title="Add to Cart" className='btn btn-success btn-sm'><i className='fa-solid fa-cart-plus'></i></button>
              <button title="Add to Compare" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-scale-unbalanced"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
