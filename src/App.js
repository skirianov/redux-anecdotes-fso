import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from '../src/components/Notification'
import Filter from '../src/components/Filter'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App