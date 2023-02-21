import { useState } from 'react'

const Display = ({counter}) => {
  return(
    <div style={{margin:10}}>{counter}</div>
  )
}

const Button = ({bgColor,color,click,text}) => {
  return (
    <button style={{backgroundColor:bgColor,color:color}} onClick={click}>
      {text}      
    </button>
  )
}
 
const App = () => {
  const [counter, setCounter] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(prev => ({left:prev.left+2,right: prev.right + 1}))
    
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(prev => ({...prev,left: prev.left - 1}))
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(prev => ({...prev,right: 0}))
  }

  const showArrayList = () => {
    if(allClicks.length < 3)
      setAll(allClicks.concat("LL"))
    else
      setAll([])
  }
  const ShowArray = (props) => {
    let counter = 1
    if (props.allClicks.length === 0) {     
      return (
        <div>
          the app is used by pressing the buttons
        </div>        
      )
    } 
    return (
      <div>
        button press history: {props.allClicks.join('  ',counter)}
      </div>
    )
  }  
  return (
    <div>
      <div style={{display:"flex"}}>
        <Display counter = {counter.left}/> 
        <Display counter = {counter.right}/> 
      </div>            
      <Button click = {increaseByOne} text="artır" color="blue" bgColor="yellow"/>
      <Button click = {decreaseByOne} text="azalt" color="red" bgColor="yellow"/>
      <Button click = {setToZero} text="sıfırla" color="grey" bgColor="black"/>
      <Button click = {showArrayList} text="show" color="pink" bgColor="grey"/>
      <ShowArray allClicks={allClicks}></ShowArray>
    </div>
  )
}

export default App