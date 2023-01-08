import { IProduct } from '../types/product.interface';
import templateCartPage from './cart-page_template';

export const cartPage = {
  template: templateCartPage,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },

  renderProductsCart: function (arrId: Array<string>) {
    const dataProducts = JSON.parse(localStorage.dataProducts);
    let products: Array<IProduct> = [];
    arrId.forEach((id) => {
      dataProducts.forEach((x: IProduct) => {
        if (x.id == id) {
          products.push(x);
        }
      });
    });
    const cartList = document.querySelector('.cart-list');
    cartList ? (cartList.innerHTML = '') : cartList;
    products.forEach((prod, i) => drawProd((i + 1).toString(), prod));
    const productsLength = document.querySelector('.product-len') as HTMLDivElement;
    productsLength ? (productsLength.textContent = products.length.toString()) : '0';
    const sumPrice = document.querySelector('.sum-price') as HTMLDivElement;
    let sumP = 0;
    products.forEach((p) => (sumP += p.price));
    sumPrice.textContent = sumP.toString()+'$';

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
      cartItemNumbers.innerText = '1';
      const cartItemPointRight = document.createElement('div');
      cartItemPointRight.classList.add('cart-item__point');
      cartItemPointRight.innerText = '+';
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
