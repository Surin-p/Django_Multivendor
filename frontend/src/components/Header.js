import { Link } from "react-router-dom";
import logo from "../Bodhayana1.png";
import lotus from "../lotus.jpg";
function Header() {
  return (
    <div>
    {/* <section className="social-div-nav">
        <ul className="list-unstyled d-flex py-2 mb-1">
            <li className="ms-5">
              <Link className="link-secondary" to="#">
              <i className="fa-brands fa-facebook-f fa-xl"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-secondary" to="#">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-secondary" to="#">
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-secondary" to="#">
                <i className="fa-brands fa-youtube fa-xl"></i>
              </Link>
            </li>
            
          </ul>
    </section>
    <section className="nav-logo row">
     <div className="col-6 col-md-6 mb-2">
            <img className="" style={{width:"30%"}} src={logo}/>
     </div>
     <div className="col-6 col-md-6 mb-2 ">
     <div className="row justify-content-end">
        <div className="col-6 col-md-3 ms-0 mb-2">
            <Link>My Account</Link>
            </div>
         <div className="col-6 col-md-3 d-flex flex-column flex-sm-row justify-content-right mb-2">
          <Link>My Profile</Link>
         </div>
         <div className="box col-6 col-md-3 mb-2 mr-5">
            <input type="text" placeholder="Search"/>
            <Link className="search-box" to="">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </Link>
          </div>
         </div>
     </div>
     
    </section> */}
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
              <Link className="nav-link" aria-current="page" href="#" to="/checkout">My Cart(2)</Link>
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
                <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">
                School Panel
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/seller/login">Logout</Link></li>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
    <section class="header-section">
    <div className=" container">
      <div className="row">
        <div className="col-12 col-md-6 mt-5 p-5 header-text">
          <h2>BODHAYANA BOOKPLACE</h2>
          <p>"A book is a garden, an orchard, a storehouse, 
           party,<br/> a company by the way, a counselor, a multitude of counselors." <br/>– Charles Baudelaire</p>

          <button className="read-more-btn mt-5 mb-0"><Link className="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link></button>
          
        </div>
        <div className="col-12 col-md-6 mt-5 p-5">
          <img className="image-header" src={lotus}/>
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Header;