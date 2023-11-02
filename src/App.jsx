
import './App.css'
import Policy from './Component/Policy/Policy'
import AboutUs from './Component/AboutUs/AboutUs'
import Service_History from './Component/Service_History/Service_History'
import OnBoard_Verification from './Component/Onboard_Verification/Onboard_Verification'
import Category from './Component/Category/Category'
import CustomerSupport from './Component/CustomerSupport/CustomerSupport'
import FeatureProvider from './Component/FeatureProvider/FeatureProvider'
import Footer from './Component/Footer/Footer'
import { HeroSection } from './Component/HeroSection/HeroSection'
import Navbar from './Component/Navbar/Navbar'
import OfferCard from './Component/OfferCard/OfferCard'

function App() {
  return (

    <>
     <Navbar></Navbar>
     <HeroSection></HeroSection>
     <Category></Category>
     <OfferCard></OfferCard>
     <FeatureProvider></FeatureProvider>
     <CustomerSupport></CustomerSupport>
     <AboutUs></AboutUs>
    <Policy></Policy>
    <Service_History></Service_History>
    <OnBoard_Verification></OnBoard_Verification>
     <Footer></Footer>
</>

)
}


export default App;

