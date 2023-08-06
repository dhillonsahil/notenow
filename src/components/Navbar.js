import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext'

import { Link } from 'react-router-dom'
export default function Navbar() {

  const notescont = useContext(NotesContext);
  const { searchNotes, searchTerm } = notescont;
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg  border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="./logo.png" alt="Note Now" width={180} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={searchNotes} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
