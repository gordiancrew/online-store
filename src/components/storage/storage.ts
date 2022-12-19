import { Products } from '../../types/product.interface';
import Controller from '../controller/controller';

class StorageData {
  controller: Controller = new Controller();
  createStateData(data: Products) {
    const values = data?.products ? data.products : [];
    localStorage.dataProducts = JSON.stringify(values);
    console.log('put data products in localStorage');
    this.controller.startAction();
  }
}

export default StorageData;
