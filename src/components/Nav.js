import React from 'react'
import Logo from '../assets/images/cropped-Organic.png';
import { GoMail } from "react-icons/go";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { LiaPinterestP } from "react-icons/lia";



function Nav() {
  const socialIcons =[
    {
      icon:<FaXTwitter />,
      link:"https://x.com"

    },
    {
      icon:<TiSocialFacebook />,
      link:"https://facebook.com"
    },
    {
      icon:<BsYoutube />,
      link:"https://youtube.com"
    },
    {
      icon:<LiaPinterestP />,
      link:"https://pinterest.com"
    }

  ]
  return (
    <div className='primary-nav'>
      <img src={Logo} alt="" />
      <div className="mail-info">
        <div className="mail-border">
          <a href="mailto:info@organicbasket.com">
          <GoMail style={{transform:'rotate(-45deg)', color:'green', height:'20px',width:'20px'}} />
         </a>
         </div>
          
        <div className="mail-text">
            <h4>Email Address</h4>
            <p>info@organicbasket.com</p>
        </div>
      </div>
      <hr className='nav-hr'/>
      <div className="mail-info">
        <div className="mail-border">
          <BiSolidPhoneCall style={{transform:'rotate(-45deg)', color:'green', height:'20px',width:'20px'}} />
        </div>
        <div className="mail-text">
            <h4>24/7 In Touch</h4>
            <p>000012321545648</p>
        </div>
        
      </div>
      <hr className='nav-hr'/>
      <div className='nav-icons'>
        {
          socialIcons.map((item,index)=>{
            return (<a href={item.link}
            key={index}>{item.icon}</a>)
          })
        }

      </div>

    </div>
  )
}

export default Nav
