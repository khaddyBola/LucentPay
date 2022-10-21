import React from 'react'
import './services.css'
import PagesHeader from '../../components/PagesHeader'
import Ecosystem from '../../components/Ecosystem'
import PaymentGateway from '../../components/PaymentGateway'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'

const Services = () => {
  return (
    <section className='service'>
      <PagesHeader title='Service' page='Service' />
      <Ecosystem/>
      <Benefits/>
      <PaymentGateway/>
      <div className="container service-container">
          E wallet
      </div>
      <Testimonials/>
    </section>
  )
}

export default Services