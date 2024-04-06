//Packages
import { useContext, useState } from 'react';
import { CartContext } from '../Context';
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Checkout(props) {
    const [productData, setProductData] = useState([]);
    const {cartData, setCartData} = useContext(CartContext);
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    console.log(cartData);
    if(cartData == null || cartData.length == 0){
        var cartItems = 0;
    }else{
        var cartItems = cartData.length;
    }
    const cartRemoveButtonHandler = (product_id) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index)=>{
            if(cart!=null && cart.product.id == product_id){
                //delete cartJson[index];
                cartJson.splice(index,1); //remove array element from the index
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonClickStatus(false); // Reflect that the product is removed from the cart
        setCartData(cartJson);
    }
    var sum =0;
    cartItems && cartData.map((item, index)=>{
        sum+=parseFloat(item.product.price);
    });
  return (
    <section>
      
        <div className='container mt-4'>
            <h3 className='mb-4'>All Item({cartItems})</h3>
            {cartItems!=0 &&
            <div className='row'>
                <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                
                   
                            <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems &&
                        cartData.map((item, index)=>{
                            return(
                            <tr>
                            <td>{index+1}</td>
                            <td><Link><img src={item.product.image} className="img-thumbnail" width="80" alt="..." /></Link>
                            <p><Link>{item.product.title}</Link></p>
                            </td>
                            <td>{item.product.price}</td>
                            <td>
                            <button title="Add to Cart" 
                            type='button' 
                            onClick={()=>cartRemoveButtonHandler(item.product.id)} 
                            className='btn btn-warning btn-sm ms-1'>
                            <i className='fa-solid fa-cart-plus ms-1'>
                            </i>Remove from Cart
                            </button>
                            </td>
                            </tr>
                            )
                        })
                    }
                            </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th>Rs: {sum} </th>
                        </tr>
                        <tr>
                            <td colSpan='3' align='right'>
                                <Link className='btn btn-danger ms-2'>Continue to Shop</Link>
                                <Link to = "/confirm-order" className='btn btn-danger ms-2'>Proceed to Checkout</Link>
                            </td>
                        </tr>
                    </tfoot>
                    </table>
                  
                      
                    
          
            </div>
                </div>
            
            </div>
            }
            {cartItems==0 &&
            <>
            <h2>No Item to show</h2>
            <Link to="/" className='btn btn-danger mb-5'>Back to Home</Link></>
            }
        </div>
                        
    </section>
  )
}