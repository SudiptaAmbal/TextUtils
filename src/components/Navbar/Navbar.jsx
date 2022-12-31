import React from 'react'

// import './Navbar.css'

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{props.title}</span>

        <div className="form-check form-switch text-success">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}
