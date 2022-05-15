// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Repliciate traditional setState behaviour which can be called with a new state
//  value or with a function that takes the current state and returns a new 
//  state 
// function countReducer(prevState, action) {
  // return {
    // ...prevState,
    // ...(typeof action === 'function' ? action(prevState) : action)
  // }
// }

function countReducer(prevState, action) {
  switch (action.type) {
    case "INCREMENT": 
      return {
        count: prevState.count + action.step
      }
    default: 
      return {...prevState}
      // throw new Error(`Unsupported action type ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  })
  // const [state, setState] = React.useReducer(countReducer, {
    // count: initialCount
  // })
  const { count } = state
  // const increment = () => setState(state => ({ count: state.count + step }))
  const increment = () => dispatch({ type: "INCREMENT", step })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
