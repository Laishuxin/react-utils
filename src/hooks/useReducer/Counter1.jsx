import React, { useReducer } from 'react'
import { DECREMENT, INCREMENT, RESET } from './action'
import { reducer1, initialState1 } from './reducer'

export default function Counter1() {
  const [state, dispatch] = useReducer(reducer1, initialState1)
  return (
    <div>
      <h1>Counter1</h1>
      <p>当前计数为：{state}</p>
      <div className={'btns'}>
        <button onClick={() => dispatch(INCREMENT)}>increment</button>
        <button onClick={() => dispatch(DECREMENT)}>decrement</button>
        <button onClick={() => dispatch(RESET)}>reset</button>
      </div>
    </div>
  )
}
