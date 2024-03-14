//error I got using same code as product here is warning of not using key here?
//this warning is for div element as not usin key
//  the key prop is set to the id of each category
//   in the categories array.This ensures that each
//     < div > element has a unique key prop.

// If your categories have unique identifiers,
//   such as IDs, it's better to use those as
//   the key prop instead of the index.This helps
//    React optimize the rendering process and avoid
//     unnecessary re - renders.

//but the error regarding keys is mostly due to not using key in li element
// In the AllProducts component, you're rendering a list
// of SingleProduct components using the map function.
// Each SingleProduct component is a separate React component,
//   and React automatically handles the key prop for each
//   component.You don't need to explicitly add a key prop
//   to each SingleProduct component because React takes
//    care of it behind the scenes.

// In the Categories component, you're rendering a
//  list of < div > elements using the map function.
// Each < div > element is a separate DOM element,
//   and React needs a unique identifier for each
//    element to optimize the rendering process.
//   That's why you need to explicitly add a key
//    prop to each < div > element in the Categories component.

import logo from '../Bodhayana1.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories, setCategories] = useState([]);
//for pagination
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
      fetchData(baseUrl+'/categories/');
  }, []);

function fetchData(baseurl) {
  fetch(baseurl)
    .then((response) => response.json())
    .then((data) => {
      setCategories(data.results)
      setTotalResults(data.count);
    });
}

function changeUrl(baseurl) {
  
  fetchData(baseurl);
}
  var links = [];
  //how many you want to show
  //here totalResults is count
  var limit = 1;
  var totalLink = totalResults / limit;
//let is a keyword to define block level variable
for (let i = 1; i <= totalLink; i++){
  links.push(<li key={i} className='page-item'><Link onClick={() => changeUrl(baseUrl+`/categories/?page=${i}`)} to={`/categories/?page=${i}`} class='page-link'>{ i}</Link></li>)
}
  return (
    
      <section className="container mt-4">
        {/*Categories*/}
    
        <h3 className='mb-4'>All Categories</h3>
        <div className='row'>
          {
            categories.map((category) => 
              (
              //Category Box
              <div key={category.id} className='col-12 col-md-3 mb-2'>
                <div className="card">
                  <Link to={`/category/${category.title}/${category.id}`}>
                  <img src={logo} className="card-img-top" alt="{category.title}" /></Link>
                  <div className="card-body">
                    <h4 className="card-title text-danger"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                  </div>
                  <div className='card-footer'>
                    Book Purchased: 2233
                  </div>
                </div>
              </div>
              //End Category Box
              )
            )
          }
        </div>
   
        <nav className="container" aria-label="Page navigation example">
          <ul className="pagination">
            { links}
        
          </ul>
        </nav>
        {/*End of Categories*/}
      </section>
  )
}