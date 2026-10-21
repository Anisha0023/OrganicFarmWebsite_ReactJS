import React from 'react';
import titleline from '../assets/images/title_line.png';
import cat1 from '../assets/images/category1.png';
import cat2 from '../assets/images/category2.png';
import cat3 from '../assets/images/category3.png';
import cat4 from '../assets/images/category4.png';
import cat5 from '../assets/images/category5.png';
import cat6 from '../assets/images/category6.png';

const catitems = [
	{
		img: cat1,
		heading: 'Fruits',
		description:
			'Naturally sweet, seasonal fruits rich in vitamins, minerals and fiber.',
	},
	{
		img: cat2,
		heading: 'Vegetables',
		description: 'Farm-fresh greens and roots, grown without chemicals.',
	},
	{
		img: cat3,
		heading: 'Beverages',
		description: 'Cold-pressed juices, herbal teas and natural drinks.',
	},
	{
		img: cat4,
		heading: 'Dairy',
		description: 'Pure organic milk, curd, butter and ghee.',
	},
	{
		img: cat5,
		heading: 'Packed Food',
		description: 'Wholesome grains, pulses, spices and snacks.',
	},
	{
		img: cat6,
		heading: 'Health & Fitness',
		description: 'Superfoods and protein-rich staples for an active life.',
	},
];

function Categories() {
	return (
		<section className="category-main">
			<div className="category-heading">
				<h2>Categories</h2>
				<img
					src={titleline}
					alt=""
				/>
			</div>
			<div className="category-box">
				{catitems.map((item) => (
					<a
						href="#shop"
						className="cat-items"
						key={item.heading}>
						<img
							src={item.img}
							alt={item.heading}
							loading="lazy"
						/>
						<div className="cat-text">
							<h4>{item.heading}</h4>
							<p>{item.description}</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

export default Categories;
