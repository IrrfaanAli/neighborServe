import React from 'react'
import instagram from '../assets/insta.png'
import facebook from '../assets/fb.png'
import twitter from '../assets/twt.png'
import whatsapp from '../assets/wh.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='grid grid-cols-1'> 
      <footer className="footer p-10 bg-white text-4C40ED my-0 border border-primary ">
  <nav>
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Electrician</Link>
    <Link className="link link-hover">Plumber</Link>
    <Link className="link link-hover">Wooden</Link>
    <Link className="link link-hover">Furnisher</Link>
  </nav> 
  <nav className='sm:flex-row'>
    <header className="footer-title">Company</header> 
    <Link to='/About' className="link link-hover">About us</Link>
    <Link to='/Policy'  className="link link-hover">Privacy</Link>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Do not share any of the information</a>
   
  </nav> 
  <nav>
    <header className="footer-title">Follow us</header> 
   <div className='flex start-0'>
   <a className="link link-hover"><a href=""><img src={instagram} alt="instagram" className='h-10 bg-primary rounded-full'/></a></a>
    <a className="link link-hover"><a href=""><img src={facebook} alt="facebook" className='h-10  bg-primary rounded-full'/></a></a>
    <a className="link link-hover"><a href=""><img src={twitter} alt="twitter" className='h-10  bg-primary rounded-full'/></a></a>
    <a className="link link-hover"><a href=""><img src={whatsapp} alt="whatsapp" className='h-10  bg-primary rounded-full'/></a></a>
   </div>
  </nav>
</footer>
    </section>
  )
}

export default Footer
