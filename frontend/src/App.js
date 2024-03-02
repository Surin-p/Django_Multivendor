import { BrowserRouter, Routes, Route } from "react-router-dom";

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

//For School Pannel
import SchoolRegister from "./components/School/Register";
import SchoolLogin from "./components/School/Login";
import SchoolDashboard from "./components/School/Dashboard";
import SchoolProducts from "./components/School/Products";
import AddProduct from "./components/School/AddProduct";
import SchoolOrders from "./components/School/SchoolOrder";
import Customer from "./components/School/Customer";
import Report from "./components/School/Report";
import SchoolChangePassowrd from "./components/School/SchoolChangePassword";
import SchoolProfile from "./components/School/SchoolProfile";

function App() {
  return (
    <BrowserRouter>
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
          {/*Customer Routes*/}
          <Route path ="/customer/login" element={<Login/>}/>
          <Route path ="/customer/register" element={<Register/>}/>
          <Route path ="/customer/dashboard" element={<Dashboard/>}/>
          <Route path ="/customer/orders" element={<Orders/>}/>
          <Route path ="/customer/compare" element={<Compare/>}/>
          <Route path ="/customer/profile" element={<Profile/>}/>
          <Route path ="/change/password" element={<ChangePassword/>}/>
          <Route path ="/customer/addresses" element={<Addresses/>}/>
          <Route path ="/customer/add-address" element={<AddAddress/>}/>

          {/*School Routes*/}
          <Route path ="/seller/dashboard" element={<SchoolDashboard/>}/>
          <Route path ="/seller/login" element={<SchoolLogin/>}/>
          <Route path ="/seller/register" element={<SchoolRegister/>}/>
          <Route path ="/seller/products" element={<SchoolProducts/>}/>
          <Route path ="/seller/add-product" element={<AddProduct/>}/>
          <Route path ="/seller/orders" element={<SchoolOrders/>}/>
          <Route path ="/seller/customer" element={<Customer/>}/>
          <Route path ="/seller/report" element={<Report/>}/>
          <Route path ="/seller/change/password" element={<ChangePassword/>}/>
          <Route path ="/seller/profile" element={<Report/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
