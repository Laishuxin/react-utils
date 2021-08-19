import React from 'react'

export default function List(props) {
  const { list } = props
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <div className="item-name">{item.name}</div>
          <div className="item-detail">{item.detail}</div>
        </li>
      ))}
    </ul>
  )
}

