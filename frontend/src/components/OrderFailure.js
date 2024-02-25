//Packages
import { Link } from 'react-router-dom';

//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function OrderFailure(props) {
  return (
    <section>
      
        <div className='container mt-4'>
           
            <div className='row'>
              <div className='col-md-8 offet-2'>
              <div className='card'>
              <div className='card-body text-center'>
                <p><i className="fa-solid fa-circle-xmark text-success fa-4x"></i></p>
                <h3 className='text-success'>Something has gone wrong</h3>
                <p className='mt-2'><Link to = "/"className='btn btn-danger'>HOME</Link>
                <Link to="/customer/dashboard" className='btn btn-secondary ms-2'>Dashoard</Link>
                </p>
              </div>
              </div>
              </div>
            </div>
        </div>
    </section>
  )
}