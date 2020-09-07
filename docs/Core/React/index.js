// 仓库就是一个闭包,一个对象
const CHANGE_COLOR = 'CHANGE_COLOR'

let initialState = {
  color: 'red',
  updataCount: 0
}
function reducer(state = initialState, action) {
  if (action.type === CHANGE_COLOR) {
    return {
      ...state,
      color: action.paylod,
      updataCount: state.updataCount + 1
    }
  }
  return state
}

function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = []
  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listeners => listeners())
  }
  function subscribe(listeners) {
    listeners.push(listeners)
    return function() {
      let index = listeners.indexOf(listeners)
      listeners.splice(index, 1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}
let store = createStore(reducer, initialState)
console.log(store.getState())
console.log(store.dispatch({
  type: CHANGE_COLOR,
  paylod: 'yellow'
}))

store.subscribe(() => {
     console.log(store.getState())
})