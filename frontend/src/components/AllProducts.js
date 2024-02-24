import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
export default function AllProducts() {
  return (
    <main className='mt-4'>
      <section className='container mt-4'>
        {/* Latest Product*/}
        <h3 className='mb-4'>Books List</h3>
        <div className='row mb-4'>
          <div className='row'>
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
            <div className='col-12 col-md-3 mb-4'>
              {/*Product Box*/}
              <SingleProduct title="Asmita Publication" />
              {/* End Product Box*/}
            </div>


          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  )
}