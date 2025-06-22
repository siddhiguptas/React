import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hook is used for ui updation ..jaha jaha counter hoga sari jgh ui me value update karega
  //hook counter is a variable setCounter is a fn which is responsible for value updation of counter
  //useState returns an array containing 2 values
  //we can change the name of counter and set counter as well
  //useState(iske andr default value)
  const [counter,setCounter]=useState(5)
  //let counter=5;
  let addValue=()=>{
    
    //counter++;
    if(counter<20){
      setCounter(counter+1);
      console.log("Value added",counter);
    }else{
      console.log("You can't go beyond 20");
    }
    
    
  }
  let removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
      console.log("Value subtract",counter);
    }else{
      console.log("You can't decrease more than 0");
    }
    
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer</p>
    </>
  )
}

export default App
