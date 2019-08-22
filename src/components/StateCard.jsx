import React from 'react'

export default function StateCard(props) {
    const {type, image, desc} = {...props.stateOfMatter}
    return (
        <div className="stateCard">
            <h2>{type}</h2>
            <p>{desc}</p>
            <img src={image} alt={type} />
        </div>
    );
}
