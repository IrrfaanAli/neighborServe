import { useState } from 'react'
import './App.css'
import Policy from './components/Policy'
import AboutUs from './components/AboutUs'
import Service_History from './components/Service_History'
import OnBoard_Verification from './components/Onboard_Verification'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar></Navbar> */}
    <AboutUs></AboutUs>
    <Policy></Policy>
    <Service_History></Service_History>
    <OnBoard_Verification></OnBoard_Verification>
    {/* <Footer></Footer> */}
     
    </>
  )
}

export default App
