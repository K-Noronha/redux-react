import React, { Component } from 'react'
import ReDemo from './ReDemo';
import ReAll from './ReAll';
import ReUser from './ReUser';
import data from '../data'

export default class ReHome extends Component {
    state = {
        section: null,
        stateOfMatter: data[1],
        user: ""
    }

    updateSection = (section) => {
        this.setState({
            section
        })
    }

    updateUser = (user) => {
        this.setState({
            user
        })
    }

    updateStateOfMatter = (index) => {
        this.setState({
            stateOfMatter: data[index]
        })
    }

    render() {
        let section = () => {
            switch (this.state.section) {
                case "all": return <ReAll data={data} />
                case "demo": return <ReDemo stateOfMatter={this.state.stateOfMatter}
                    updateStateOfMatter={this.updateStateOfMatter} />
                case "user": return <ReUser updateUser={this.updateUser}
                    updateSection={this.updateSection} />
                default: return null;
            }
        }

        return (
            <div className="homepage">
                <h5>This is using React to manage state</h5>
                <div className="homepage--welcome">
                    <h1>Welcome</h1>
                    {this.state.user ? <h1>{this.state.user} !</h1> : null}
                </div>


                <div className="homepage--options">
                    <button onClick={() => this.updateSection("all")}>
                        <h2>All</h2>
                    </button>

                    <button onClick={() => this.updateSection("demo")}>
                        <h2>Demo</h2>
                    </button>

                    <button onClick={() => this.updateSection("user")}>
                        <h2>User</h2>
                    </button>
                </div>
                    <p>------------------</p>
                {section()}

            </div>
        )
    }
}
