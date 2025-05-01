import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import HomeCarousel from './components/HomeCarousel';
import Nav from './components/Nav';
import Products from './components/Products';
import RecentBlogs from './components/RecentBlogs';
import SecondaryNav from './components/SecondaryNav';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Nav />
      <SecondaryNav/>
      <Home/>
      <HomeCarousel/>
      <Products heading="Featured Products"/>
      <Categories/>
      <Products heading="Best Seller" />
      <RecentBlogs/>
      <Sponsors/>
    </div>
  );
}

export default App;
