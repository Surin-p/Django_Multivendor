import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Categories(){
    return(
        <>
        <section className="container mt-4">
                    {/*Categories*/}
             {/* Popular Category*/}
          <h3 className='mb-4'>All Categories</h3>
          <div className='row'>
            {/*Category Box*/}
            <div className='col-12 col-md-3 mb-2'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger"><Link>Category title</Link></h4>
                </div>
                <div className='card-footer'>
                  Book Purchased: 2233
                </div> 
              </div>
            </div>
            {/* End Category Box*/}
            {/*Category Box*/}
            <div className='col-12 col-md-3 mb-2'>
              <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title text-danger"><Link>Category title</Link></h4>
                </div>
                <div className='card-footer'>
                  Book Purchased: 2533
                </div>
              </div>
            </div>
            {/* End Category Box*/}
          </div>
           {/*End Latest Category*/}

                  {/*End of Categories*/}
        </section>
        </>
      
    )
}