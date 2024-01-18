import {useState} from 'react'
import './App.css'

function App() {
  

  const [counter,setCounter] = useState(0)

  // let counter = 15

  const addValue = ()=>{
    // setCounter(counter+1)
    // setCounter((prev) =>prev+1 );
    // setCounter((prev) =>prev+1 );
    // setCounter((prev) =>prev+1 );
    setCounter((prev) =>prev+1 );
  }

  const removeValue = () =>{
    setCounter(counter-1);
  }

  return (
    <>
     <h1>React Course</h1>
     <h2>Count value :- {counter} </h2>
     <button onClick={addValue}>Add Value </button>
     <button onClick={removeValue}>Remove value</button>{" "}
     <p>footer:  </p>
    </>
  )
}

export default App
