import React, { useContext } from 'react'
import { context } from './Parent2'

export default function SubChild1() {
  const ctx = useContext(context)
  const { quote, who } = ctx
  return (
    <section>
      <h2>sub-child1</h2>
      <p>
        well-known saying: <q>{quote}</q> by <em>{who}</em>
      </p>
    </section>
  )
}
