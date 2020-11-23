// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function CountProvider(props) {
  const value = React.useState(0)
  return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const context = React.useContext(CountContext)
  if(!context){
      Error('No Context')
  }
  return context
}

function CountDisplay() {
  const [count, setCount] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = useCount()
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
