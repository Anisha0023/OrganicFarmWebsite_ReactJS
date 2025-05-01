import React from 'react';
import Product from '../assets/images/icon2.png';
import Payment from '../assets/images/icon1.png';
import Curated from '../assets/images/icon3.png';
import OwlCarousel from 'react-owl-carousel3'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    loop: true,
    // nav: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    },
    item:3,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autowidth:false,
    dots:false,
    center:false,

    
}
const owlItems = [
    {
        icon:Curated,
        name:"Curated Products",
        desc:"we ensure you get the best quality straight from our farm to your table."
    },
    {
        icon:Product,
        name:"Original Product",
        desc:"where we bring you 100% natural, chemical-free, and farm-fresh organic products."
    },
    {
        icon:Payment,
        name:"Secure Payment",
        desc:"Shop with confidence! We offer safe and secure payment."

    }
]

function HomeCarousel() {
    return (
        <div className='home-carousel'>
            <OwlCarousel className='owl-theme' {...options}>
                {
                    owlItems.map((item,index)=>{
                        return(<div key={index} className='item'>
                            <img src={item.icon} alt="Preview image" style={{width:'60px'}} />
                            <div className="owl-text">
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>)
                    }

                    )
                }
                {/* <div className='item'>
                    <img src={Product} alt="" style={{width:'60px'}} />
                    <h4>Original Products</h4>
                    <p> where we bring you 100% natural, chemical-free, and farm-fresh organic products.</p>
                </div>
                <div className='item'>
                    <img src={Payment} alt="" style={{width:'60px'}} />
                    <h4>Secure Payment</h4>
                    <p>Shop with confidence! We offer safe and secure payment options with encrypted transactions to protect your data. </p>
                </div>
                <div className='item'>
                    <img src={Curated} alt="" style={{width:'60px'}} />
                    <h4>Curated Products</h4>
                    <p>From fresh vegetables and fruits to organic dairy and grains, we ensure you get the best quality straight from our farm to your table.</p>
                </div> */}

            </OwlCarousel>
        </div>
    );
}

export default HomeCarousel;
