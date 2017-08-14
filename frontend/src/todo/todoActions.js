import axios from 'axios'

const URL = 'http://localhost:30033/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})
//usando o middle THUNK
export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description//pega o estado atual(store)
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({
                    type: 'TODO_SEARCHED', 
                    payload: resp.data})
                )
    }

  return {
      type: 'TODO_SEARCHED',
      payload: request
  }
}
//usando o middle THUNK
export const add = (description) => {
  return dispatch => {
      axios.post(URL, { description })
      .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}
//usando o middle THUNK
export const markAsDone = (todo) => {
  return dispatch => {
      axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => dispatch(search()))
  }
}
//usando o middle THUNK
export const markAsPending = (todo) => {
  return dispatch => {
      axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch(search()))
  }
}
//usando o middle THUNK
export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}
//multiplas acoes: midle MULT
export const clear =() => {
    return  [{type: 'TODO_CLEAR'}, search()]
}



