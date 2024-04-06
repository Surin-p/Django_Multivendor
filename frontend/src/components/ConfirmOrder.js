import { useContext, useState} from "react"
import { CartContext, UserContext } from "../Context"
import axios from "axios";
import {PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const baseUrl = 'http://127.0.0.1:8000/api' 

export default function ConfirmOrder(){
    const [confirmOrder, setConfirmOrder] = useState(false); //running multiple time
    const [orderId, setOrderId] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const userContext = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext);
    console.log(userContext);
    if(userContext==null ||  userContext.login){
        window.location.href='/customer/login'
    }else{
        //save order in database, if user is loggedin
        console.log(userContext);
        if(ConfirmOrder ==false){
            addOrderInTable();
        }
    }

    function addOrderInTable(){
        const customerID = localStorage.getItem('customer_id');
        console.log(customerID)
        const formData = new FormData();
        formData.append('customer',customerID);
        //submit 
        axios.post(baseUrl+'/orders/', formData)
        .then(function(response){
            console.log(response.data);
            var orderId = response.data.id;
            setOrderId(orderId);
            orderItems(orderId);
            setConfirmOrder(true);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    function orderItems(orderId){
        console.log(orderId);
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        console.log(cartJson);

        if(cartJson!=null){
            cartJson.map((cart, index)=>{
               const formData = new FormData();
               formData.append('order',orderId);
               formData.append('product',cart.product.id);
               formData.append('qty',1);
               formData.append('price',cart.product.price);
                console.log(formData)
               //submit 
               axios.post(baseUrl+'/orderitems/'+orderId, formData)
                
               .then(function(response){
                //Remove cart Items
                    cartJson.splice(index,1)
                    localStorage.setItem('cartData', JSON.stringify(cartJson));
                    setCartData(cartJson);
                    // if(cart!=null && cart.product.id == productData.id){
                    //     //delete cartJson[index];
                    //     cartJson.splice(index,1); //remove array element from the index
                    // }
                
               })
               .catch(function(error){
                   console.log(error);
               });
              
            });
        }
    }

    function changePaymentMethod(payMethod){
        setPayMethod(payMethod);
    }

    function PayNowButton(payMethod){
        if(payMethod!=''){
            changePaymentMethod(payMethod);
        }else{
            alert("Select Payment Method");
        }
    }

    return(
        <div className='container'>
            <div className="row mt-5">
                <div className="col-6 offset-3">
                <div className="card text-center">
                    <h3><i className="fa fa-check-circle text-success"></i>Your Order Has been Confirmed</h3>
                    <h5>Order ID: {orderId}</h5>
                </div>
                <div className="card oy-3 mt-4 p-3">
                    <form>
                    <div className="form-group">
                        <label>
                            <input type ='radio' onChange={()=>changePaymentMethod('paypal')} name = 'payMethod' />Paypal
                        </label>
                    </div>
                
                    <div className="form-group mt-2">
                        <label>
                           <input type ='radio'  onChange={()=>changePaymentMethod('khalti')} name = 'payMethod' /> Khalti (For Nepal)
                       </label>
                    </div>
                        <button type="button" onClick={PayNowButton} className="btn btn-sm btn-success mt-3">Next</button>
                    </form>
                    {/* {
                        PayMethod == 'paypal' &&
                        <PayPalScriptProvider options={{ clientId: "test" }}>
                            <PayPalButtons className = 'mt-3'
                                createOrder = {(data, actions)=>{
                                    return actions.order.create({
                                        purchase_units:[
                                            {
                                                amount:{
                                                    currency_code : 'USD',
                                                    value: '3',
                                                }
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) =>{
                                    return actions.order.capture().then((details)=>{
                                        const name = details.payer.name.given_name;
                                        alert(`Transaction completed by ${name}`);
                                    });
                                }}
                             />
                        </PayPalScriptProvider>
                    } */}
                </div>
                </div>
            </div>
        </div>
    )
    
}