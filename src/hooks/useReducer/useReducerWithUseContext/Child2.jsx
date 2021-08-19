import React, { useContext, useState } from 'react'
import { INCREMENT, DECREMENT, RESET, action4_create } from '../action'
import { context } from './Parent1'

export default function Child2() {
  const { state, dispatch } = useContext(context)
  const { value } = state
  const [inputValue, setInputValue] = useState(1)
  return (
    <section>
      <section>
        <h2>child2</h2>
        <span>please enter step: </span>
        <input
          type={'number'}
          value={inputValue}
          onChange={e => setInputValue(parseFloat(e.target.value) || 0)}
        />
        <p>current count: {value}</p>
        <div className={'btns'}>
          <button
            onClick={() => dispatch(action4_create(INCREMENT, inputValue))}
          >
            increment
          </button>
          <button
            onClick={() => dispatch(action4_create(DECREMENT, inputValue))}
          >
            decrement
          </button>
          <button onClick={() => dispatch(action4_create(RESET, inputValue))}>
            reset
          </button>
        </div>
      </section>
    </section>
  )
}
