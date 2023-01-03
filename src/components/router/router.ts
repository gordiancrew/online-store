import appConstants from '../../common/constant';
import Route from 'route-parser';
import page404 from '../../pages/page404';
import storyPage from '../../pages/store-page';
import cartPage from '../../pages/cart-page';
import descriptionPage from '../../pages/description-page';

export const routes = {
  Main: new Route(appConstants.routes.index),
  Cart: new Route(appConstants.routes.cart),
  Description: new Route(appConstants.routes.description),
};

export const render = (path: string) => {
  if (routes.Main.match(path)) {
    storyPage.render();
    return;
  } else if (routes.Cart.match(path)) {
    cartPage.render();
    return;
  } else if (routes.Description.match(path)) {
    descriptionPage.render();
    return;
  }
  page404.render();
};

export const goTo = (path: string) => {
  window.history.pushState({ path }, path, path);
  render(path);
};

const initRouter = () => {
  window.addEventListener('popstate', () => {
    render(new URL(window.location.href).pathname);
  });
  // document.querySelectorAll('.navList__navLink').forEach((el) => {
  //   el.addEventListener('click', (env) => {
  //     env.preventDefault();
  //     if (env.target) {
  //       const { pathname: path } = new URL((env.target as HTMLLinkElement).href);
  //       goTo(path);
  //     }
  //   });
  // });
  render(new URL(window.location.href).pathname);
};

export default initRouter;
