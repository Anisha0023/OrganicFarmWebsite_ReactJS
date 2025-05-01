import React from 'react'
import tittle_line from '../assets/images/title_line.png';
import blog1 from '../assets/images/latest-news1.png';
import blog2 from '../assets/images/latest-news2.png';
import blog3 from '../assets/images/latest-news3.png';
import blog4 from '../assets/images/latest-news4.png';

function RecentBlogs() {
  const blogs = [
    {
      img: blog1,
      heading: "Strawberry plantation in organic farming",
      content: "Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals,Strawberry plantation in organic farming ",
    },
    {
      img: blog2,
      heading: "Strawberry plantation in organic farming",
      content: "Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals,Strawberry plantation in organic farming  ",
    },
    {
      img: blog3,
      heading: "Strawberry plantation in organic farming",
      content: "Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals,Strawberry plantation in organic farming  ",
    },
    {
      img: blog4,
      heading: "Strawberry plantation in organic farming",
      content: "Fruits are nutritious, naturally sweet, and edible plant products, rich in vitamins, minerals,Strawberry plantation in organic farming ",
    }
  ]
  return (
    <div className="blog">
      <div className="Blog-heading">
        <h2>Recent Blogs</h2>
        <img src={tittle_line} alt="" />
      </div>
      <div className='BlogContentBox'>
        {
          blogs.map((options, index) => {
            return (
              <div className='blog-content' key={index}>
                <img className='contentimg' src={options.img} alt="" />
                <div className="content-text">
                  <div className='content-heading'>
                    <h4 className="blog_heading">{options.heading}</h4>

                  </div>
                  <div className='main-content'>
                    <p className='blog_content'>{options.content}</p>
                  </div>
                  <a href="##" className='content-link'>Read more</a>
                </div>


              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default RecentBlogs