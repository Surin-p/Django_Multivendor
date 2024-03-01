import logo from '../logo.svg';
import SingleProduct from './Customer/SingleProduct';
export default function CategoryProducts() {
    return (
        <main className='mt-4'>
            <section className='container mt-4'>
                {/* Latest Product*/}
                <h3 className='mb-4'><span className='text-danger'>Reference</span>Books</h3>
                <div className='row mb-4'>
                    <div className='col-12 col-md-3 mb-4'>
                        {/*Product Box*/}
                        <SingleProduct title="Asmita Publication" />
                        {/* End Product Box*/}
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        {/*Product Box*/}
                        <SingleProduct title="Asmita Publication" />
                        {/* End Product Box*/}
                    </div>
                    <div className='col-12 col-md-3 mb-4'>
                        {/*Product Box*/}
                        <SingleProduct title="Asmita Publication" />
                        {/* End Product Box*/}
                    </div>
                </div>

                <nav className="container" aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}