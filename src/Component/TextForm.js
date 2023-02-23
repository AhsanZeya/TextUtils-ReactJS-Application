import React, { useState } from 'react'




export default function TextForm(props) {

    const changeToUpper = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success")
        console.log(newText);
    }

    const updateEvent = (event) => {
        console.log("On Change Event")
        setText(event.target.value);

    }

    const changeToLower = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success")
        console.log(newText)
    }

    const changeClearLower=()=>{
        const newText='';
        props.showAlert("Clear All","success")
        setText(newText)
    }

    const CopyText=()=>{
        const newText=document.getElementById('box');
        newText.select();
        props.showAlert("Copy To Clipboard","success")
        navigator.clipboard.writeText(newText.value);
    }



    const [text, setText] = useState('');

    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.texttitle}</h1>
            <div className="mb-3">
                <textarea className="form-control" id='box' value={text} style={{background: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}} placeholder="Enter the words that you want to analize" onChange={updateEvent}  rows="8"></textarea>
            </div>
            <div className='row' >
                <div className='col-sm-3'>
                    <button className='btn btn-primary' onClick={changeToUpper}>Convert To Upper</button>
                </div>
                <div className='col-sm-3'>
                    <button className='btn btn-primary' onClick={changeToLower}>Convert To Lower</button>
                </div>
                <div className='col-sm-2'>
                    <button className='btn btn-primary' onClick={changeClearLower}>Clear All</button>
                </div>
                <div className='col-sm-3'>
                    <button className='btn btn-primary' onClick={CopyText}>Copy Text</button>
                </div>
            </div>

            <h3>Your Text Summary</h3>
            <p>{text.split(' ').length} words || {text.length} Characters</p>
            <p>{0.008 * text.split(' ').length } Minutes Read </p>
            <h5>Preview</h5>
            <p>{text.length?text:"Enter Your Text To Preview"}</p>
            
        </div>
    )
}

