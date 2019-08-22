import React, { Component } from 'react'
import StateCard from "../components/StateCard"

export default class ReAll extends Component {
    render() {
        const data = this.props.data
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
}
