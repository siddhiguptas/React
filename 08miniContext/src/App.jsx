import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/Profile"
import Login from "./components/login"


function App() {
  return (
    <UserContextProvider>
      <div >
      <h1>React with Chai</h1>
      <Login/>
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
