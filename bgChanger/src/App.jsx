import {useState} from "react"
function App() {
  const [color,setColor]=useState("olive") 
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-full">
        <div className ="flex flex-wrap justify-center gap-3 shadow-ls bg-white px-3 py-2 rounded-3xl w-full">
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
          <button className="outline-none px-3 py-2 rounded-xl w-30" style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>Lavender</button>
        </div>
      </div>
    </div>
  )
}
export default App 
