import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

export default function AllProducts() {
  // const products=[
  //   {'title': 'Asmita Publication Collection', 'price':500},
  //   {'title': 'HSEB Publication Collection', 'price':550},
  //   {'title': 'Ekta Publication Collection', 'price':500},
  // ]
  const [Products , setProducts] = useState([])

  useEffect(()=>{
    fetchData("http://127.0.0.1:8000/api/products/")
  });
  function fetchData(baseUrl){
    fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => setProducts(data.results));
 
  }
  
  
  return (
    <main className='mt-4'>
      <section className='container mt-4'>
     
        <h3 className='mb-4'>Books List</h3>
        <div className='row mb-4'>
          <div className='row'>
            <div className='col-12 col-md-3 mb-4'>
              {
                Products.map((product)=> <SingleProduct product={product}/>)
              }
            </div>


          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  )
}