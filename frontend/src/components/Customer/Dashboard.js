//Packages

import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Dashboard() {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                     <Sidebar/>
                    </div>
                    <div className='col-md-9 col-2'>
                        <div className='row'>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Orders</h4>
                                <h5><a href='#' className='text-muted'>2</a></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Compare</h4>
                                <h5><a href='#' className='text-muted'>4</a></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Total Addresses</h4>
                                <h5><a href='#' className='text-muted'>2</a></h5>
                            </div>
                        </div>
                        </div>
                        
                     
                        </div>
                </div>
                
            </div>
        </section>
    )
}