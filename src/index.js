import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './Day2/counter'


function x(firstname = 'react', action) {
    switch (action.type) {
        case 'INCREMENT':
            return "demo1"
        case 'DECREMENT':
            return 'demo2'
        case 'Update':
            return action.data1
        default:
            return firstname
    }
}

const namestore = createStore(x)

const render = () => ReactDOM.render(
    <Counter
        value={namestore.getState()}
        mouseOver={(data) => namestore.dispatch({ type: 'Update', data1: data })}
        onIncrement={() => namestore.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => namestore.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('reactApp')
)
// reInitialzeMyApp()
render()
namestore.subscribe(render)
