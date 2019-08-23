import React from 'react'
import data from "../data"
import { useSelector, useDispatch } from 'react-redux'
import ReReDemo from './ReReDemo'
import ReReUser from './ReReUser'
import ReReAll from './ReReAll'
import { updateSection } from './actions'

export default function ReReHome() {
    const sectionState = useSelector(state => state.sectionReducer);
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    let section = () => {
        switch (sectionState) {
            case "all": return <ReReAll data={data} />
            case "demo": return <ReReDemo data={data} />
            case "user": return <ReReUser />
            default: return null;
        }
    }
    return (
        <div>
            <div className="homepage">
                <h5 className="homepage--state">This is using React + Redux to manage state</h5>
                <div className="homepage--welcome">
                    <h1 className="homepage--welcome__text">Welcome</h1>
                    {userState ? <h1 className="homepage--welcome__name">{userState}!</h1> : null}
                </div>


                <div className="homepage--options">
                    <button onClick={() => dispatch(updateSection("all"))}>
                        <h2>All</h2>
                    </button>

                    <button onClick={() => dispatch(updateSection("demo"))}>
                        <h2>Demo</h2>
                    </button>

                    <button onClick={() => dispatch(updateSection("user"))}>
                        <h2>User</h2>
                    </button>
                </div>
                <p>------------------</p>
                {section()}

            </div>
        </div>

    )
}

