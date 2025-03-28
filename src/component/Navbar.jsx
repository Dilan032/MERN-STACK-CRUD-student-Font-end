import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar rounded-box flex w-[98%] mx-auto items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
            <div className="navbar-start max-md:w-1/4">
                <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
                ST managment
                </a>
            </div>
            <div className="navbar-center max-md:hidden">
                <ul className="menu menu-horizontal p-0 font-medium">
                <li><Link to='/' className='navbtn'>Home</Link></li>
                <li><Link to='/add-users' className='navbtn'>Add user</Link></li>
                <li><Link to='/all-users-details' className='navbtn'>User details</Link></li>
                </ul>
            </div>
            <div className="navbar-end items-center gap-4">
                <div className="dropdown relative inline-flex md:hidden">
                <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                    <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                    <li><Link to='/' className="dropdown-item navbtn" >Home</Link></li>
                    <li><Link to='/add-users' className="dropdown-item navbtn" >Add user</Link></li>
                    <li><Link to='/all-users-details' className="dropdown-item navbtn" >User details</Link></li>
                </ul>
                </div>
                <div className='max-md:hidden'>
                    <div className="input max-md:hidden rounded-full max-w-64">
                        <span className="icon-[tabler--search] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
                        <label className="sr-only" for="searchInput">Full Name</label>
                        <input type="search" className="grow" placeholder="Search" id="searchInput" />
                    </div>
                </div>
            </div>
            </nav>
    </>
  )
}

export default Navbar