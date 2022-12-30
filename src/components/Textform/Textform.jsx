import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './Textform.css'

const Textform = () => {

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
            <div className="container">
                <h1>Enter a text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" id='textarea1' value={text} onChange={handleChange} rows="5" placeholder='Enter your text...'></textarea>
                </div>
                <div className="btns">
                    <button className='btn' onClick={handleUppercase}>Upper case</button>
                    <button className='btn' onClick={handleLowercase}>Lower case</button>
                    <button className='btn' onClick={handleSentencecase}>Sentence case</button>
                    <button className='btn' onClick={handleTitlecase}>Title case</button>
                    <CopyToClipboard text={text} onCopy={handleCopy}>
                        <button className='btn'>Copy</button>
                    </CopyToClipboard>
                    <button className='btn' onClick={handleclear}>Clear</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <div className="summary-info">
                    <p> {text.split(" ").filter(function (n) { return n !== '' }).length}
                        <span> words</span>
                    </p>
                    <p>{text.length} Characters</p>
                    <p>{0.01 * text.split(" ").length} minutes to read</p>
                </div>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Textform