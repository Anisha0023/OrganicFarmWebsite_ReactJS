import React from 'react';
import tittle_line from '../assets/images/title_line.png';
import blog1 from '../assets/images/latest-news1.png';
import blog2 from '../assets/images/latest-news2.png';
import blog3 from '../assets/images/latest-news3.png';
import blog4 from '../assets/images/latest-news4.png';

const blogs = [
	{
		img: blog1,
		heading: 'Strawberry plantation in organic farming',
		content:
			'How small farms are growing sweeter, healthier strawberries without chemical inputs.',
	},
	{
		img: blog2,
		heading: 'Why seasonal vegetables taste better',
		content:
			'Eating with the seasons means fresher produce, better flavor and a lighter footprint.',
	},
	{
		img: blog3,
		heading: 'A beginner’s guide to organic dairy',
		content:
			'What “organic” really means for milk, curd and ghee, and how to read the label.',
	},
	{
		img: blog4,
		heading: 'Building a healthy organic pantry',
		content:
			'Simple grains, pulses and spices that make weekday cooking nutritious and easy.',
	},
];

function RecentBlogs() {
	return (
		<section
			className="blog"
			id="blog">
			<div className="Blog-heading">
				<h2>Recent Blogs</h2>
				<img
					src={tittle_line}
					alt=""
				/>
			</div>
			<div className="BlogContentBox">
				{blogs.map((post) => (
					<article
						className="blog-content"
						key={post.heading}>
						<img
							className="contentimg"
							src={post.img}
							alt=""
							loading="lazy"
						/>
						<div className="content-text">
							<div className="content-heading">
								<h4 className="blog_heading">{post.heading}</h4>
							</div>
							<div className="main-content">
								<p className="blog_content">{post.content}</p>
							</div>
							<a
								href="#blog"
								className="content-link">
								Read more
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default RecentBlogs;
