// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function CountProvider({ children }) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  )
}

function useCount() { 
  const value = React.useContext(CountContext) 
  if (!value) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return value
}

function CountDisplay() {
  const [count] = useCount(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
