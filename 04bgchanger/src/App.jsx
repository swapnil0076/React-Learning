import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('yellow')

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div className='flex flex-wrap justify-center self-center gap-3 shadow-lg bg white px-3 rounded-3xl '>
  <button onClick={() => setColor('red')}  className="m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Test 1</button>
  <button onClick={() => setColor('green')}  className="m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Test 2</button>
  <button onClick={() => setColor('yellow')} className="m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Test 3</button>
      </div>
    </div>
    </div>
  )
}

export default App
