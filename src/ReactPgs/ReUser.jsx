import React, { Component } from 'react'

export default class ReUser extends Component {

    userName = React.createRef();

    submitUserName = (e) => {
        e.preventDefault()
        const uName = (this.userName.current.uName.value).toUpperCase() || null
        this.props.updateUser(uName) 
        this.props.updateSection("")
    }

    render() {
        return (
            <div className="user">
                <h4 className="user--title">Your Name</h4>
                <form ref={this.userName} onSubmit={this.submitUserName}>
                    <input type="text" name="uName" placeholder="Enter Your Name" />
                    <button type="submit"><h3>Enter</h3></button>
                </form>
            </div>
        )
    }
}
