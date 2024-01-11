import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    setCount(count + 1)
  }
  function removeValue(){
    if(count>0)
    {
      setCount(count - 1)
    }
  }
  function resetValue(){
    setCount(0)
  }

  return (
    <>
      <div>
       <div class="container">
        <h1>Counter React App</h1>
        <div class="counter">
            <button id="increment-btn" onClick={addValue}>+</button>
            <div id="counter-value">{count}</div>
            <button id="decrement-btn" onClick={removeValue}>-</button>
        </div>
        <button id="reset" onClick={resetValue}>Reset</button>
    </div>
    </div>
    </>
  )
}

export default App
