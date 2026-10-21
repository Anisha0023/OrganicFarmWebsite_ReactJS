import React, { useState } from 'react';
import Logo from '../assets/images/cropped-Organic.png';

function Footer() {
	const [email, setEmail] = useState('');
	const [done, setDone] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!email.trim()) return;
		setDone(true);
		setEmail('');
	};

	return (
		<footer
			className="footer"
			id="contact">
			<div className="newsletter">
				<div>
					<h3>Join our organic community</h3>
					<p>Get fresh offers and farm stories in your inbox every week.</p>
				</div>
				<form onSubmit={onSubmit}>
					<input
						type="email"
						required
						placeholder="Your email address"
						aria-label="Email address"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setDone(false);
						}}
					/>
					<button type="submit">{done ? 'Subscribed ✓' : 'Subscribe'}</button>
				</form>
			</div>

			<div className="footer-grid">
				<div className="footer-about">
					<img
						src={Logo}
						alt="Organic Basket"
					/>
					<p>
						100% natural, chemical-free and farm-fresh organic products,
						delivered from our farm to your table.
					</p>
				</div>
				<div>
					<h4>Shop</h4>
					<a href="#shop">Fruits</a>
					<a href="#shop">Vegetables</a>
					<a href="#shop">Dairy</a>
					<a href="#shop">Packed Food</a>
				</div>
				<div>
					<h4>Company</h4>
					<a href="#blog">Blog</a>
					<a href="#contact">Contact</a>
					<a href="#account">My Account</a>
					<a href="#checkout">Checkout</a>
				</div>
				<div>
					<h4>Contact</h4>
					<a href="mailto:info@organicbasket.com">info@organicbasket.com</a>
					<a href="tel:000012321545648">000012321545648</a>
				</div>
			</div>

			<p className="copyright">
				© {new Date().getFullYear()} Organic Basket. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
