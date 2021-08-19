import React, { useReducer, useState, createContext } from 'react'
import { DECREMENT, INCREMENT, RESET, action4_create } from '../action'
import { reducer4, initialState4 } from '../reducer'
import Child1 from './Child1'
import Child2 from './Child2'

export const context = createContext({})

export default function Parent1() {
  const [inputValue, setInputValue] = useState(1)
  const [state, dispatch] = useReducer(reducer4, initialState4)
  const { value } = state

  return (
    <context.Provider value={{ state, dispatch }}>
      <section>
        <h2>parent counter</h2>
        <span>please enter step: </span>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
        />
        <p>current count: {value}</p>
        <div className="btns">
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
        <div className="children">
          <Child1 />
          <Child2 />
        </div>
      </section>
    </context.Provider>
  )
}
