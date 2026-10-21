import React from 'react';
import Logo from '../assets/images/cropped-Organic.png';
import { GoMail } from 'react-icons/go';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebook } from 'react-icons/ti';
import { BsYoutube } from 'react-icons/bs';
import { LiaPinterestP } from 'react-icons/lia';

const socialIcons = [
	{ icon: <FaXTwitter />, link: 'https://x.com', label: 'X (Twitter)' },
	{
		icon: <TiSocialFacebook />,
		link: 'https://facebook.com',
		label: 'Facebook',
	},
	{ icon: <BsYoutube />, link: 'https://youtube.com', label: 'YouTube' },
	{
		icon: <LiaPinterestP />,
		link: 'https://pinterest.com',
		label: 'Pinterest',
	},
];

function Nav() {
	return (
		<header className="primary-nav">
			<a
				href="#top"
				className="logo-link">
				<img
					src={Logo}
					alt="Organic Basket"
				/>
			</a>

			<a
				className="mail-info"
				href="mailto:info@organicbasket.com">
				<div className="mail-border">
					<GoMail aria-hidden="true" />
				</div>
				<div className="mail-text">
					<h4>Email Address</h4>
					<p>info@organicbasket.com</p>
				</div>
			</a>
			<hr className="nav-hr" />

			<a
				className="mail-info"
				href="tel:000012321545648">
				<div className="mail-border">
					<BiSolidPhoneCall aria-hidden="true" />
				</div>
				<div className="mail-text">
					<h4>24/7 In Touch</h4>
					<p>000012321545648</p>
				</div>
			</a>
			<hr className="nav-hr" />

			<div className="nav-icons">
				{socialIcons.map((item) => (
					<a
						href={item.link}
						key={item.label}
						aria-label={item.label}
						target="_blank"
						rel="noopener noreferrer">
						{item.icon}
					</a>
				))}
			</div>
		</header>
	);
}

export default Nav;
