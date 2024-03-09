import { Link } from "react-router-dom";
import logo from "../Bodhayana1.png";


export default function Footer() {
  return (
    <div className="footer-style">
      <footer className="container py-5">
        <div className="row">
        <div className="col-6 col-md-4 mb-3">
            <img className="" style={{width:"200px"}} src={logo}/>
            <ul className="list-unstyled d-flex">
            {/* <li className="ms-3">
              <Link className="link-dark" to="#">
                <svg className="bi" width="24" height="24">
                   <use xlink:to="#twitter"></use> 
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <a className="link-dark" to="#">
                <svg className="bi" width="24" height="24">
                   <use xlink:to="#instagram"></use> 
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" to="#">
                <svg className="bi" width="24" height="24">
                   <use xlink:to="#facebook"></use> 
                </svg>
              </a>
            </li> */}
            <li><b><Link className="footer-link-text" to="#" style={{color:"black"}}>Privacy | Terms of Service</Link> </b></li>
          </ul>
        </div>
          <div className="col-6 col-md-4 mb-3">
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

          <div className="col-6 col-md-4 mb-3">
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
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="footer-text">© 2023 surin. All Rights Reserved.</p>
         
        </div>
      </footer>
    </div>
  );
}
