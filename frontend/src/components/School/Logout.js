export default function SchoolLogout() {
    localStorage.removeItem('vendor_login');
    localStorage.removeItem('vendor_id');
    localStorage.removeItem('vendor_username');
    window.location.href = '/';
}