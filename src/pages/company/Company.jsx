import React, { useState } from 'react'
import './company.css'
import PagesHeader from '../../components/PagesHeader';
import { company } from '../../data';
import Card from '../../UI/Card';
import SectionHead from '../../components/SectionHead';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Company = () => {
  const [index, setIndex] = useState(0)
  const {id, name, quote, job, avatar} = company[index]

  const prevCompanyHandler = () => {
    setIndex(prev => prev - 1)

    if (index <= 0) {
      return setIndex(company.length - 1)
    }
  }

  const nextCompanyHandler = () => {
    setIndex(prev => prev + 1)

    if(index >= company.length - 1) {
      return setIndex(0)
    }
  }
  return (
    <section className='companys'>
      <PagesHeader title='Company' page='Company' />
      <div className="container companys-container">
        <SectionHead title="Company" className="company-head"/>
          <h2>What They <span>Say</span> About LucentPay</h2>

          <div className="company-wrapper">
            <Card key={id} className="company">
              <div className="company-avatar">
                <img src={avatar} alt={name} />
              </div>

              <div>
                <p className='company-quote'>{`"${quote}"`}</p>
                <h4>{name}</h4>
                <small className="company-title">{job}</small>
              </div>

            </Card>
            <div className="companys-btn-container">
              <button className="companys-btn" onClick={prevCompanyHandler}><IoIosArrowDropleftCircle/></button>
              <button className="companys-btn" onClick={nextCompanyHandler}><IoIosArrowDroprightCircle/></button>
            </div>
      </div>
      </div>
    </section>
  )
}

export default Company;