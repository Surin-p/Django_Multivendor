import { Link } from "react-router-dom";

function SingleCategory(props) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div key={props.product_category?.id} className="card">
        <img
          src={props.product_category?.category_image}
          className="card-img-top card-img-cat"
          alt="..."
          height={200}
        />
        <div className="d-flex justify-content-center card-text">
          <Link className="bodhayana-link">{props.product_category?.title}</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
