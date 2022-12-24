
import { Filter } from '../../types/filter.interface';
import { IProduct } from '../../types/product.interface';
import Filters from '../storage/filter';

class Controller {
  filter: Filters = new Filters();
  startAction() {
    console.log('start action');
    let ListAllProduct:Array<IProduct> = JSON.parse(localStorage.dataProducts);
    //get all products
    console.log("Our products: "+ListAllProduct);

    let filter:Filter= this.filter.getMyFilter();
    //get object filter
    console.log("Our filter: "+filter);


  }
}

export default Controller;
