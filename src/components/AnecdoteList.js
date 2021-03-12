import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { initialAnecdotes, voteAnecdote } from '../reducers/anecdoteReducer'
import { notify, clear } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(initialAnecdotes(anecdotes)))
  }, [dispatch])


  const anecdotes = useSelector(state => state.anecdotes)
  const filtered = useSelector(state => state.filter)
  const vote = (id) => {
    const anecdote = anecdotes.find((item) => item.id === id);
    dispatch(voteAnecdote(anecdote))
    dispatch(notify(anecdote.content))
    setTimeout(() => dispatch(clear()), 3000)
  }

  if (filtered.length !== 0) {
    return (
      <div>
          {filtered.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
      </div>
    )
  } else {
    return (
      <div>
          {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
      </div>
    )
  }
  
  
}

export default AnecdoteList;