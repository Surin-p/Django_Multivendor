import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

function SingleProduct(props) {
  // Check if props.product is defined before accessing its properties
  //if you single product is in same folder the the file where you are fetching data use props.product?.title
  // The code you've provided is using the optional
  //  chaining operator?., not the ternary operator ? :.

  // The optional chaining operator?.is a new
  //   feature introduced in ECMAScript 2020(ES11)
  //    and is used to access properties of an object
  //     that may be null or undefined without causing 
  //     an error.It's a shorthand way of writing 
  //     a series of nested if statements to check
  // for null or undefined before accessing a property.
  
  const title = props.product?.title;
  const price = props.product?.price;
  const id = props.product?.id;
  return (
  <section className=''>
      <div className='mb-4'>
        <div key={id} className=''>
          <div className="card ">
            <Link to={`/product/${title}/${id}`}>
              <img src={logo} className="card-img-top" alt="{title}" />
            </Link>

            <div className="card-body">
              <h4 className="card-title text-danger">
                <Link to={`/product/${title}/${id}`}>
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
