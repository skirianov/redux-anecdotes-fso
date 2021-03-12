const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case ('VOTED'):
      return state.replace(state, `voted for "${action.message.substring(0, 40)}...."`)
    case ('CLEAR'):
      return state.replace(state, action.message)
    default:
      return state
  }
}

export default notificationReducer

export const notify = (message) => {
  return {
    type: 'VOTED',
    message,
  }
}

export const clear = () => {
  return {
    type: 'CLEAR',
    message: ''
  }
}