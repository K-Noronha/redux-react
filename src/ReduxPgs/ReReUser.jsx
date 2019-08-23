import React from 'react'
import { updateSection, userName } from './actions'
import { useDispatch } from 'react-redux'

export default function ReReUser() {
    const dispatch = useDispatch();

    const submitUserName = (e) => {
        e.preventDefault()
        const uName = (e.target.uName.value).toUpperCase() || null

        dispatch(userName(uName))
        dispatch(updateSection(""))
    }

    return (
        <div className="user">
            <h4 className="user--title">Your Name</h4>
            <form ref={userName} onSubmit={submitUserName}>
                <input type="text" name="uName" placeholder="Enter Your Name" />
                <button type="submit"><h3>Enter</h3></button>
            </form>
        </div>
    )
}
