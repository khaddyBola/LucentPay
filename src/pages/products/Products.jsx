import React from 'react'
import './products.css'
import PagesHeader from '../../components/PagesHeader'

const Products = () => {
  return (
    <section className='products'>
      <PagesHeader title='Products' page='Products' />
      <div className="container products-container">
        Products
      </div>
    </section>
  )
}

export default Products