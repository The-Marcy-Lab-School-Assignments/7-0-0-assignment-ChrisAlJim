const Greeting = ({fontSize, language}) => {
  return <h1 style = {{fontSize: fontSize}}>{language}</h1> //jsx wants an object for inline styling
}

export default Greeting