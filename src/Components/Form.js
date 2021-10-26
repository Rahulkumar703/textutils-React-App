import React, { useState } from 'react';
import ActionBtn from './ActionBtn';
import './Css/form.css';


function Form(props) {

    window.title = "Text Utils | Home";
    const [text, setText] = useState('');
    const [farBox, setFarBox] = useState(false);
    const [searchInput, setSearchInput] = useState({searchFor: '', replaceWith: ''});

    function handleOnChange(e) {
        setText(e.target.value);
    }
    function handleSearchOnChange(e,input) {

        if(input === 'searchFor')
        {
            setSearchInput({
                ...searchInput,
                searchFor: e.target.value
            })
        }
        else
        {
            setSearchInput({
                ...searchInput,
                replaceWith: e.target.value
            })
        }
    }

    function uppercase() {
        setText(text.toUpperCase())
    }

    function lowercase() {
        setText(text.toLowerCase())
    }

    function capitalize() {

    }

    function selectAndCopy() {
        const x = document.getElementById('text--field');
        x.select();
        navigator.clipboard.writeText(text);
    }

    function removeExtraSpaces() {
        const newText = text.trim().split(/[ ]+/).join(" ");
        setText(newText);
    }

    function showFindReplaceBox() {
        setFarBox(!farBox)
    }

    function replace() {
        const searchedWord = searchInput.searchFor;
        if(text.includes(searchedWord))
        {   
            setText(text.replace(searchedWord, searchInput.replaceWith));
        }
    }
    function replaceAll() {
        const searchedWord = searchInput.searchFor;
        if(text.includes(searchedWord))
        {   
            setText(text.replaceAll(searchedWord, searchInput.replaceWith));
        }
    }

    function minify() {
        let newText = text.trim().split(/[ ]+/).join(" ").split('\n').join('');
        setText(newText);
    }

    function paste() {
        navigator.clipboard.readText()
            .then(text => {
                setText(text);
            })
            .catch(() => {
                console.error(setText('Unable to paste your text'));

                setTimeout(() => {
                    setText('');
                }, 2000);
            })
    }

    function clear() {
        setText('');
    }



    return (
        <form className={`form ${props.theme}`} onSubmit={(e) => { e.preventDefault() }}>
            <h1 className="form-heading" >Paste your Text Here</h1>

            <div className="text-field-box">
                <textarea title="Paste Your Text Here" id="text--field" value={text} onChange={handleOnChange} ></textarea>
            </div>

            <div className="about-text">
                <div className="row">
                    <p className="letter-count">Total number of Words are <span>{text === '' ? 0 : Math.max(text.trim().split(' ').length, text.trim().split('\n').length)}</span></p>
                    <p className="letter-count">Total number of letters are <span>{text.trim().length}</span></p>
                </div>
                <div className="row">
                    <p className="read-time">Average time to read this paragraph is <span>{ text.trim().length === 0 ? 0 : (Math.round(text.trim().split(' ').length * 0.00333 * 1000)/1000) } Minutes</span></p>
                </div>

            </div>

            <div className="action-box special-action">
                <ActionBtn type="submit" text="Paste" function={paste} />
                <ActionBtn type="reset" text="Clear All" function={clear} />
            </div>
            <div className="action-box" >
                <ActionBtn type="submit" text="UPPERCASE" function={uppercase} />
                <ActionBtn type="submit" text="lowercase" function={lowercase} />
                <ActionBtn type="submit" text="Capitalize" function={capitalize} />
                <ActionBtn type="submit" text="Select & Copy" function={selectAndCopy} />
                <ActionBtn type="submit" text="Remove extra spaces" function={removeExtraSpaces} />
                <ActionBtn type="submit" text="Find & Replace" function={showFindReplaceBox} />
                <ActionBtn type="submit" text="Minify Code" function={minify} />
            </div>
            {farBox ? <div className="find-and-replace-box">
                <div className="input-box">
                    <input type="text" id="find" placeholder="Search for" value={searchInput.searchFor} onChange={(e)=>{handleSearchOnChange(e, 'searchFor')}}/>
                    <input type="text" id="find" placeholder="Replace with" value={searchInput.replaceWith} onChange={(e)=>{handleSearchOnChange(e, 'replaceWith')}}/>
                </div>
                <div className="replace-btn">
                    <button onClick={replace}>Replace One</button>
                    <button onClick={replaceAll}>Replace All</button>
                </div>
            </div> : ''}

            <div className="preview-box">
                <h2>Text Preview</h2>
                <p>{text}</p>
            </div>
        </form>
    )
}

export default Form;
