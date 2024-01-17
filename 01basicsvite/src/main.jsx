import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type : 'a',
    props:{
        href:"https://www.google.co.in/",
        target:"_blank"
    },
    children:"Click me to vist google"
}



const AnotherElement = (
    <a href="https://www.google.co.in/" target='_blank'>Visit Google</a>
)

function MyApp(){
    return (
        <div>
        <h1>Custom React App</h1>
        </div>
    )
}

const AreactElement = React.createElement(
    'a',
    {href:"https://www.google.co.in/",target:"_blank"},
    'Click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // <AnotherElement/>
    // AnotherElement
    // AreactElement
    <App/>
    )
