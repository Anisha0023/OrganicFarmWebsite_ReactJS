import React from 'react';
import HomeImage from '../assets/images/OrganicProduct.jpg';

function Home() {
	const goToShop = () => {
		const shop = document.getElementById('shop');
		if (shop) shop.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="home">
			<img
				src={HomeImage}
				alt=""
			/>
			<div className="home-text">
				<h4>It's All Organic &amp; Natural Here</h4>
				<p className="primary-para">Organic Products</p>
				<h2 className="secondary-para">for a better world</h2>
				<button
					type="button"
					onClick={goToShop}>
					Read More
				</button>
			</div>
		</section>
	);
}

export default Home;
