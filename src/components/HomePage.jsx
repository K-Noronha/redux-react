import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="app--homepage">
            <Link to="/react">
                <button>
                    <h1>React</h1>
                </button>
            </Link>
            <Link to="/redux-react">
                <button>
                    <h1>React+Redux</h1>
                </button>
            </Link>
        </div>
    )
}
