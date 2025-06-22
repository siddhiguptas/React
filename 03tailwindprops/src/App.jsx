import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3];
  //className tailwind me thik vaise hi kaam krta jaise class css me
  //props make components reusable ..ek baar aapne card bna liya to kyu na card ko component me rkh diya jae aur usko baar baar use kr liya jae
  //mai ek component se dusre component me value pass kr skti hu aur us value ko agr meko receive krna h to  card k andr mujhe jb bhi ye fn declare kr rha hu card isk andr props ka access hota h
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card userName="chaiaurcode" name="hi" />
      <Card userName="siddhi"/>
    </>
  )
}

export default App
