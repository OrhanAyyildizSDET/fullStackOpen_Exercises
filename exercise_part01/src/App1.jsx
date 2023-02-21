import { useState } from 'react'
const App1 = () => {
    const [value, setValue] = useState(10)

    const hello = (who) =>() => {     
        console.log('hello', who)      
    }

    const setToValue = (newValue) => () => {
        console.log('value now', newValue)  // print the new value to console
        setValue(newValue)
    }
    
    // const setToValue = (newValue) => {
    //     const assign = () => {
    //         console.log('value now', newValue)   2. way 
    //         setValue(newValue)
    //     }
    //     return assign
    // }
    const Button = ({onClick,text}) => (
        <button style= {{marginRight:20}} onClick={onClick}>
          {text}
        </button>
      )
  
    return (
      <div>
        <button onClick={() => hello(console.log("Hello world"))}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
        <div style={{marginTop:20}}>
            <Button style={{marginRight:20}} onClick={setToValue(1000)} text = "thousand"></Button>
            <Button style={{marginRight:20}} onClick={setToValue(0)} text = "reset"></Button>
            <Button onClick={setToValue(value + 1)} text = "increment"></Button>
        </div>    
        <p>{value}</p>    
      </div>
    )
}

export default App1