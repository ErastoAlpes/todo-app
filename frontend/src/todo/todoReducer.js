
const  INITIAL_STATE = { description: '', list: [] }


export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payLoad}
        case 'TODO_SEARCHED':
            return { ...state, list: action.payLoad.data }
        case 'TODO_ADDED':
            return { ... state, description: ''}
        default:
            return state
    }
}
