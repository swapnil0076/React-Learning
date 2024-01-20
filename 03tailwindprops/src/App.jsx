import './App.css'
import Card from './assets/components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite With Tailwind Css</h1>
    <Card username = "Swapnil Dhiman"  Avator= "https://cdn.pixabay.com/photo/2023/12/28/14/09/cat-8474233_1280.png"/>
    <Card username = "Json" Avator="https://cdn.pixabay.com/photo/2023/07/29/06/28/bird-8156308_1280.jpg"/>
    <Card username = "Manager" Avator = "https://cdn.pixabay.com/photo/2023/09/13/13/48/cactus-8250996_1280.jpg"/>
    </>
  )
}

export default App
