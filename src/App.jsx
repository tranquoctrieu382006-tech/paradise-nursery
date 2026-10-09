import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function LandingPage() {
  return (
    <>
    <main className="landing-page">
      <div className="landing-overlay" />
      <section className="landing-content">
        <p className="landing-kicker">GROW YOUR OWN LITTLE PARADISE</p>
        <h1>Paradise <span>Nursery</span></h1>
        <p className="landing-intro">
          Bring home a little calm. Discover houseplants that make your space
          feel fresher, warmer, and more alive.
        </p>
        <Link className="button button-light" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
      </section>
      <div className="landing-bottom-note">GOOD THINGS GROW HERE · EST. WITH LOVE</div>
    </main>
    <section className="landing-about-wrap">
      <AboutUs />
    </section>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
