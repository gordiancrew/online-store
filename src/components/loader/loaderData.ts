import { Products } from '../../types/product.interface';

type NewType = (data: Products) => void;
class Loader {
  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  load(method: string, callback: (data: Products) => void): void {
    fetch('https://dummyjson.com/products', { method })
      .then(this.errorHandler)
      .then((res2) => res2.json())
      .then((data: Products) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
