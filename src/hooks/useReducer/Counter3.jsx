import React, { useState, useReducer } from 'react'
import { action3_create, INCREMENT, DECREMENT, RESET } from './action'
import { reducer3, initialState3 } from './reducer'
export default function Counter3() {
  const [inputValue, setInputValue] = useState(1)
  const [state, dispatch] = useReducer(reducer3, initialState3)
  const { value } = state
  return (
    <div>
      <h1>Counter3</h1>
      <span>please input step: </span>
      <input
        type={'number'}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <p>当前计数为：{value}</p>
      <div className={'btns'}>
        <button onClick={() => dispatch(action3_create(INCREMENT, inputValue))}>
          increment
        </button>
        <button onClick={() => dispatch(action3_create(DECREMENT, inputValue))}>
          decrement
        </button>
        <button onClick={() => dispatch(action3_create(RESET, inputValue))}>
          reset
        </button>
      </div>
    </div>
  )
}
