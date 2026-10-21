import React from 'react';
import Carousel from './Caurousel';
import Product from '../assets/images/icon2.png';
import Payment from '../assets/images/icon1.png';
import Curated from '../assets/images/icon3.png';

const features = [
	{
		icon: Curated,
		name: 'Curated Products',
		desc: 'We ensure you get the best quality straight from our farm to your table.',
	},
	{
		icon: Product,
		name: 'Original Products',
		desc: 'We bring you 100% natural, chemical-free, and farm-fresh organic products.',
	},
	{
		icon: Payment,
		name: 'Secure Payment',
		desc: 'Shop with confidence! We offer safe and secure payment options.',
	},
];

function HomeCarousel() {
	return (
		<section className="home-carousel">
			<Carousel
				label="Why shop with us"
				perView={{ base: 1, sm: 2, md: 3 }}
				interval={4000}
				dots={false}
				gap={24}>
				{features.map((item) => (
					<div
						key={item.name}
						className="item">
						<img
							src={item.icon}
							alt=""
						/>
						<div className="owl-text">
							<h3>{item.name}</h3>
							<p>{item.desc}</p>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
}

export default HomeCarousel;
