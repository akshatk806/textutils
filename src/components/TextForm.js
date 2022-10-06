import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
