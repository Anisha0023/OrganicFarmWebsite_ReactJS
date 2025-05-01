import React from 'react'
import HomeImage from '../assets/images/OrganicProduct.jpg'

function Home() {
  return (
    <div className='home'>
        <img src={HomeImage} alt="" />
        <div className="home-text">
            <h4>Its All Organic & Natural Here</h4>
            <p className='primary-para'>Organic Products</p>
            <h2 className='secondary-para'>for a better world</h2>
            <button>Read More</button>
        </div>
    
    </div>
  )
}

export default Home