import { useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("");

  //useref Hook
  const passRef=useRef(null)

  const passGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()~?"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=pass+str.charAt(char)
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPassToClip=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(Password)
  },[Password]);
  
  useEffect(()=>{
    passGenerator();
  },[length,numberAllowed,charAllowed,passGenerator])
  

  //ya to flex flex-wrap justify center likho ya text-center
  //ek to length update hote hue show krna h (counter-state)
  //dusra ek checkbox h number vala jise click krne pr koi bhi random no generate ho rha
  //ek usestate bnayenge jisse ya to no.lo ya na lo
  //input field me pass aa rha ..directly jakar pass update to kr nhi skte to kuch n kuch chahiega hame vaha pr ki us pass k andr ham value update kr paye to uske liye bhi state use krna padega 
  //ab pass generator method bnayenge
  //passgen ko numbers aur char dono pr call krna hoga usko optimise krne k liye we will use useCallback hook'
  //it is a react hook which lets you cache a fn definition b/w e-renders
  //ek fn h usko jitna ho ske memory me rkh lo aur jb hm dobara call krte h to jitna part pehlke ka use hota h use kr lo jo nhi ho skta na karo //useCallback(fn,dependencies) ise ham optimise k liye baat kr rhe
  //setpass islie pass kr rhi yhi main fn h jise ham kai baar run karenge..pass dene pr infinite loop me fas jayenge
  //str k andr vo data aayega jiska use krk ham pass bna skte h
  //useeffect hook lets you synchronize a component with an external system
  //useEffect(callback fn,dependecy array)..jb bhi hmara page load hota h to pehle ye call hota h
  //idhr useeffect ye kaam kr rha ki agr mai no. ko chhed du bhi pass gen call ho lly char ko chedu tb bhi aur length kotb bhi
  //copy krne me dikkat ye h ki copy kitna krna h range ...kya krna h..hme select bhi krna padega ki ye input field lo uski selection range bhi btani padegi phir mereko clipboard ka bhi access chahie
  //useref hook-reference hook-returns a mutable ref object whose.current property is initialised to the passed argument(initial value)


  return (
    <>
    
    <div className='w-1050 h-32 max-w-md mx-auto shadow-md text-white rounded-lg my-12  py-1 bg-gray-700'>
    <h1 className="text-2xl  px-25 my-1">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 px-3 w-110 text-1xl'>
          <input type="text" value={Password} ref={passRef} className="outline-none w-800 text-gray-400 h-10 px-1 readOnly rounded-lg bg-white "></input>
          <button onClick={copyPassToClip
          } className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg gap-3">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={
              (e)=>{
                setLength(e.target.value)
              }
            }></input>
            <label className="text-orange-400">Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={(e)=>{
              setNumberAllowed((prev)=>!prev);
            }}/><label className="text-orange-400">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={(e)=>{
              setCharAllowed((prev)=>!prev);
            }}/><label className="text-orange-400">Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
