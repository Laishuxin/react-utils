import React, { useContext } from 'react'
import { context } from './Parent1'

export default function Child1() {
  const ctx = useContext(context)
  return (
    <div>
      <h2>child1</h2>
      <p>current count: {ctx.state.value}</p>
    </div>
  )
}
