import { Routes, Route } from "react-router-dom";

//Assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//Website
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";
import ConfirmOrder from "./components/ConfirmOrder";
import AllSeller from "./components/AllSeller";
//For Customer Pannel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Compare from "./components/Customer/Compare";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import Addresses from "./components/Customer/Addresses";
import AddAddress from "./components/Customer/AddAddress";
import CustomerLogout from "./components/Customer/CustomerLogout";
import AddReview from "./components/Customer/AddReview";

//For School Pannel
import SchoolRegister from "./components/School/Register";
import SchoolLogin from "./components/School/Login";
import SchoolDashboard from "./components/School/Dashboard";
import SchoolProducts from "./components/School/Products";
import AddProduct from "./components/School/AddProduct";
import UpdateProduct from "./components/School/UpdateProduct";
import SchoolOrders from "./components/School/SchoolOrder";
import Customer from "./components/School/Customer";
import CustomerOrders from "./components/School/CustomerOrder";
import Report from "./components/School/Report";
import SchoolChangePassowrd from "./components/School/SchoolChangePassword";
import SchoolProfile from "./components/School/SchoolProfile";
import SchoolLogout from "./components/School/Logout";
import { CartContext } from "./Context";
import { useState } from "react";
import SellerDetail from "./components/School/SellerDetail";
const checkCart = localStorage.getItem('cartDate');
function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      <Header />
      <Routes>
          <Route index element={<Home />} />  
          <Route path="/products" element={<AllProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path = "/category/:category_slug/:category_id" element={<CategoryProducts/>}/>
          <Route path = "/product/:product_slug/:product_id" element={<ProductDetail/>}/>
          <Route path ="/checkout" element={<Checkout/>}/>
          <Route path ="/orders/success" element={<OrderSuccess/>}/>
          <Route path ="/orders/failure" element={<OrderFailure/>}/>
          <Route path = "/confirm-order" element={<ConfirmOrder/>}/>
          <Route path="/sellers" element={<AllSeller />} />

          {/*Customer Routes*/}
          <Route path="/customer/login" element={<Login />} />
          <Route path ="/customer/logout" element={<CustomerLogout/>}/>
          <Route path ="/customer/register" element={<Register/>}/>
          <Route path ="/customer/dashboard" element={<Dashboard/>}/>
          <Route path ="/customer/orders" element={<Orders/>}/>
          <Route path ="/customer/compare" element={<Compare/>}/>
          <Route path ="/customer/profile" element={<Profile/>}/>
          <Route path ="/change/password" element={<ChangePassword/>}/>
          <Route path ="/customer/addresses" element={<Addresses/>}/>
          <Route path ="/customer/add-address" element={<AddAddress/>}/>
          <Route path ="/customer/add-review/:product_id" element={<AddReview/>}/>
          
          {/*School Routes*/}
          <Route path ="/seller/dashboard" element={<SchoolDashboard/>}/>
          <Route path = "/seller/:product_slug/:product_id" element={<SellerDetail/>}/>
          <Route path ="/seller/login" element={<SchoolLogin/>}/>
          <Route path ="/seller/logout" element={<SchoolLogout/>}/>
          <Route path ="/seller/register" element={<SchoolRegister/>}/>
          <Route path ="/seller/products" element={<SchoolProducts/>}/>
          <Route path ="/seller/add-product" element={<AddProduct/>}/>
          <Route path ="/seller/update-product/:product_id" element={<UpdateProduct/>}/>
          <Route path ="/seller/orders" element={<SchoolOrders/>}/>
          <Route path ="/seller/customer" element={<Customer/>}/>
          <Route path ="/seller/customer/:customer_id/orderitems/" element={<CustomerOrders/>}/>
          <Route path ="/seller/report" element={<Report/>}/>
          <Route path ="/seller/change/password" element={<ChangePassword/>}/>
          <Route path ="/seller/profile" element={<Report/>}/>
          <Route></Route>
      </Routes>
      <Footer />
      </CartContext.Provider>
  );
}

export default App;
