import React from 'react';
import './Css/contact.css';

export default function Contact(props) {

    return (
        <div className={`contact-section ${props.theme}`}>
            <div className="heading">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-content">
                <div className="contact-method">
                    <p className="sub-heading">Phone</p>
                    <a target="_blank" href="tel:+917050584103" rel="noreferrer">+91 7050584103</a>
                </div>
                <div className="contact-method">
                    <p className="sub-heading">Email</p>
                    <a target="_blank" href="mailto:rahulkumar703@outlook.com" rel="noreferrer">rahulkumar703@outlook.com</a>
                </div>
            </div>
        </div>
    )
}
