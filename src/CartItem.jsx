import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
} from './redux/CartSlice';

const money = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 2,
}).format(amount);

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="page-shell">
      <Header />
      <main className="cart-page">
        <section className="cart-heading">
          <p className="eyebrow">YOUR GREEN CORNER</p>
          <h1>Shopping Cart</h1>
          <p>{cartQuantity} {cartQuantity === 1 ? 'plant' : 'plants'} selected for your home</p>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon" aria-hidden="true">🪴</div>
            <h2>Your cart is ready to grow.</h2>
            <p>You haven't added any plants yet. Find a leafy friend to bring home.</p>
            <Link className="button" to="/plants">Explore Plants</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list" aria-label="Items in your shopping cart">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <span className="cart-item-category">{item.category}</span>
                    <h2>{item.name}</h2>
                    <p className="unit-price">Unit price: {money(item.price)}</p>
                    <button className="text-button delete-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>
                      Remove item
                    </button>
                  </div>
                  <div className="quantity-and-price">
                    <div className="quantity-control" aria-label={`Quantity of ${item.name}`}>
                      <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                    <strong className="line-total">{money(item.price * item.quantity)}</strong>
                    <span className="line-total-label">Item total</span>
                  </div>
                </article>
              ))}
              <Link className="continue-link" to="/plants">← Continue shopping</Link>
            </section>

            <aside className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Total plants</span><strong>{cartQuantity}</strong></div>
              <div className="summary-line"><span>Subtotal</span><strong>{money(cartTotal)}</strong></div>
              <div className="summary-line"><span>Delivery</span><strong>Calculated later</strong></div>
              <div className="summary-divider" />
              <div className="summary-total"><span>Total</span><strong>{money(cartTotal)}</strong></div>
              <button className="button checkout-button" type="button" onClick={() => window.alert('Coming Soon! Checkout will be available in a future update.')}>Checkout</button>
              <p className="secure-note">A little greenery is on its way.</p>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer">Paradise Nursery <span>·</span> Make room for something green.</footer>
    </div>
  );
}
