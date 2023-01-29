import Router from '../../components/router/router';
import Header from '../../components/header/header';

class Controller {
  startAction() {
    console.log('start action');
    const header = new Header();
    header.render();
    const router = new Router();
    router.initRouter();
  }
}

export default Controller;
