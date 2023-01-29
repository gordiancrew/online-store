import { interfaceProduct } from '../../types/product.interface';

class Cart {
  cart: interfaceProduct[];
  constructor() {
    if (localStorage.getItem('cartProducts') !== null) {
      this.cart = JSON.parse(localStorage.cartProducts);
    } else {
      this.cart = [];
    }
  }
  headerSet() {
    const headerAmount = document.querySelector('.header__amount') as HTMLSpanElement;
    const headerMoney = document.querySelector('.header__amount-money') as HTMLSpanElement;
    let money = 0;
    headerAmount.textContent = `${this.cart.length}`;
    this.cart.forEach((elem) => {
      if (elem.amount !== null) {
        money += elem.amount * elem.price;
      }
    });
    headerMoney.textContent = `${money.toFixed(2)}`;
  }
  reload() {
    if (localStorage.getItem('cartProducts') !== null) {
      this.cart = JSON.parse(localStorage.cartProducts);
    } else {
      this.cart = [];
    }
  }
}
export default Cart;
