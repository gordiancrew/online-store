import { IProduct, ESort } from '../../types/product.interface';
export class Sort {
  found = 0;

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

      switch (sort) {
        case ESort.priceAsc:
          arrFilterProducts.sort((a, b) => {
            return a.price - b.price;
          });
          break;

        case ESort.priceDesc:
          arrFilterProducts.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        case ESort.raitingAsc:
          arrFilterProducts.sort((a, b) => {
            return a.rating - b.rating;
          });
          break;
        case ESort.raitingDesc:
          arrFilterProducts.sort((a, b) => {
            return b.rating - a.rating;
          });
          break;
      }

      localStorage.setItem('currentProducts', JSON.stringify(arrFilterProducts));
    }
  }
}

export default Sort;
