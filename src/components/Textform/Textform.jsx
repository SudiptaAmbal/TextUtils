import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLowercase = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
        props.showAlert('Converted to Lowercase', 'success')
    }

    const handleclear = () => {
        let clearText = ''
        setText(clearText)
        props.showAlert('Text Cleared !!', 'success')
    }

    const handleSentencecase = () => {
        let SentenceCase = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
        setText(SentenceCase)
        props.showAlert('Converted to Sentencecase', 'success')
    }

    const handleTitlecase = () => {
        let splitText = text.toLowerCase().split(' ');
        for (let i = 0; i < splitText.length; i++) {
            splitText[i] = splitText[i][0].toUpperCase() + splitText[i].slice(1);
        }
        let TestCase = splitText.join(' ')
        setText(TestCase)
        props.showAlert('Converted to Titlecase', 'success')
    }

    const handleCopy = () => {
        setcopied(true)
        props.showAlert('Text Copied !!', 'success')
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'info' ? 'black' : 'white'}}>
                <h1 >Enter a text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" id='textarea1' value={text} style={{backgroundColor: props.mode === 'info' ? 'white' : 'gray', color: props.mode === 'info' ? 'black' : 'white'}} onChange={handleChange} rows="5"></textarea>
                </div>
                <div className="btns" >
                    <button className='btn btn-primary mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleUppercase}>Upper case</button>
                    <button className='btn btn-primary mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleLowercase}>Lower case</button>
                    <button className='btn btn-primary mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleSentencecase}>Sentence case</button>
                    <button className='btn btn-primary mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleTitlecase}>Title case</button>
                    <CopyToClipboard text={text} onCopy={handleCopy}>
                        <button className='btn btn-info mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}}>Copy</button>
                    </CopyToClipboard>
                    <button className='btn btn-warning mx-1 my-1' style={{color: props.mode === 'info' ? 'white' : 'black'}} onClick={handleclear}>Clear</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'info' ? 'black' : 'white'}}>
                <h2>Your text Summary</h2>
                <div className="summary-info px-3">
                    <p> {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}
                        <span> words</span>
                    </p>
                    <p>{text.length} Characters</p>
                    <p>{0.01 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes to read</p>
                </div>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : 'Enter text to preview'}</p>
            </div>
        </>
    )
}

export default Textform