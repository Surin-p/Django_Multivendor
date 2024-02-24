import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       
          <Route index element={<Home />} />  
          <Route path="products" element={<AllProducts />} />
          <Route path="categories" element={<Categories />} />
          <Route path = "/categories/:category_slug/:category_id" element={<CategoryProducts/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
