import { IProductFilter, IProduct } from '../../types/product.interface';
import DualSlider from '../../components/dual-slider/dual-slider';
import Checkboxes from '../../components/checkbox/checkboxes';

class Filter {
  property: IProductFilter;
  sliderPrice: DualSlider;
  sliderStock: DualSlider;
  checkboxesCategory: Checkboxes;
  checkboxesBrand: Checkboxes;

  constructor(property: IProductFilter) {
    this.property = property;

    const urlParam = new URL(window.location.href).searchParams;
    if (urlParam.has('category')) {
      const arrCategory = (urlParam.get('category') as string).split('↕');
      this.property.category.forEach((elem) => {
        if (arrCategory.includes(elem.name)) {
          elem.checked = true;
        } else {
          elem.checked = false;
        }
      });
    }
    if (urlParam.has('brand')) {
      const arrCategory = (urlParam.get('brand') as string).split('↕');
      this.property.brand.forEach((elem) => {
        if (arrCategory.includes(elem.name.toLowerCase())) {
          elem.checked = true;
        } else {
          elem.checked = false;
        }
      });
    }
    if (urlParam.has('price')) {
      const arr = (urlParam.get('price') as string).split('↕');
      if (+arr[0] > this.property.price.min) {
        this.property.price.currentMin = +arr[0];
      } else {
        this.property.price.currentMin = this.property.price.min;
      }
      if (+arr[1] < this.property.price.max) {
        this.property.price.currentMax = +arr[1];
      } else {
        this.property.price.currentMax = this.property.price.max;
      }
    }
    if (urlParam.has('stock')) {
      const arr = (urlParam.get('stock') as string).split('↕');
      if (+arr[0] > this.property.stock.min) {
        this.property.stock.currentMin = +arr[0];
      } else {
        this.property.stock.currentMin = this.property.stock.min;
      }
      if (+arr[1] < this.property.stock.max) {
        this.property.stock.currentMax = +arr[1];
      } else {
        this.property.stock.currentMax = this.property.stock.max;
      }
    }
    this.checkboxesCategory = new Checkboxes(this.property.category, 0, 'category');
    this.checkboxesCategory.render();
    this.checkboxesBrand = new Checkboxes(this.property.brand, 1, 'brand');
    this.checkboxesBrand.render();
    this.sliderPrice = new DualSlider(this.property.price, 0);
    this.sliderPrice.render();
    this.sliderStock = new DualSlider(this.property.stock, 1);
    this.sliderStock.render();
  }
  setCheckbox() {
    this.property.category.forEach((item) => {
      const checkbox = document.querySelector(`input[name="${item.name}"]`) as HTMLInputElement;
      if (checkbox.checked) {
        item['checked'] = true;
      } else {
        item['checked'] = false;
      }
    });
    this.property.brand.forEach((item) => {
      const checkbox = document.querySelector(`input[name="${item.name}"]`) as HTMLInputElement;
      if (checkbox.checked) {
        item['checked'] = true;
      } else {
        item['checked'] = false;
      }
    });
  }

  setSliders() {
    const sliderMin = document.querySelectorAll('.scrollbar__input_min');
    const sliderMax = document.querySelectorAll('.scrollbar__input_max');
    this.property.price.currentMin = parseInt((sliderMin[0] as HTMLInputElement).value, 10);
    this.property.price.currentMax = parseInt((sliderMax[0] as HTMLInputElement).value, 10);
    this.property.stock.currentMin = parseInt((sliderMin[1] as HTMLInputElement).value, 10);
    this.property.stock.currentMax = parseInt((sliderMax[1] as HTMLInputElement).value, 10);
  }
  reset() {
    this.property.category.forEach((item) => {
      const checkbox = document.querySelector(`input[name="${item.name}"]`) as HTMLInputElement;
      checkbox.checked = false;
      item['checked'] = false;
    });
    this.property.brand.forEach((item) => {
      const checkbox = document.querySelector(`input[name="${item.name}"]`) as HTMLInputElement;
      checkbox.checked = false;
      item['checked'] = false;
    });
    this.property.price.currentMin = this.property.price.min;
    this.property.price.currentMax = this.property.price.max;
    this.property.stock.currentMin = this.property.stock.min;
    this.property.stock.currentMax = this.property.stock.max;
    this.sliderPrice.reset();
    this.sliderStock.reset();
  }

  saveLocalStorage() {
    localStorage.filter = JSON.stringify(this.property);
  }
  loadLocalStorage() {
    this.property = JSON.parse(localStorage.filter);
  }
  setSearchParameters() {
    const url = new URL(window.location.href);
    const urlParam = url.searchParams;
    const arrProperty: string[] = [];
    const arrBrand: string[] = [];
    const arrPrice: string[] = [];
    const arrStock: string[] = [];
    this.property.category.forEach((elem) => {
      if (elem.checked === true) {
        arrProperty.push(elem.name.toLowerCase());
      }
    });
    if (arrProperty.length !== 0) {
      urlParam.set('category', arrProperty.join('↕'));
    } else {
      urlParam.delete('category');
    }
    this.property.brand.forEach((elem) => {
      if (elem.checked === true) {
        arrBrand.push(elem.name.toLowerCase());
      }
    });
    if (arrBrand.length !== 0) {
      urlParam.set('brand', arrBrand.join('↕'));
    } else {
      urlParam.delete('brand');
    }

    if (
      this.property.price.currentMin !== this.property.price.min ||
      this.property.price.currentMax !== this.property.price.max
    ) {
      arrPrice.push(`${this.property.price.currentMin}`);
      arrPrice.push(`${this.property.price.currentMax}`);
      urlParam.set('price', arrPrice.join('↕'));
    } else {
      urlParam.delete('price');
    }
    if (
      this.property.stock.currentMin !== this.property.stock.min ||
      this.property.stock.currentMax !== this.property.stock.max
    ) {
      arrStock.push(`${this.property.stock.currentMin}`);
      arrStock.push(`${this.property.stock.currentMax}`);
      urlParam.set('stock', arrStock.join('↕'));
    } else {
      urlParam.delete('stock');
    }
    urlParam.delete('sort');
    window.history.pushState({}, url.href, url.href);
  }
  copyToBuffer() {
    const copyLink = document.querySelector(`.filters__link_copy`) as HTMLDivElement;
    copyLink.textContent = 'Copied!';
    copyLink.style.color = '#70c05b';
    const el = document.createElement('textarea');
    el.value = window.location.href;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => {
      copyLink.textContent = 'Copy link';
      copyLink.style.color = '';
    }, 800);
  }
  filterProducts() {
    let arrProducts: IProduct[] = [];
    const arrFilterProducts: IProduct[] = [];
    if (localStorage.getItem('dataProducts') !== null) {
      arrProducts = JSON.parse(localStorage.dataProducts);
    }
    arrProducts.forEach((elem) => {
      const urlParam = new URL(window.location.href).searchParams;

      let categoryFlag = urlParam.has('category') ? false : true;
      let brandFlag = urlParam.has('brand') ? false : true;
      let priceFlag = urlParam.has('price') ? false : true;
      let stockFlag = urlParam.has('stock') ? false : true;

      this.property.category.forEach((elemCheckbox) => {
        if (elemCheckbox.checked && elemCheckbox.name.toLowerCase() === elem.category.toLowerCase()) {
          categoryFlag = true;
        }
      });
      this.property.brand.forEach((elemCheckbox) => {
        if (elemCheckbox.checked && elemCheckbox.name.toLowerCase() === elem.brand.toLowerCase()) {
          brandFlag = true;
        }
      });
      if (this.property.price.currentMin < elem.price && this.property.price.currentMax > elem.price) {
        priceFlag = true;
      }
      if (this.property.stock.currentMin < elem.stock && this.property.stock.currentMax > elem.stock) {
        stockFlag = true;
      }
      if (categoryFlag && brandFlag && priceFlag && stockFlag) {
        arrFilterProducts.push(elem);
      }
      localStorage.setItem('currentProducts', JSON.stringify(arrFilterProducts));
    });
  }
  calculateFilters() {
    let arrFilterProducts: IProduct[] = [];
    if (localStorage.getItem('currentProducts') !== null) {
      arrFilterProducts = JSON.parse(localStorage.currentProducts);
    }
    this.property.category.forEach((elemCheckbox) => {
      elemCheckbox.current = 0;
      arrFilterProducts.forEach((elem) => {
        if (elemCheckbox.name.toLowerCase() === elem.category.toLowerCase()) {
          elemCheckbox.current++;
        }
      });
    });
    this.property.brand.forEach((elemCheckbox) => {
      elemCheckbox.current = 0;
      arrFilterProducts.forEach((elem) => {
        if (elemCheckbox.name.toLowerCase() === elem.brand.toLowerCase()) {
          elemCheckbox.current++;
        }
      });
    });

    this.checkboxesCategory.render();
    this.checkboxesBrand.render();
  }
}

export default Filter;
