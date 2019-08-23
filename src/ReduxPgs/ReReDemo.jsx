import React from 'react'
import StateCard from '../components/StateCard'
import { useSelector, useDispatch } from 'react-redux'
import { coolMatter, heatMatter } from './actions'


export default function ReReDemo(props) {
    const data = props.data;
    const matterState = useSelector(state => state.matterReducer)
    const dispatch = useDispatch();

    const cool = () => {
        if (matterState < 2) {
            dispatch(coolMatter())
        }
    }

    const heat = () => {
        if (matterState > 0) {
            dispatch(heatMatter())
        }
    }

    return (
        <div className="demo">
            <StateCard stateOfMatter={data[matterState]} />

            <div className="demo--buttons">
                <button onClick={() => cool()}>
                    <h3>Cool it down!</h3>
                </button>
                <button onClick={() => heat()}>
                    <h3>Turn up the Heat!</h3>
                </button>
            </div>
        </div>
    )
}
