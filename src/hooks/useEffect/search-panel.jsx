import React, { useState } from 'react'

export default function SearchPanel(props) {
  const { onClick } = props
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <input
        type={'text'}
        placeholder={'请输入商品的信息'}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          onClick(inputValue)
          setInputValue('')
        }}
      >
        确定
      </button>
    </div>
  )
}
