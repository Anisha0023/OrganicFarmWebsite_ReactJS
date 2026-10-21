import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

const navItems = [
	{ name: 'Home', link: '#top' },
	{ name: 'Blog', link: '#blog' },
	{ name: 'Contact', link: '#contact' },
	{ name: 'Page', link: '#shop' },
	{ name: 'My Account', link: '#account' },
	{ name: 'Cart', link: '#cart', isCart: true },
	{ name: 'Checkout', link: '#checkout' },
];

function SecondaryNav({ cartCount = 0 }) {
	const [open, setOpen] = useState(false);

	return (
		<nav
			className="second-nav"
			aria-label="Main">
			<button
				type="button"
				className="nav-toggle"
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
				aria-controls="main-menu">
				{open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
				<span>Menu</span>
			</button>

			<div
				id="main-menu"
				className={`nav-links ${open ? 'is-open' : ''}`}>
				{navItems.map((item) => (
					<a
						href={item.link}
						key={item.name}
						onClick={() => setOpen(false)}>
						{item.name}
						{item.isCart && cartCount > 0 && (
							<span className="cart-count">{cartCount}</span>
						)}
					</a>
				))}
				<a
					href="#shop"
					className="nav-btn"
					onClick={() => setOpen(false)}>
					Buy Now
				</a>
			</div>
		</nav>
	);
}

export default SecondaryNav;
