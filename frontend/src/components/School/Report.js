//Packages

import SchoolSidebar from "./Sidebar"
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Report() {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                     <SchoolSidebar/>
                    </div>
                    <div className='col-md-9 col-2'>
                        <div className='row'>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Daily Report</h4>
                                <h5><a href='#' className='btn btn-danger'>View</a></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <div className='card-body text-center'>
                                <h4 className='text-danger'>Monthly Report</h4>
                                <h5><a href='#' className='btn btn-danger'>View</a></h5>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                        <div className='card-body text-center'>
                                <h4 className='text-danger'>Yearly Report</h4>
                                <h5><a href='#' className='btn btn-danger'>View</a></h5>
                            </div>
                        </div>
                        
                        </div>
                        
                     
                        </div>
                </div>
                
            </div>
        </section>
    )
}