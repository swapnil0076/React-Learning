import { useState,useEffect,useCallback ,useRef} from 'react'

import './App.css'

function App() {
 const [length,setLength] = useState(8)
 const [numberAllowed,setNumberAllowed] = useState(false)
 const [charAllowed,setCharAllowed] = useState(false)
 const [password,setPassword] = useState('')

 const generatePassword = useCallback( () => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv"

  if(numberAllowed){
    str+="0123456789";
  }

  if(charAllowed){
    str += "!@#$%^&*()_+";
  }
  console.log(str)

  for(let i=1;i<length;i++){
    const char = Math.floor(Math.random() * str.length+1)
    pass += str.charAt(char)
  }

  setPassword(pass)

 },[length,numberAllowed,charAllowed]) 


useEffect(() =>{
  generatePassword()
},[length,numberAllowed,charAllowed])

const copyPasswordToClipWord = () =>{
  window.navigator.clipboard.writeText(password)
}

  return (
    <div className='border-zinc-100 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 
    bg-green-500 text-white m-2.5
    '> 
    <h1 className='text-3xl text-orange-500 text-center m-2.5'>Password Generator</h1>

    <div className='flex shadow-rounded-lg overflow-hidden m- justify-between mb-4'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3 text-black'
    placeholder='Password'
    readOnly
    />
    <button
    onClick={copyPasswordToClipWord}
    className=" outline-none px-3 py-0.5 shrink-0 shadow bg-blue-600">Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={20}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLength(e.target.value)} 
      name=''
      />
        </div>
        <div>
      <label htmlFor="length">Length : {length}</label>
      <input type="checkbox" 
      defaultChecked={numberAllowed}
      onChange={() =>{
        setNumberAllowed((prev) => !prev)
      }}
      
      />
      <label htmlFor="number">Add Numbers</label>
      </div>
      <div>
      <input type="checkbox" 
      defaultChecked={charAllowed}
      onChange={() =>{
        setCharAllowed((prev) => !prev)
      }}
      
      />
<label htmlFor="character">Add Character</label>
</div>
  
    </div>

    </div>
  )
}

export default App
