//useParams hooks this is new hooks introduced in react router dom
//helps to get url parameters, dynamic
// let is used when we need to create a variable that
//  should be only accessed inside the block.const is
//  used when we need to create a variable that should
//  only be accessed inside the block, and the value of
//   the variable remains unchanged.
//query is fetched using searchparam while dynamic use params

import SingleProduct from './Customer/SingleProduct';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CategoryProducts(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    //for pagination
    const [totalResults, setTotalResults] = useState(0);
    //for searching url parameters
    const {category_slug,category_id } = useParams();

    console.log(category_id);

    useEffect(() => {
      fetchData(baseUrl+'/products/?category='+category_id); //searching for filter category from query set
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
        links.push(<li key={i} class='page-item'>
            <Link onClick={() => changeUrl(baseUrl + `/products/?category=${category_id}&page=${i}`)}
                to={`/category/${category_slug}/${category_id}/?page=${i}`} class='page-link'>
                {i}</Link></li>
        )
    }
    return (
            <section className='container mt-4'>
                {/* Latest Product*/}
                <h3 className='mb-4'><span className='text-danger'>Reference</span>Books</h3>
                <div className='row mb-4'>
                    <div className='col-12 col-md-3 mb-4'>
                        {/*Product Box*/}
                        {products.map((product) => (
                            <SingleProduct product={product} />
                        ))}
                        {/* End Product Box*/}
                    </div>

                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {/* Pagination links */}
                        {links}
                    </ul>
                </nav>
            </section>
    )
}