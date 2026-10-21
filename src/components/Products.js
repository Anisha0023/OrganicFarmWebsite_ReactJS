import React from 'react';
import Carousel from './Caurousel';
import FeaturedProduct from '../assets/images/featured_product.png';
import product_line from '../assets/images/title_line.png';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa';

export const allProducts = [
	{
		id: 1,
		img: FeaturedProduct,
		title: 'Tomato',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 2,
		img: FeaturedProduct,
		title: 'Carrot',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 3,
		img: FeaturedProduct,
		title: 'Brinjal',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 4,
		img: FeaturedProduct,
		title: 'Coriander Leaves',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 5,
		img: FeaturedProduct,
		title: "Lady's Finger",
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 6,
		img: FeaturedProduct,
		title: 'Banana',
		rating: '4.5',
		price: 49,
		type: 'Fruit',
	},
	{
		id: 7,
		img: FeaturedProduct,
		title: 'Beetroot',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
	{
		id: 8,
		img: FeaturedProduct,
		title: 'Cabbage',
		rating: '4.5',
		price: 49,
		type: 'Vegetable',
	},
];

const Products = ({ heading, items = allProducts, onAddToCart }) => {
	return (
		<section className="product">
			<h2 className="product-heading">{heading}</h2>
			<img
				src={product_line}
				alt=""
			/>

			<div className="product-list">
				<Carousel
					label={heading}
					perView={{ base: 1, sm: 2, md: 3, lg: 4 }}
					interval={3500}
					gap={20}>
					{items.map((item) => (
						<article
							key={item.id}
							className="cart">
							<img
								src={item.img}
								alt={item.title}
								loading="lazy"
							/>
							<div className="featured-details">
								<div className="prod-details">
									<h5>{item.title}</h5>
									<p>{item.type}</p>
									<p className="prod-rating">
										<FaRegStar
											style={{ color: 'goldenrod' }}
											aria-hidden="true"
										/>{' '}
										{item.rating}
									</p>
								</div>
								<div className="prod-price">₹{item.price}</div>
							</div>
							<div className="add-cart">
								<button
									type="button"
									className="cart-btn"
									onClick={() => onAddToCart && onAddToCart(item)}>
									<RiShoppingBag3Line aria-hidden="true" />
									&nbsp;Add to cart
								</button>
							</div>
						</article>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Products;
