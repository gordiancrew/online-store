import { IProduct } from '../../types/product.interface';
import Router from '../../components/router/router';

class Controller {
  startAction() {
    console.log('start action');
    const router = new Router();
    router.initRouter();
    // let bat = document.querySelector('.btn') as HTMLElement;
    // bat.onclick = function () {
    //   console.log('btn click');
    //   JSON.parse(localStorage.dataProducts).forEach((x: IProduct,index:number) => console.log(index+" - " + x.title));
    // };
  }
}

export default Controller;
