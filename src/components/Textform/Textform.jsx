import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './Textform.css'

const Textform = (props) => {

    const [text, setText] = useState("")
    const [copied, setcopied] = useState(false)

    const handleChange = (e) => {
        setText(e.target.value)
        setcopied(false)
    }

    const handleUppercase = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
    }

    const handleLowercase = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
    }

    const handleclear = () => {
        let clearText = ''
        setText(clearText)
    }

    const handleSentencecase = () => {
        let SentenceCase = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
        setText(SentenceCase)
    }

    const handleTitlecase = () => {
        let splitText = text.toLowerCase().split(' ');
        for (let i = 0; i < splitText.length; i++) {
            splitText[i] = splitText[i][0].toUpperCase() + splitText[i].slice(1);
        }
        let TestCase = splitText.join(' ')
        setText(TestCase)
    }

    const handleCopy = () => {
        setcopied(true)
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'info' ? 'black' : 'white'}}>
                <h1 >Enter a text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" id='textarea1' value={text} style={{backgroundColor: props.mode === 'info' ? 'white' : 'gray', color: props.mode === 'info' ? 'black' : 'white'}} onChange={handleChange} rows="5"></textarea>
                </div>
                <div className="btns" >
                    <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleUppercase}>Upper case</button>
                    <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleLowercase}>Lower case</button>
                    <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleSentencecase}>Sentence case</button>
                    <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleTitlecase}>Title case</button>
                    <CopyToClipboard text={text} onCopy={handleCopy}>
                        <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}}>Copy</button>
                    </CopyToClipboard>
                    <button className='btn' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleclear}>Clear</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'info' ? 'black' : 'white'}}>
                <h2>Your text Summary</h2>
                <div className="summary-info">
                    <p> {text.split(" ").filter(function (n) { return n !== '' }).length}
                        <span> words</span>
                    </p>
                    <p>{text.length} Characters</p>
                    <p>{0.01 * text.split(" ").length} minutes to read</p>
                </div>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : 'Enter text to preview'}</p>
            </div>
        </>
    )
}

export default Textform