import React, { Component } from 'react'
import ReDemo from './ReDemo';
import ReAll from './ReAll';
import ReUser from './ReUser';

export default class ReHome extends Component {
    state = {
        section: null,
        statesOfMatter: { 
                        

                            },
        temperature: "room",
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



    render() {
        let section = () => {
            switch (this.state.section) {
                case "all": return <ReAll />
                case "demo": return <ReDemo />
                case "user": return <ReUser updateUser={this.updateUser}
                                            updateSection={this.updateSection} />
                default: return null;
            }
        }

        return (
            <div>
                <h1>Welcome</h1>
                {this.state.user ? <h1>{this.state.user}</h1> : null}
                <p>This is using React to manage state!</p>
                
                <div>
                    <button onClick={() => this.updateSection("all")}>
                        <h2>All</h2>
                    </button>

                    <button onClick={() => this.updateSection("demo")}>
                        <h2>Change the states!</h2>
                    </button>

                    <button onClick={() => this.updateSection("user")}>
                        <h2>User</h2>
                    </button>
                </div>

                {section()}


            </div>
        )
    }
}
