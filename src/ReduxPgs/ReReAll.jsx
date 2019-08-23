import React from 'react'
import StateCard from '../components/StateCard'

export default function ReReAll(props) {
    const data = props.data
    return (
        <div className="all">
            {data.map((item, i) => (
                <div className="all--card" key={i}>
                    <h1>{item.matter}</h1>
                    <StateCard stateOfMatter={item} />
                </div>
            ))}
        </div>
    )
}
