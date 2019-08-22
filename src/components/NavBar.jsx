import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="header">
            <Link to="/">
                <button>
                    <h3>Home</h3>
                </button>
            </Link>

            <h3 className="header--title">States of Matter with State Management!</h3>
        </header>
    )
}
