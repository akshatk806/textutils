import React from 'react'

export default function Contact(props) {
    document.title='TextUtils | Contact';

    return (
        <div className='my-3 card' style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
            <div className="card-header" style={{color: props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#50575e':'white'}}>
                Contact Us
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p style={{color: props.mode==='dark'?'white':'black'}}>Akshat Kumar | &copy; TextUtils 2022 | All Rights Reserved</p>
                </blockquote>
            </div>
        </div>
    )
}
