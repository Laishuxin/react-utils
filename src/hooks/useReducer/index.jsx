import React from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2WithObject'
import Counter3 from './Counter3'
import Counter4 from './useReducerWithUseContext/Parent1'

export default function UseReducer() {
  return (
    <div>
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <Counter3 />
      <hr />
      <Counter4 />
      <hr />
    </div>
  )
}
