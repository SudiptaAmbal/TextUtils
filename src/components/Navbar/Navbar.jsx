import React from 'react'

import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-title" href="/">{props.title}</a>
      </div>
    </nav>
  )
}
