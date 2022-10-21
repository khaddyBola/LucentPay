import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Partners from '../../components/Partners'
import Ecosystem from '../../components/Ecosystem'
import Benefits from '../../components/Benefits'
import Footer from '../../components/Footer'
import PaymentGateway from '../../components/PaymentGateway'
import Testimonials from '../../components/Testimonials'
import Download from '../../components/Download'


const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Partners/>
      <Ecosystem/>
      <Benefits/>
      <PaymentGateway/>
      <Testimonials/>
    </div>
    
  )
}

export default Home