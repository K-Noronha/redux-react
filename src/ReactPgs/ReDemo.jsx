import React, { Component } from 'react'
import StateCard from '../components/StateCard'

export default class ReDemo extends Component {
    cool = () => {
        const index = this.props.stateOfMatter.id;

        if (index < 2) {
            this.props.updateStateOfMatter(index + 1)
        }
    }

    heat = () => {
        const index = this.props.stateOfMatter.id;

        if (index > 0) {
            this.props.updateStateOfMatter(index - 1)
        }

    }

    render() {
        return (
            <div className="demo">
                <StateCard stateOfMatter={this.props.stateOfMatter} />

                <div className="demo--buttons">
                    <button onClick={() => this.cool()}>
                        <h3>Cool it down!</h3>
                    </button>
                    <button onClick={() => this.heat()}>
                        <h3>Turn up the Heat!</h3>
                    </button>
                </div>

            </div>
        )
    }
}
