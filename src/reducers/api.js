import {FETCH_HERO_ERROR, FETCH_HERO_SUCCESS, FETCH_HERO_LOADING} from '../actions/actionType'
const initialState = {
  heroes: [],
  loading: false,
  error: false,
  isLoaded: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_HERO_LOADING:
    return { ...state, loading: true }
  case FETCH_HERO_ERROR:
    return { ...state, error: true, loading: false}
  case FETCH_HERO_SUCCESS: 
    return { ...state, heroes: payload, loading: false, isLoaded: true }
  default:
    return state
  }
}
