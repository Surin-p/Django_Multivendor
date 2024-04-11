import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../Context';
import SingleProduct from '../Customer/SingleProduct';
export default function SellerDetail() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productList, setProductList] = useState([]);
    const [sellerData, setSellerData] = useState({});
    const { seller_username, seller_id } = useParams();
    const userContext = useContext(UserContext);
    
    
    //The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.
    useEffect(() => {
        fetchProductData(baseUrl+'/vendor-products/'+seller_id);
        fetchSellerData(baseUrl+'/vendor/'+seller_id)
    }, [product_id]); //In our case, we're fetching initial data for our component.if dependency use infinite loop By omitting dependencies from the useEffect hook, we ensure that the effect runs only once when the component mounts, and not again on subsequent re-renders. This is suitable for fetching initial data that doesn't depend on any props or state changes.

    function fetchProductData(baseurl) {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            setProductList(data.results);
           
          }) 
    }
    function fetchSellerData(baseurl) {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            setSellerData(data);
           
          }) 
    }

    
    
    return (
        <section className="container">
            <h2>{sellerData.user.username}</h2>
            <div className="row">
                {productList.map((product)=><SingleProduct product={product} />)}
            </div>           
            
        </section>
    );
}