import { IProduct } from '../../types/product.interface';
import Loader from '../loader/loaderData';
import StorageData from '../storage/storage';

class App {
  loader: Loader = new Loader();
  storageData: StorageData = new StorageData();

  start() {
    this.loader.load('GET', (data) => this.storageData.createStateData(data));
    console.log('get data products from API');
  }
}

export default App;
