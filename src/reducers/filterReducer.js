const filterReducer = (state = [], action) => {
  if (action.type === 'FILTER') {
    return [...action.filtered]
  }
  return state
}

export const filterAnecdotes = (anecdotes, input) => {
  const filtered = anecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().includes(input.toLowerCase())
  })

  return {
    type: 'FILTER',
    filtered: [...filtered]
  }
}

export default filterReducer