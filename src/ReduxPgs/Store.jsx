import React from 'react'
import ReReHome from './ReReHome'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers/index'



export default function Store() {
    const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return (
        <div>
            <Provider store={store}>
                <ReReHome />
            </Provider>
        </div>
    )
}
