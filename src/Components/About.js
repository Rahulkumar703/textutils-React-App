import React from 'react';
import './Css/about.css';

export default function About(props) {

    return (
        <div className={`about-section ${props.theme}`}>
            <div className="heading">
                <h1>About <span>Text Utils</span></h1>
            </div>
            <div className="about-content">
                <p className="sub-heading"><span>Text Utils</span> is a text Utility which can perform following task on a piece of text line or paragraph</p>
                <ol>
                    <div className="tasks">                        
                        <li>Convert to UpperCase</li>
                        <p>
                            This can convert every single letter of your text to Uppercase (Capital-letter).
                        </p>
                        <div className="example">
                            <p>
                                <b>Ex</b> - <span>'this is a cAt'</span> to <span>'THIS IS A CAT'</span>
                            </p>
                        </div>
                    </div>
                    <div className="tasks">                        
                        <li>Convert to Lowercase</li>
                        <p>
                            This can convert every single letter of your text to Lowercase (Small-letter).
                        </p>
                        <div className="example">
                            <p>
                                <b>Ex</b> - <span>'ThiS iS a cAt'</span> to <span>'this is a cat'</span>
                            </p>
                        </div>
                    </div>
                    <div className="tasks">
                        <li>Capitalize each words</li>
                        <p>
                            This can convert first letter to Capital of every single word.
                        </p>
                        <div className="example">
                            <p>
                                <b>Ex</b> - <span>'this is a cat'</span> to <span>'This Is A Cat'</span>
                            </p>
                        </div>
                    </div>
                    <div className="tasks">                        
                        <li>Remove extra spaces</li>
                        <p>
                            This can remove extra spaces from the text.
                        </p>
                        <div className="example">
                            <p>
                                <b>Ex</b> - <span>'this &nbsp;&nbsp;&nbsp;&nbsp;is &nbsp;&nbsp;&nbsp;a cat'</span> to <span>'this is a cat'</span>
                            </p>
                        </div>
                    </div>
                    <div className="tasks">                        
                        <li>Find and replace</li>
                        <p>
                            This can find any letter, word or paragraph and replace with other.
                        </p>
                    </div>
                    <div className="tasks">                        
                        <li>Minify Code</li>
                        <p>
                            If you are a devloper then this is going to be very usefull fro you it can create minified version of your code by removing extra spaces and converting into a single line.
                        </p>
                    </div>
                </ol>
            </div>
        </div>
    )
}
