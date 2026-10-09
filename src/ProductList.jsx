import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { categories, products } from './data/products';
import { addToCart, selectCartItems, selectCartQuantity } from './redux/CartSlice';

const money = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 2,
}).format(amount);

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <div className="page-shell">
      <Header />
      <main className="catalog-page">
        <section className="catalog-heading">
          <p className="eyebrow">FIND YOUR NEW FAVOURITE</p>
          <h1>Plants for every space.</h1>
          <p>Choose a leafy companion and make your home feel a little more like paradise.</p>
          <div className="catalog-summary"><span>18 plants to explore</span><span>·</span><span>{cartQuantity} {cartQuantity === 1 ? 'item' : 'items'} in your cart</span></div>
        </section>

        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <div className="section-heading">
              <h2>{category}</h2>
              <span>{products.filter((product) => product.category === category).length} plants</span>
            </div>
            <div className="product-grid">
              {products.filter((product) => product.category === category).map((product) => {
                const isAdded = cartItems.some((item) => item.id === product.id);
                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className="product-category-label">{product.category}</span>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="product-card-bottom">
                        <span className="product-price">{money(product.price)}</span>
                        <button
                          className="button button-small"
                          type="button"
                          disabled={isAdded}
                          onClick={() => dispatch(addToCart(product))}
                        >
                          {isAdded ? 'Added ✓' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <footer className="site-footer">Paradise Nursery <span>·</span> Make room for something green.</footer>
    </div>
  );
}
