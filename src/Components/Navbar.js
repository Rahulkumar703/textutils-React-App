import React from 'react';
import './Css/navbar.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav className={props.theme} >
            <div className="title">
                <h1>
                    <Link to="/">{props.title}</Link>
                </h1>
            </div>
            <ul className="nav-tabs">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="theme">
                <label htmlFor='theme-selector'>{`Enable ${props.theme === 'light' ? 'dark' : 'light'} Mode`}</label>
                <input type="checkbox" id="theme-selector" onClick={props.changetheme}/>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string
}

Navbar.defaultProps = {
    title : "Page Title"
}


export default Navbar
