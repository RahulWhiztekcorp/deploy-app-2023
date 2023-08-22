import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light px-2">
            <a className="navbar-brand" href="/"><h3>CRUD</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li className="nav-item active">
                    <Link to="/read" className='text-decoration-none'>
                        <button className="nav-link ">Read</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Create</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;