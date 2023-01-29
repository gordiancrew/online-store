import { interfaceProduct } from '../../types/product.interface';
import Route from 'route-parser';
import page404 from '../../pages/page404';
import storyPage from '../../pages/store-page';
import cartPage from '../../pages/cart-page';
import descriptionPage from '../../pages/description-page';

class Router {
  routes: { name: string; route: Route }[];
  constructor() {
    const cartLink = document.querySelector('.header__cart') as HTMLDivElement;
    const logoLink = document.querySelector('.icon_logo') as HTMLSpanElement;
    this.routes = [
      { name: '/', route: new Route('/') },
      { name: '/cart', route: new Route('/cart') },
    ];
    const dataProducts = JSON.parse(localStorage.dataProducts);
    dataProducts.forEach((item: interfaceProduct) => {
      this.routes.push({ name: `${item.id}`, route: new Route(`/description/${item.id}`) });
    });
    cartLink.addEventListener('click', () => {
      window.history.pushState({}, '/cart', '/cart');
      cartPage.render();
    });
    logoLink.addEventListener('click', () => {
      window.history.pushState({}, '/', '/');
      storyPage.render();
    });
  }
  render(path: string) {
    let prodNotFound = true;
    if (this.routes[0].route.match(path)) {
      storyPage.render();
      return;
    } else if (this.routes[1].route.match(path)) {
      cartPage.render();
      return;
    }
    this.routes.forEach((elem) => {
      if (elem.route.match(path)) {
        descriptionPage.render(elem.name);
        prodNotFound = false;
        return;
      }
    });
    if (prodNotFound) {
      if (path.match(/\/description\//)) {
        descriptionPage.renderProdNotFound();
        return;
      } else {
        page404.render();
      }
    }
  }
  goTo(path: string) {
    window.history.pushState({ path }, path, path);
    this.render(path);
  }
  initRouter() {
    window.addEventListener('popstate', () => {
      this.render(new URL(window.location.href).pathname);
    });
    this.render(new URL(window.location.href).pathname);
  }
}

export default Router;
