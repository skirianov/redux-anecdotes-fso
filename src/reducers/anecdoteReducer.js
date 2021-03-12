const reducer = (state = [], action) => {
  let array = [...state]
  const actionToObject = Object(action.data);
  array.map((each) => {
    if (each.id === actionToObject.id){
      each.votes = actionToObject.votes
    }
  })
  array.sort((a,b) => b.votes - a.votes)



  // eslint-disable-next-line default-case
  switch (action.type) {
    case ('VOTE'):
      return [...array]
    case ('NEW_ANECDOTE'):
      return array.concat(action.data)
    case ('INIT'):
      return action.data
  }

  return state
}

const anecdoteReducer = {
  reducer,
}

export default anecdoteReducer

export const voteAnecdote = (votedAnecdote) => {
  return {
    type: 'VOTE',
    data: {
      content: votedAnecdote.content,
      id: votedAnecdote.id,
      votes: votedAnecdote.votes + 1,
    }
  }
}

export const initialAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes,
  }
}