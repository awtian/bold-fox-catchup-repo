import {INCREMENT, DECREMENT, CUSTOM_GREETING} from './actionType'


export function increment () {
  return {type: INCREMENT}
}

export function decrement () {
  return {type: DECREMENT}
}

export function cgreeting (payload) {
  let value = payload.target.value.slice(0,12)
  if(value === 'secret') value = 'DONT TELL ANYONE PLZ'
  return {type: CUSTOM_GREETING, payload: value}
}