import React from 'react';
import './Slider.css'

function Slide(props) {
    return (
        <div>
            <img src={props.data.imageUrl} alt={props.data.title} />
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}

export default Slide;