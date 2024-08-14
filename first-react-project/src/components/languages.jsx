const LanguageButtons = ({setLanguage}) => {
  const englishTransl = () => {setLanguage("Good Night")}
  const chineseTransl = () => {setLanguage("晚安")}
  const spanishTransl = () => {setLanguage("Buenas Noches")}
  const haitianTransl = () => {setLanguage("Bon Lannwit")}
  const portugueseTransl = () => {setLanguage("Boa Noite")}
  return (
    <>
       <button id = "English" onClick = {englishTransl}>English</button>
       <button id = "Chinese" onClick = {chineseTransl}>Chinese</button>
       <button id = "Spanish" onClick = {spanishTransl}>Spanish</button>
       <button id = "Haitian" onClick = {haitianTransl}>Haitian</button>
       <button id = "Portuguese" onClick = {portugueseTransl}>Portuguese</button>
    </>
  )
}

export default LanguageButtons