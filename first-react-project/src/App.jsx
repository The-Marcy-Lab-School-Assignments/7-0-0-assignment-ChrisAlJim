import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './components/greeting'
import SizeButtons from './components/sizeButtons'
import LanguageButtons from "./components/languages"



const App = () => {
  const [fontSize, setFontSize] = useState(50) // setting the font size to 50 to begin with 
  const [language, setLanguage] = useState("Good Night") // setting the language to english tp begin with
  return (
    <>
      <SizeButtons fontSize = {fontSize} setFontSize = {setFontSize}/> {/*props are the fontsize and its setter function, it is sharing the state data with the components
                                                                         this data get passed into the components arguments*/}
      <Greeting fontSize = {fontSize} language = {language}/> 
      <LanguageButtons language = {language} setLanguage = {setLanguage}/>
    </>
  )
}

export default App