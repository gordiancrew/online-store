import { Cart } from '../cart/cart';

export class Header {
  cart: Cart;
  constructor() {
    this.cart = new Cart();
  }
  render() {
    this.cart.reload();
    this.cart.headerSet();
  }
}

export default Header;
