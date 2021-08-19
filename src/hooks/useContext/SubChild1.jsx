import React, { useContext } from 'react'
import { context } from './Parent1'

export default function SubChild1() {
  const ctx = useContext(context)
  return (
    <section>
      <h2>sub-child1</h2>
      <p>well-known saying: <q>{ctx}</q></p>
    </section>
  )
}

