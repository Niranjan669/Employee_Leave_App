function AdminHeader() {
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/viewemp">
            View Emp
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/leave">
            Add Leave
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/applied">
            View Leaves
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/empleaveview">
            User Leaves
          </a>
        </li>

         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Logout
          </a>
        </li>
      </ul>
      
    
    </div>
  </div>
</nav>

    )
}

export default  AdminHeader;
