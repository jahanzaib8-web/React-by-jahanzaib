import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15) 
  
  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
      <h1>React course with Jahanzaib {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>{' '}
      <button onClick={removeValue}>Remove value</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
