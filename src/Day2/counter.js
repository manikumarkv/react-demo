import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);   
  }



  render() {
    const { value, onIncrement, onDecrement, mouseOver } = this.props
    return (
      <p>
       my props valuse is : {value}
        {' '}
        <button onMouseOver={()=> {mouseOver("mani")}} onClick={onIncrement}>
         increment
        </button>
        {' '}
        <button onClick={onDecrement}>
        decrement
        </button>
        {' '}
       
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
