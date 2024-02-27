import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

export default function AllProducts() {
  // const products=[
  //   {'title': 'Asmita Publication Collection', 'price':500},
  //   {'title': 'HSEB Publication Collection', 'price':550},
  //   {'title': 'Ekta Publication Collection', 'price':500},
  // ]
    const baseurl = "http://127.0.0.1:8000/api";
    const [Products , setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState([]);
    const [baseUrl, setBaseUrl] = useState(baseurl+"/products");
  useEffect(()=>{
    fetchData()
  });
  function fetchData(){
    fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    setProducts(data.results);
    setTotalResult(data.count);
    });
 
  } 
  
  function changeUrl(baseUrl){
    setBaseUrl(baseUrl);
  }
  //for pagination using total Result
  var links = []
  for(let i =1; i<=totalResult; i++){
    links.push(<li class='page-item'><Link onClick={()=> changeUrl(baseurl+`products/?page=${i}`)} to={baseurl+`products/?page=${i}`} class='page-link'>{i}</Link></li>)
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
            {links}
          </ul>
        </nav>
      </section>
    </main>
  )
}