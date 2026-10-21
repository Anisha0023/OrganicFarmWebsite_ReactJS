import React from 'react';
import Carousel from './Caurousel';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
import partner5 from '../assets/images/partner5.png';
import partner6 from '../assets/images/partner6.png';

const sponsors = [partner1, partner2, partner3, partner4, partner5, partner6];

function Sponsors() {
	return (
		<section className="partner-main">
			<Carousel
				label="Our partners"
				perView={{ base: 2, sm: 3, md: 4, lg: 5 }}
				interval={2500}
				dots={false}
				gap={32}>
				{sponsors.map((img, index) => (
					<div
						key={index}
						className="partners">
						<img
							src={img}
							alt={`Partner ${index + 1}`}
							className="img-partner"
							loading="lazy"
						/>
					</div>
				))}
			</Carousel>
		</section>
	);
}

export default Sponsors;
