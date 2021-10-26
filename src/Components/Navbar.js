import React from 'react';
import './Css/navbar.css';
import PropTypes from 'prop-types'


function Navbar(props) {
    return (
        <nav className={props.theme} >
            <div className="title">
                <h1>
                    <a href="/">{props.title}</a>
                </h1>
            </div>
            <ul className="nav-tabs">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
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
