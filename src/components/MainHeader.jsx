import React from 'react'
import Image from '../Images/hero-img.webp'
import { HiArrowRight } from 'react-icons/hi'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { RiMoneyEuroBoxFill } from 'react-icons/ri'
import { TbCurrencyNaira } from 'react-icons/tb'
import { GiMoneyStack } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import { GiReceiveMoney } from 'react-icons/gi'
import { GiPayMoney } from 'react-icons/gi'
import Button from '../components/Buttons/Button'

const MainHeader = () => {
  return (
    <div className='main-header'>
      <div className="container main-header-container">
          <div className="main-container-left">
              <h1>Intergrated Payment Ecosystem</h1>
              <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Qui minima amet quod?
              </p>
              <Button to='/products' name="Learn More" icon={<HiArrowRight/>} className="main-header-btn" />
          </div>
          <div className="main-container-right">
            <div className="main-header-circle-out-1">
              <span><GiMoneyStack/></span>
              <span><GrMoney/></span>
              <span><GiReceiveMoney/></span>
              <span><GiPayMoney/></span>
            </div>
            
            <div className="main-header-circle-out-2">
              <span><RiMoneyPoundCircleFill/></span>
              <span><RiMoneyDollarCircleFill/></span>
              <span><RiMoneyEuroBoxFill/></span>
              <span><TbCurrencyNaira/></span>
            </div>
            <div className="main-header-circle-image">
              <img src={Image} alt="lucent-logo" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainHeader