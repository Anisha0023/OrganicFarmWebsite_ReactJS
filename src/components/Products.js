import React from 'react';
import FeaturedProduct from '../assets/images/featured_product.png';
import product_line from '../assets/images/title_line.png';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";

const options = {
  loop: true,
  margin: 10,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1200: { items: 4 }
  },
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  autoWidth: false,
  dots: true,
  center: false,
};

const cartItems = [
  { img: FeaturedProduct, prod_title: "Tomato", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Carrot", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Brinjal", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Coriander Leaves", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Lady's Finger", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Banana", rating: '4.5', price: 49, prod_type: "Fruit" },
  { img: FeaturedProduct, prod_title: "Beetroot", rating: '4.5', price: 49, prod_type: "Vegetable" },
  { img: FeaturedProduct, prod_title: "Cabbage", rating: '4.5', price: 49, prod_type: "Vegetable" }
];

const Products = ({heading}) => {
  return (
    <div className="product">
      <h2 className="product-heading">{heading}</h2>
      <img src={product_line} alt="Product Line" />

      <OwlCarousel className="product-list" {...options}>
        {cartItems.map((cart, index) => (
          <div key={index} className="cart">
            <img src={cart.img} alt={cart.prod_title} />
            <div className="featured-details">
              <div className="prod-details">
                <h5>{cart.prod_title}</h5>
                <p>{cart.prod_type}</p>
                <FaRegStar style={{ color: 'goldenrod' }} /> {cart.rating}
              </div>
              <div className="prod-price">₹{cart.price}</div>
            </div>
            <div className="add-cart">
              <a href="/" className="cart-btn">
                <RiShoppingBag3Line /> &nbsp;Add to cart
              </a>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Products;
