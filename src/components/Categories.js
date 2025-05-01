import React from 'react'
import titleline from '../assets/images/title_line.png'
import cat1 from '../assets/images/category1.png'
import cat2 from '../assets/images/category2.png'
import cat3 from '../assets/images/category3.png'
import cat4 from '../assets/images/category4.png'
import cat5 from '../assets/images/category5.png'
import cat6 from '../assets/images/category6.png'



const catitems=[
  {
    img:cat1,
    heading:"Fruits",
    description:"Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals, and fiber"
    
  },
  {
    img:cat2,
    heading:"Vegetables",
    description:"Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals, and fiber"
    
  },
  {
    img:cat3,
    heading:"Beverages",
    description:"Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals, and fiber"
    
  },
  {
    img:cat4,
    heading:"Dairy",
    description:"Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals, and fiber"
    
  },
  {
    img:cat5,
    heading:"Packed Food",
    description:"Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals, and fiber"
    
  },
  {
    img:cat6,
    heading:"Heath & Fitness",
    description:"Fruits are nutritious, naturally sweet, and edible plant product"
    
  }
]
function Categories() {
  return (
    <div className='category-main'>
            <div className="category-heading">
                <h2>Categories</h2>
                <img src={titleline} alt=""  />
            </div>
              <div className="category-box">
              {
                catitems.map((item,index)=>{
                  return(
                    <div className="cat-items" key={index}>
                      <img src={item.img} alt="no image" />
                      <h4>{item.heading}</h4>
                      <p>{item.description}</p>

                    </div>
                    


                  )
                })
              }
                
              </div>

        </div>

  )
}

export default Categories