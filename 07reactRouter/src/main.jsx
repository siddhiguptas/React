import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/github.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
////routerprovider ek prop leta h router
//router 2 tarike se bnta h
// i want ki mera header footer hamesa same rhe aur usk andr k contents change hote rhe
//ek method ye h ki ham header/footer hr jgh call karayenge hoime me bhi about us me bhi...
/*Method 1
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])*/
//loader kya krta h ki agr koi bhi data hame fetch krni h api se ya database se to ham direct api calls yha se hi maar skte
//Method2
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
