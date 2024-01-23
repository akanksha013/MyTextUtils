import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor:props.mode==='dark'?'rgb(26,24,24)':'rgb(230, 220, 230)'}} id="nav1">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize:'23px',fontFamily:'Cambria Cochin Georgia Times Times New Roman'}} href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{fontSize:'19px',fontFamily:'Cambria Cochin Georgia Times Times New Roman'}} aria-current="page" href="/">{props.Home}</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" style={{fontSize:'19px',fontFamily:'Cambria Cochin Georgia Times Times New Roman'}} href="/about">{props.AboutUs}</a>
        </li> */}
      </ul>
    </div>
  </div>
  <div className="shift1">
      <form className="d-flex mx-4" role="search">
      <label className="switch">
      <input type="checkbox" onClick={props.changeMode}/>
      <span className="slider"></span>
      </label>
      </form>
	</div>
  <div className="shift2">
      <div className="container">
      <div className="toggle">
      <input type="checkbox" />
      <span className="button" onClick={props.changeBlue}></span>
    </div>
</div>
  </div>
  <div className="shift3">
      <div className="container">
      <div className="toggle1">
      <input type="checkbox" />
      <span className="button1" onClick={props.changeGreen}></span>
    </div>
</div>
  </div>
</nav>
  )
}

Navbar.propTypes = {name:PropTypes.string.isRequired,
                    // AboutUs:PropTypes.string.isRequired,
                    Home:PropTypes.string.isRequired}

Navbar.defaultProps = {
    name:"Set Title Here",
    // AboutUs:"Set About Us",
    Home:"Set the Text"
}                    
