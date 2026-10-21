import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Home';
import HomeCarousel from './components/HomeCarousel';
import Nav from './components/Nav';
import Products, { allProducts } from './components/Products';
import RecentBlogs from './components/RecentBlogs';
import SecondaryNav from './components/SecondaryNav';
import Sponsors from './components/Sponsors';

const bestSellers = [...allProducts].reverse();

function App() {
	const [cart, setCart] = useState([]);
	const addToCart = (item) => setCart((c) => [...c, item]);

	return (
		<div
			className="App"
			id="top">
			<Nav />
			<SecondaryNav cartCount={cart.length} />
			<Home />
			<HomeCarousel />
			<div id="shop">
				<Products
					heading="Featured Products"
					onAddToCart={addToCart}
				/>
			</div>
			<Categories />
			<Products
				heading="Best Seller"
				items={bestSellers}
				onAddToCart={addToCart}
			/>
			<RecentBlogs />
			<Sponsors />
			<Footer />
		</div>
	);
}

export default App;
