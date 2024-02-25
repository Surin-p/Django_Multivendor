//Packages
import { Link } from 'react-router-dom';
//Assets

import Sidebar from './Sidebar';
//If you ever remove the column from other while referencing single product
//Product columns her cola and row
export default function Addresses(props) {
    return (
        <section>

            <div className='container mt-4'>

                <div className='row'>
                    <div className='col-md-3 col-12 mt-5'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <h3 className='mb-4'>Address List</h3>
                        <div className='card'>
                            <div className='card-body'>
                                Bhaktapur, Kathmandu, Nepal
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}