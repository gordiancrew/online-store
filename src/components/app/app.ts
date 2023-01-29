import { interfaceProduct } from '../../types/product.interface';
import Loader from '../loader/loaderData';
import StorageData from '../storage/storage';

class App {
  loader: Loader = new Loader();
  storageData: StorageData = new StorageData();

  start() {
    this.loader.load('GET', (data) => this.storageData.createStateData(data));
  }
}

export default App;
