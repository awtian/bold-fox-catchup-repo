import {INCREMENT, DECREMENT, CUSTOM_GREETING} from '../actions/actionType'

const defaultState = {
  greeting: 'hello bold fox, great journey await',
  count: 0
}

export default function (state=defaultState, action) {
  const {type, payload} = action
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count+1
      }  
    case DECREMENT:
      return {
        ...state,
        count: state.count-1
      }
    case CUSTOM_GREETING: 
      return {
        ...state,
        greeting: payload
      }
    default:
      return state
  }
}