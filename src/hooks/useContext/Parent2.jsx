import React, { createContext } from 'react'
import Child2 from './Child2'

export const context = createContext({
  quote: 'Talk is cheap, show me the code.',
  who: 'linus',
})

export default function Parent2() {
  const value = {
    quote: 'Life is short, you need python.',
    who: 'Guido van Rossum',
  }
  return (
    // Use default value('Talk is cheap, show me the code)
    // When context.Provider is missing.
    <context.Provider value={value}>
      <section>
        <h2>parent2</h2>
        <Child2 />
      </section>
    </context.Provider>
  )
}
