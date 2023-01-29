import Cart from '../cart/cart';

class Header {
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
