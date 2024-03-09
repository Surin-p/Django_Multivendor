import { Link } from "react-router-dom";
import logo from "../Bodhayana1.png";


export default function Footer() {
  return (
    <div className="footer-style">
      <footer className="container py-5">
        <div className="row">
        <div className="col-6 col-md-4 mb-2">
            <img className="" style={{width:"100%"}} src={logo}/>
            <ul className="list-unstyled d-flex">
            <li className="ms-5 py-5">
              <Link className="link-new" to="#">
                <i class="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="ms-5 py-5">
              <Link className="link-new" to="#">
                <i class="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="ms-5 py-5">
              <Link className="link-new" to="#">
                <i class="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className="ms-5 py-5">
              <Link className="link-new" to="#">
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </li>
            
          </ul>
        </div>
          <div className="col-6 col-md-4 mb-2">
            <h5>Bodhāyana Bookplace</h5>
            
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                Books                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                Category
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-2">
            <h5>Important Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted ">
                FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                Terms of Service
                </Link>
              </li>
              
            </ul>
          </div>

      
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
          <p className="footer-text">© 2023 surin. All Rights Reserved.</p>
          <p><b><Link className="footer-link-text" to="#" style={{color:"black"}}>Privacy | Terms of Service</Link> </b></p>
        </div>
      </footer>
    </div>
  );
}
