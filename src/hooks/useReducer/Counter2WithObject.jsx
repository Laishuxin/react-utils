import React, { useReducer } from 'react'
import { action2_create, INCREMENT, DECREMENT, RESET } from './action'
import { reducer2, initialState2 } from './reducer'

export default function Counter2WithObject() {
  const [state, dispatch] = useReducer(reducer2, initialState2)
  const { value } = state
  return (
    <div>
      <h1>Counter2</h1>
      <p>当前计数为：{value}</p>
      <div className={'btns'}>
        <button onClick={() => dispatch(action2_create(INCREMENT))}>
          increment
        </button>
        <button onClick={() => dispatch(action2_create(DECREMENT))}>
          decrement
        </button>
        <button onClick={() => dispatch(action2_create(RESET))}>reset</button>
      </div>
    </div>
  )
}
