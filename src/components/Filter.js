import React from 'react'
import { filterAnecdotes } from '../reducers/filterReducer'
import { useSelector, useDispatch } from 'react-redux'

const Filter = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleChange = ({target}) => {
    dispatch(filterAnecdotes(anecdotes, target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter