import { Link } from 'react-router-dom';

export default function SchoolSidebar(){
    return(
        <div class="list-group">
        <Link to="/seller/dashboard" className="list-group-item list-group-item-action active" aria-current="true">
            Dashboard
        </Link>
        <Link to="/seller/products" className="list-group-item list-group-item-action">Products</Link>
        <Link to="/seller/add-product" className="list-group-item list-group-item-action">Add Products</Link>
        <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
        <Link to="/seller/customer" className="list-group-item list-group-item-action">Customers</Link>
        <Link to="/seller/report" className="list-group-item list-group-item-action">Reports</Link>
        <Link to="/" className="list-group-item list-group-item-action text-danger">Logout</Link>
    </div>
    )
}