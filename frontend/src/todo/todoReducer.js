/*
const INITIAL_STATE = {
      description: 'Ler livro',

      list: [{
      _id: 1,
      description: 'Pagar fatura do cartão',
      done: true
  },
  {
      _id: 2,
      description: 'Reunião com a equipe às 10:00',
      done: false
  },
  {
      _id: 3,
      description: 'Consulta médicas na terça depois do almoço',
      done: false
  }]
}



export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
     case 'DESCRIPTION_CHANGED':
  return { ...state, description: action.payload }
      case 'TODO_SEARCHED':
  return { ...state, list: action.payload.data }
      default:
  return state
  }
}
*/
const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
      switch(action.type) {
          case 'DESCRIPTION_CHANGED':
              return { ...state, description: action.payload }
          case 'TODO_SEARCHED':
              return { ...state, list: action.payload }//desnecessario o 'payLoad.data', pois o '.data'(que é a lista dos dados) ja vem carregado do 'search' no 'todoReducer'
          case 'TODO_ADDED':
              return { ...state, description: ''}
        case 'TODO_CLEAR':  
            return {... state, description: ''}
          default:
              return state
  }
}
