import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/** FEEDBACK: You are really close, you have your components however, you are missing your state to make your greeting dynamic! */
const SizeButtons = () => {
  return (
    <>
      <button>-</button>
      <button>+</button>
    </>
  )
}

const Header = () => {
  return <h1>Whats Cooking</h1>
}

const LanguageButtons = () => {
  return (
    <>
       <button>English</button>
       <button>Chinese</button>
       <button>Spanish</button>
       <button>Haitian</button>
       <button>Portuguese</button>
    </>
  )
}

const App = () => {
  return (
    <>
      <SizeButtons/>
      <Header/>
      <LanguageButtons/>
    </>
  )
}

export default App
