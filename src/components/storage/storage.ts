
import { IProducts } from '../../types/product.interface';

class StorageData {
  createStateData(data: IProducts) {
    const values = data?.products ? data.products : [];
    localStorage.dataProducts = JSON.stringify(values);
    console.log('put data products in localStorage');
  }
}

export default StorageData;
