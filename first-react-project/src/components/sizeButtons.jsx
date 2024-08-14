const SizeButtons = ({fontSize, setFontSize}) => {

  const decrement = () => {setFontSize(fontSize - 1)}
  const increment = () => {setFontSize(fontSize + 1)}

  return (
    <>
      <button onClick = {decrement}>-</button>
      <button onClick = {increment}>+</button>
    </>
  )
}

export default SizeButtons