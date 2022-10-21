import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import CreateAccount from './pages/createAccount/CreateAccount'
import Company from './pages/company/Company'
import Login from './pages/login/Login'
import Pricing from './pages/pricing/Pricing'
import Products from './pages/products/Products'
import Services from './pages/services/Services'
import Contacts from './pages/contacts/Contacts'
import NotFound from './pages/notFound/NotFound'
import FAQs from './pages/FAQs/FAQs'
import Navbar from './components/Navbar'
import Ecosystem from './components/Ecosystem'
import PaymentGateway from './components/PaymentGateway'
import Benefits from './components/Benefits'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className="main-content">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='company' element={<Company/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='createAccount' element={<CreateAccount/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Download/>
      </main>
        <Footer/>
    </BrowserRouter>
  )
}

export default App