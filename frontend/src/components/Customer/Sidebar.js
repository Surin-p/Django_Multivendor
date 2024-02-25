import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <div class="list-group">
        <Link to="/customer/dashboard" className="list-group-item list-group-item-action active" aria-current="true">
            Dashboard
        </Link>
        <Link to="/customer/orders" className="list-group-item list-group-item-action">Orders</Link>
        <Link to="/customer/compare" className="list-group-item list-group-item-action">Compare</Link>
        <Link to="/customer/profile" className="list-group-item list-group-item-action">Profile</Link>
        <Link to="/customer/addresses" className="list-group-item list-group-item-action">Addresses</Link>
        <Link to="/change/password" className="list-group-item list-group-item-action">Change Password</Link>
        <Link to="/" className="list-group-item list-group-item-action text-danger">Logout</Link>
    </div>
    )
}