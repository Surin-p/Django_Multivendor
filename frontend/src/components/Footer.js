export default function Footer() {
    return (
        <>
            {/*Footer*/}
            <footer className="d-flex flex-wrap justify-content-between container align-items-center py-3 my-4 border-top fixed-bottom">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-mb-0 text-muted text-decoration-none lh-1">BODHAYANA BOOKPLACE</a>
                    <span class="mb-3 mb-md-0 text-muted">&#169;2022 company, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
                    <li className="ms-3">
                        <a className="text-muted" href="#"><i className="fa-brands fa-facebook fa-2x"></i></a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#"><i className="fa-brands fa-youtube fa-2x"></i></a>
                    </li>
                </ul>
            </footer>
            {/*End of Footer*/}
        </>

    )
}