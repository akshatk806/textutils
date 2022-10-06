import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUppercaseClick=()=>{
        // console.log("Uppercase button clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const [text,setText]=useState('Enter text here');
    return (
        <div>
            <div className="mb-3">
                {/* <h2>{props.heading} - {text}</h2> */}
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        </div>
    )
}
