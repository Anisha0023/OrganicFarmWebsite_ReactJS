import React from 'react';
import OwlCarousel from 'react-owl-carousel3'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
import partner5 from '../assets/images/partner5.png';
import partner6 from '../assets/images/partner6.png'; 


function Sponsors() {
    const options = {
        loop: true,
        // nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        },
        item:5,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        autowidth:false,
        dots:false,
        center:false,
    
        
    }
    const sponsors=[
        {
            img:partner1
        },
        {
            img:partner2
        },
        {
            img:partner3
        },
        {
            img:partner4
        },
        {
            img:partner5
        },
        {
            img:partner6
        }
    ]
  return (
    <div className='partner-main'>
        <OwlCarousel className="owl-theme" {...options}>
            {
               sponsors.map((sponsor,index)=>{
                return(<div key={index} className='partners'>
                    <img src={sponsor.img} alt="" className='img-partner' style={{width:'100px'}}/>

                </div>)
               })
            }

        </OwlCarousel>


    </div>
  )
}

export default Sponsors