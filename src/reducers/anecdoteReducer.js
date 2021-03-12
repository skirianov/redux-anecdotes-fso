const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
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
  }

  return state
}

const anecdoteReducer = {
  reducer,
  getId,
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

