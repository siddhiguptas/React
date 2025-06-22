import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
//ye outlet kya krega ye layout ko as a base use kr lega aur isk andr jo bhi chize aayegi use change kr skte
//outlet jidhr denge vo chiz change ho skti baki upr niche ki same rhengi
function Layout(){
    return (
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}
export default Layout