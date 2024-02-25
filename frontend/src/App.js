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

//For Customer
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       
          <Route index element={<Home />} />  
          <Route path="/products" element={<AllProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path = "/categories/:category_slug/:category_id" element={<CategoryProducts/>}/>
          <Route path = "/products/:product_slug/:product_id" element={<ProductDetail/>}/>
          <Route path ="/checkout" element={<Checkout/>}/>
          <Route path ="/customer/login" element={<Login/>}/>
          <Route path ="/customer/register" element={<Register/>}/>
          <Route path ="/customer/dashboard" element={<Dashboard/>}/>
          <Route path ="/customer/orders" element={<Orders/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
