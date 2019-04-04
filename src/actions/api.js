import {FETCH_HERO_ERROR, FETCH_HERO_SUCCESS, FETCH_HERO_LOADING} from './actionType'
import axios from 'axios'

export function fetchHeroes () {
  return (dispatch) => {
    dispatch(heroLoading())
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        return dispatch(heroSuccess(data))
      })
      .catch(e => dispatch(heroError()))
  }
}

function heroSuccess (payload) {
  return {
    type: FETCH_HERO_SUCCESS,
    payload
  }
}

function heroError () {
  return {
    type: FETCH_HERO_ERROR
  }
}

function heroLoading () {
  return {
    type: FETCH_HERO_LOADING
  }
}