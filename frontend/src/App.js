import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       
          <Route index element={<Home />} />  
          <Route path="categories" element={<Categories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
