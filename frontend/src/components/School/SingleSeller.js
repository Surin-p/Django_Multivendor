import { Link } from 'react-router-dom';

function SingleSeller(props) {

  const title = props.seller?.user.username;
  const image = props.seller?.profile_img;
  const id = props.seller?.id;
  return (
          <div className='col-12 col-md-3 mb-4'>
          <div key={id} className="card" height={500}>
              <Link to={`/seller/${title}/${id}`}>
                <img src={image} className="card-img-top" alt={title} height={300} />
                {console.log(image)}
              </Link>

                <div className="card-body">
                  <h4 className="card-title text-danger">
                    <Link to={`/seller/${title}/${id}`}>
                      {title}
                    </Link>
                  </h4>
                   
                </div>
            </div>
          </div>
          
  );
}

export default SingleSeller;
