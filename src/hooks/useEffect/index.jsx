import React, { Fragment, useEffect, useState } from 'react'
import SearchPanel from './search-panel'
import List from './list'
import { BASE_URL } from '~/config'
import { useFetch } from './hooks'

export default function UseEffect() {
  const [query, setQuery] = useState('')
  const { data: productList, isError, isLoading, fetchData } = useFetch()

  useEffect(() => {
    fetchData(`${BASE_URL}/products?name=${query}`)
  }, [query])

  const handleClick = query => {
    setQuery(query)
  }

  return (
    <Fragment>
      {isError ? <div style={{ color: 'red' }}>something error...</div> : null}
      <form onSubmit={e => e.preventDefault()}>
        <SearchPanel onClick={handleClick} />
        {isLoading ? (
          <div style={{ color: 'lightblue' }}>loading...</div>
        ) : (
          <List list={productList || []} />
        )}
      </form>
      <hr />
    </Fragment>
  )
}
