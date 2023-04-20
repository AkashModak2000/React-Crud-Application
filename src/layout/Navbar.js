import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <Link className='btn btn-outline-warning' to={"/adduser"}>Add User  </Link>
  </div>
</nav>

    </div>
  )
}
