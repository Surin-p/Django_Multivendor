import { Link } from "react-router-dom";
import logo from "../Bodhayana1.png";
import { useContext, useEffect } from "react";
import { UserContext, CartContext } from "../Context";

function Header() {
  const userContext = useContext(UserContext);
  const {cartData, setCartData} = useContext(CartContext);
  const checkVendor = localStorage.getItem('vendor_login');
  useEffect(() => {
    // Attempt to load cartData from local storage when component mounts
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []); // Only run this once when the component mounts
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="nav-link active" aria-current="page" href="#" to="/">SCHOOL BOOKSET</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/products">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
         
            <Link className="nav-link" aria-current="page" href="#" to="/checkout">
              My Cart ({cartData ? cartData.length : 0})
            </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/customer/compare">Compare(2)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/checkout">New Orders(2)</Link>
            </li>
            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">
                My Profile
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {userContext !='true' && 
                <>
                  <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                </>
              }
                {userContext == 'true' && 
                  <>
                    <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
                  </>
                }
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">
                School Panel
              </Link>
              
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {checkVendor && 
                <>
                <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/seller/logout">Logout</Link></li>
                </>
              }
              {!checkVendor &&
              <>
                <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                
              </>
              }
                
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
   </nav>

  )
}

export default Header;