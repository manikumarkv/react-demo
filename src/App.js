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
    default:
      return firstname
  }
}

const namestore = createStore(x)

const reInitialzeMyApp = () => ReactDOM.render(
  <Counter
    value={namestore.getState()}
    onIncrement={() => namestore.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => namestore.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
)
reInitialzeMyApp()
// render()
namestore.subscribe(reInitialzeMyApp)
