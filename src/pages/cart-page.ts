import { IProduct } from '../types/product.interface';
import templateCartPage from './cart-page_template';
import Header from '../components/header/header';

export const cartPage = {
  template: templateCartPage,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
    this.renderProductsCart();
  },

  renderProductsCart: function () {
    const products: Array<IProduct> = JSON.parse(localStorage.cartProducts).filter((x: IProduct) => x.amount);
    const cartList = document.querySelector('.cart-list');
    cartList ? (cartList.innerHTML = '') : cartList;
    products.forEach((prod, i) => drawProd((i + 1).toString(), prod));
    const productsLength = document.querySelector('.product-len') as HTMLDivElement;
    productsLength ? (productsLength.textContent = products.length.toString()) : '0';
    const sumPrice = document.querySelector('.sum-price') as HTMLDivElement;
    let sumP = 0;
    products.forEach((p) => (sumP += p.amount?(p.price*p.amount!):p.price));
    sumPrice.textContent = sumP.toString() + '$';

    function drawProd(index: string, product: IProduct) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.classList.add('tile');
      const cartItemNumber = document.createElement('div');
      cartItemNumber.classList.add('cart-item__number');
      cartItemNumber.innerHTML = index;

      cartItem.appendChild(cartItemNumber);

      const cartItemWrapperImg = document.createElement('div');
      cartItemWrapperImg.classList.add('cart-item__wrapper-img');
      const cartItemImg = document.createElement('img');
      cartItemImg.classList.add('cart-item__img');
      cartItemImg.src = product.images[0];
      cartItemWrapperImg.appendChild(cartItemImg);

      cartItem.appendChild(cartItemWrapperImg);

      const cartItemInfo = document.createElement('div');
      cartItemInfo.classList.add('cart-item__info');
      const cartItemTitle = document.createElement('div');
      cartItemTitle.classList.add('cart-item__title');
      cartItemTitle.innerText = product.title;
      const cartItemBorder = document.createElement('div');
      cartItemBorder.classList.add('cart-item__border');
      const cartItemDescription = document.createElement('div');
      cartItemDescription.classList.add('cart-item__description');
      cartItemDescription.innerText = product.description;
      const cartItemRatingDiscount = document.createElement('div');
      cartItemRatingDiscount.classList.add('cart-item__rating-discount');
      const cartItemRating = document.createElement('div');
      cartItemRating.classList.add('cart-item__rating');
      const cartItemDiscount = document.createElement('div');
      cartItemDiscount.classList.add('cart-item__discount');
      cartItemRating.textContent = 'Rating: ' + product.rating.toString();
      cartItemDiscount.innerText = 'Discount: ' + product.discountPercentage.toString() + '%';
      cartItemRatingDiscount.appendChild(cartItemRating);
      cartItemRatingDiscount.appendChild(cartItemDiscount);

      cartItemInfo.appendChild(cartItemTitle);
      cartItemInfo.appendChild(cartItemBorder);
      cartItemInfo.appendChild(cartItemDescription);
      cartItemInfo.appendChild(cartItemRatingDiscount);

      cartItem.appendChild(cartItemInfo);

      const cartItemCount = document.createElement('div');
      cartItemCount.classList.add('cart-item__count');
      const cartItemStock = document.createElement('div');
      cartItemStock.classList.add('cart-item__stock');
      cartItemStock.innerText = 'Stock: ' + product.stock.toString();
      const cartItemCountNumber = document.createElement('div');
      cartItemCountNumber.classList.add('cart-item__count-number');
      const cartItemPointLeft = document.createElement('div');
      cartItemPointLeft.classList.add('cart-item__point');
      cartItemPointLeft.innerText = '-';
      const cartItemNumbers = document.createElement('div');
      cartItemNumbers.innerText = product.amount ? product.amount.toString() : '';
      const cartItemPointRight = document.createElement('div');
      cartItemPointRight.classList.add('cart-item__point');
      cartItemPointRight.innerText = '+';

      let cartProducts: Array<IProduct> = JSON.parse(localStorage.cartProducts);
      cartItemPointLeft.onclick = function () {
        const header = new Header();
        if (cartProducts.filter((y) => y.id == product.id)[0].amount == 1) {
          cartProducts.filter((y) => y.id == product.id)[0].amount = null;
          cartProducts = cartProducts.filter((x) => x.amount);
          localStorage.cartProducts = JSON.stringify(cartProducts);
          // cartItemNumbers.innerText = '0';
        } else {
          cartProducts.filter((y) => y.id == product.id)[0].amount!--;
          localStorage.cartProducts = JSON.stringify(cartProducts);
        }
        cartPage.render();
        header.render();
      };

      cartItemPointRight.onclick = function () {
        const header = new Header();
        let num = cartProducts.filter((y) => y.id == product.id)[0].amount;
        num ? num++ : num;
        cartProducts.filter((y) => y.id == product.id)[0].amount = num;
        localStorage.cartProducts = JSON.stringify(cartProducts);
        cartPage.render();
        header.render();
      };

      const cartItemPrice = document.createElement('div');
      cartItemPrice.classList.add('cart-item__price');
      cartItemPrice.innerText = '$: ' + product.price.toString();

      cartItemCountNumber.appendChild(cartItemPointLeft);
      cartItemCountNumber.appendChild(cartItemNumbers);
      cartItemCountNumber.appendChild(cartItemPointRight);
      cartItemCount.appendChild(cartItemStock);
      cartItemCount.appendChild(cartItemCountNumber);
      cartItemCount.appendChild(cartItemPrice);

      cartItem.appendChild(cartItemCount);
      cartList?.appendChild(cartItem);
    }
  },
};

export default cartPage;
