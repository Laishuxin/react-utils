import React, { createContext } from 'react'
import Child1 from './Child1'

export const context = createContext('Talk is cheap, show me the code.')

export default function Printer1() {
  return (
    // Use default value('Talk is cheap, show me the code)
    // When context.Provider is missing.
    <context.Provider value={'Life is short, you need python.'}>
      <section>
        <h2>parent1</h2>
        <Child1 />
      </section>
    </context.Provider>
  )
}
