import { IProductFilter, IProduct } from './../types/product.interface';
import templateStorePage from './store-page_template';
import filterProperty from '../filter-object/filter-object';
import Filter from './../components/filter/filter';

export const storePage = {
  template: templateStorePage,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
    this.renderFilter(filterProperty);
  },

  renderFilter: function (filterProperty: IProductFilter) {
    const wrapper = document.querySelectorAll('.filters__wrapper-list');
    const sliderInput = document.querySelectorAll('.scrollbar__input');
    const resetFilters = document.querySelector('.filters__link_reset');
    const copyLink = document.querySelector('.filters__link_copy');
    const filter = new Filter(filterProperty);
    wrapper.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if ((event.target as HTMLDivElement).tagName === 'INPUT') {
          filter.setCheckbox();
          filter.setSearchParameters();
          //filter.saveLocalStorage();
        }
      });
    });
    sliderInput.forEach((elem) => {
      elem.addEventListener('click', () => {
        filter.setSliders();
        filter.setSearchParameters();
        //filter.saveLocalStorage();
      });
    });
    sliderInput.forEach((elem) => {
      elem.addEventListener('mouseup', () => {
        //filter.setSearchParameters();
      });
    });

    (resetFilters as HTMLDivElement).addEventListener('click', () => {
      filter.reset();
      filter.setSearchParameters();
      //filter.saveLocalStorage();
    });
    (copyLink as HTMLDivElement).addEventListener('click', () => {
      filter.copyToBuffer();
    });
  },
  renderProducts: function (products: Array<IProduct>) {
    const listProd = document.querySelector('.list-products') as HTMLElement;
    listProd ? (listProd.innerHTML = '') : listProd;
    //clear product list area befor new drawing

    products.forEach((prod) => drawProdCart(prod));
    //draw all elements type Product of data array

    function drawProdCart(product: IProduct) {
      //draw new product card and append it to product list
      const prod = document.createElement('div');
      prod.classList.add('product');

      const prodWrapperTitle = document.createElement('div');
      prodWrapperTitle.classList.add('product__wrapper-title');
      const prodTittle = document.createElement('div');
      prodTittle.innerText = product.title;

      const prodWrapperCategory = document.createElement('div');
      prodWrapperCategory.classList.add('product__wrapper-category');
      prodTittle.classList.add('product__title');

      const prodCategory = document.createElement('div');
      prodCategory.classList.add('product__category');
      prodCategory.innerText = product.category;
      const prodBrend = document.createElement('div');
      prodBrend.classList.add('product__brand');
      prodBrend.innerText = product.brand;
      prodWrapperCategory.appendChild(prodCategory);
      prodWrapperCategory.appendChild(prodBrend);
      prodWrapperTitle.appendChild(prodTittle);
      prodWrapperTitle.appendChild(prodWrapperCategory);
      prod.appendChild(prodWrapperTitle);

      const prodImg = document.createElement('div');
      prodImg.classList.add('product__wrapper-img');
      const img = document.createElement('img');
      img.src = product.images[0];
      prodImg.appendChild(img);
      prod.appendChild(prodImg);

      const prodWrapperRating = document.createElement('div');
      prodWrapperRating.classList.add('product__wrapper-rating');
      const prodRaiting = document.createElement('div');
      prodRaiting.classList.add('product__rating');
      prodRaiting.innerText = product.rating.toString();
      const prodDiscont = document.createElement('div');
      prodDiscont.classList.add('product__discount');
      prodDiscont.innerText = product.discountPercentage.toString();
      prodWrapperRating.appendChild(prodRaiting);
      prodWrapperRating.appendChild(prodDiscont);
      prod.appendChild(prodWrapperRating);

      const prodDescription = document.createElement('div');
      prodDescription.classList.add('product__description');
      prodDescription.innerText = product.description;
      prod.appendChild(prodDescription);

      const prodWrapperPrice = document.createElement('div');
      prodWrapperPrice.classList.add('product__wrapper-price');
      const prodPrice = document.createElement('div');
      prodPrice.classList.add('product__price');
      prodPrice.innerText = product.price.toString();
      const prodAdd = document.createElement('div');
      prodAdd.classList.add('product__add');
      prodWrapperPrice.appendChild(prodPrice);
      prodWrapperPrice.appendChild(prodAdd);
      prod.appendChild(prodWrapperPrice);

      const prodWrapperStock = document.createElement('div');
      prodWrapperStock.classList.add('product__wrapper-stock');
      const prodStock = document.createElement('div');
      prodStock.classList.add('product__stock');
      prodStock.innerText = product.stock.toString();
      prodWrapperStock.appendChild(prodStock);
      prod.appendChild(prodWrapperStock);

      listProd?.appendChild(prod);
    }
  },
};

export default storePage;
