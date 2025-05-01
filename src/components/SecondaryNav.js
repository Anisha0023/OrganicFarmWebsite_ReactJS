import React from 'react'

function SecondaryNav() {
  const navItems=[
    {
      name:'Home',
      link:'##'
    },
    {
      name:'Blog',
      link:'##'
    },
    {
      name:'Contact',
      link:'##'
    },
    {
      name:'Page',
      link:'##'
    },
    {
      name:'My Account',
      link:'##'
    },
    {
      name:'Cart',
      link:'##'
    },
    {
      name:'CheckOut',
      link:'##'
    },
  ]
  return (
    <div className='second-nav'>
      {
        navItems.map((item,index)=>{
          return(
            <a href={item.link} key={index}>{item.name}</a>
          )
        })
      }
      <a href="##" className='nav-btn'>Buy Now</a>

    </div>
  )
}

export default SecondaryNav