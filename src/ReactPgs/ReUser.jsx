import React, { Component } from 'react'

export default class ReUser extends Component {

    userName = React.createRef();

    submitUserName = (e) => {
        e.preventDefault()
        const uName = (this.userName.current.uName.value).toUpperCase()
        this.props.updateUser(uName+ " !") 
        this.props.updateSection("")
    }

    render() {
        return (
            <div>
                <h2>Your Name</h2>
                <form ref={this.userName} onSubmit={this.submitUserName}>
                    <input type="text" name="uName" placeholder="Enter Your Name" />
                    <button type="submit">Enter!</button>
                </form>
            </div>
        )
    }
}
