import { IProduct } from '../../types/product.interface';
export class Sort {
  found: number;
  constructor() {
    this.found = 0;
  }
  setFound(amount: number) {
    this.found = amount;
  }

  render() {
    const foundAmount = document.querySelector('.sort__amount') as HTMLSpanElement;
    foundAmount.textContent = `${this.found}`;
  }

  sortProduct() {
    const urlParam = new URL(window.location.href).searchParams;
    if (urlParam.has('sort')) {
      const select = document.querySelector('.sort__selector') as HTMLSelectElement;
      const sort = urlParam.get('sort') as string;
      select.value = sort;
      let arrFilterProducts: IProduct[] = [];
      if (localStorage.getItem('currentProducts') !== null) {
        arrFilterProducts = JSON.parse(localStorage.currentProducts);
      }
      if (sort === 'price-asc') {
        arrFilterProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort === 'price-desc') {
        arrFilterProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === 'raiting-asc') {
        arrFilterProducts.sort((a, b) => {
          return a.rating - b.rating;
        });
      }
      if (sort === 'raiting-desc') {
        arrFilterProducts.sort((a, b) => {
          return b.rating - a.rating;
        });
      }
      localStorage.setItem('currentProducts', JSON.stringify(arrFilterProducts));
    }
  }
}

export default Sort;
