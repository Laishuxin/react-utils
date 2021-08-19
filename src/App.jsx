import React from 'react'
import UseEffect from './hooks/useEffect'
import UseReducer from './hooks/useReducer'
import UseContext from './hooks/useContext'

export default function App() {
  const components = [
    { key: 'useEffect', component: UseEffect },
    { key: 'useReducer', component: UseReducer },
    { key: 'useContext', component: UseContext },
  ]
  return (
    <div className={'app'}>
      {components.map((item) => (
        <section key={item.key}>
          <h1>{item.key}</h1>
          <item.component />
        </section>
      ))}
    </div>
  )
}
