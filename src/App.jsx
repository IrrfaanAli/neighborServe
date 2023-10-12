import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Policy from './components/Policy'
import AboutUs from './components/AboutUs'
import Service_History from './components/Service_History'
import OnBoard_Verification from './components/Onboard_Verification'
// import Dashboard from './components/Dashboard'
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
  
  <Routes>
  
   <Route path="About" element={<AboutUs/>}/>
   <Route path="Policy" element={<Policy/>}/>
   <Route path="Service" element={<Service_History/>}/>
   <Route path="Verify" element={<OnBoard_Verification/>}/>
   {/* <Route path="Dashboard" element={<Dashboard/>}/> */}
   {/* <Route path="products/:productsId" element={<SingleProduct/>}/>
   <Route path="login" element={<Login setUser={setUser} />} ></Route>
    */}
   
  </Routes>
 
</BrowserRouter>
     
    </>
  )
}

export default App
