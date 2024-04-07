// Yes, you can fetch and map data within the SingleProduct 
// component and use it in the AllProducts component.However,
//   this approach is not recommended because it violates the
//    principle of separation of concerns and makes the SingleProduct 
//    component less reusable.
import { Link } from 'react-router-dom';
import SingleProduct from './Customer/SingleProduct';
import { useState, useEffect } from 'react';

export default function AllProducts() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  //for pagination
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl+'/products');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results)
        setTotalResults(data.count);
      });
  }
  
  function changeUrl(baseurl) {
    
    fetchData(baseurl);
  }
  var links = [];
  //let is a keyword to define block level variable
  for (let i = 1; i <= totalResults; i++){
    links.push(<li class='page-item'><Link onClick={() => changeUrl(baseUrl+`/products/?page=${i}`)} to={`/products/?page=${i}`} class='page-link'>{ i}</Link></li>)
  }

  return (
    
      <section className='container mt-4'>
        <h3 className='mb-4'>Books List</h3> 
        <div className='row'>
      
              {products.map((product) => (
                <SingleProduct product={product} />
              ))}
         
          </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* Pagination links */}
            {links}
          </ul>
        </nav>
      </section>
  
  );
}
