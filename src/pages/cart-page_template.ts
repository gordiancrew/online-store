export const templateCartPage = `
<div class="cart-page">
      <div class="cart-page__wrapper tile">
        <div class="cart-list__title">
          <div class="cart-page__title">
            Products In Card
          </div>
          
          <div class="cart-item__page">
            page :
            <div class="cart-item__point">
              ← </div> 1
            <div class="cart-item__point">→</div>
          </div>
        </div>
        <div class="cart-list">
          <div class="cart-item tile">
            <div class="cart-item__number">
              1
            </div>
            <div class="cart-item__wrapper-img">
              <img class="cart-item__img" src="https://i.dummyjson.com/data/products/1/1.jpg" , alt="photo">
            </div>
            <div class="cart-item__info">
              <div class="cart-item__title">Title</div>
              <div class="cart-item__border"></div>
              <div class="cart-item__description">An apple mobile which is nothing like apple
              </div>
              <div class="cart-item__rating-discount">
                <div class="cart-item__rating">Rating: 4,4</div>
                <div class="cart-item__discount">Discount: 17%</div>
              </div>
            </div>
            <div class="cart-item__count">
              <div class="cart-item__stock">
                Stock:34
              </div>
              <div class="cart-item__count-number">
                <div class="cart-item__point"> -</div>
                <div class="count">1</div>
                <div class="cart-item__point">+</div>
              </div>
              <ddiv class="cart-item__price">
                $500
              </ddiv>
            </div>
          </div>
          <div class="cart-item tile">item2</div>
          <div class="cart-item tile">item3</div>
        </div>
      </div>
      <div class="cart-summary tile">
        <div class="cart-summary__title">Summary</div>
        <div class="cart-summary__key-value">
          <div class="cart-summary__key">
            Products:
          </div>
          <div class="cart-summary__value product-len">
            2
          </div>
        </div>
        <div class="cart-summary__key-value">
          <div class="cart-summary__key">
            Total:
          </div>
          <div class="cart-summary__value sum-price">
            1500$
          </div>
        </div>
        <div class="cart-summary__input-wrapper">
          <form>
            <input class="cart-summary__input" type="text" placeholder="Enter promo code">
          </form>
        </div>
        <div class="cart-summary__promo-text">
          Promo for test: 'RS', 'EPM'
        </div>
        <div class="cart-summary__button">
          BY NOW
        </div>
      </div>

    </div>
`;
export default templateCartPage;