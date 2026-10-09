import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '../redux/CartSlice';

export default function Header() {
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label="Paradise Nursery home">
        <span className="brand-leaf" aria-hidden="true">✿</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav" to="/cart" aria-label={`Shopping cart with ${cartQuantity} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}
