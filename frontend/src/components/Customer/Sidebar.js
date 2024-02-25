import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <div class="list-group">
        <Link to="/customer/dashboard" className="list-group-item list-group-item-action active" aria-current="true">
            Dashboard
        </Link>
        <Link to="/customer/orders" className="list-group-item list-group-item-action">Orders</Link>
        <Link href="/customer/dashboard" className="list-group-item list-group-item-action">Compare</Link>
        <Link href="/customer/dashboard" className="list-group-item list-group-item-action">Profile</Link>
        <Link href="/customer/dashboard" className="list-group-item list-group-item-action">Addresses</Link>
        <Link href="/customer/dashboard" className="list-group-item list-group-item-action text-danger">Addresses</Link>
    </div>
    )
}