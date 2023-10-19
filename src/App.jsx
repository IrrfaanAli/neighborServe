import './App.css'
import Policy from './components/Policy'
import AboutUs from './components/AboutUs'
import Service_History from './components/Service_History'
import OnBoard_Verification from './components/Onboard_Verification'
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

