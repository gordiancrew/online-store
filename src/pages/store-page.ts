import { IProductFilter, IProduct } from './../types/product.interface';
import templateStorePage from './store-page_template';
import filterProperty from '../filter-object/filter-object';
import Filter from './../components/filter/filter';
import descriptionPage from '../pages/description-page';
import Header from '../components/header/header';
import Sort from '../components/sort/sort';

export const storePage = {
  template: templateStorePage,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
    this.renderFilter(filterProperty);
    this.renderSort();
    this.renderProducts();
  },

  renderSort: function () {
    const select = document.querySelector('.sort__selector') as HTMLSelectElement;
    select.addEventListener('change', () => {
      const url = new URL(window.location.href);
      const urlParam = url.searchParams;
      if (select.value === 'price-asc') {
        urlParam.set('sort', 'price-asc');
      }
      if (select.value === 'price-desc') {
        urlParam.set('sort', 'price-desc');
      }
      if (select.value === 'raiting-asc') {
        urlParam.set('sort', 'raiting-asc');
      }
      if (select.value === 'raiting-desc') {
        urlParam.set('sort', 'raiting-desc');
      }
      window.history.pushState({}, url.href, url.href);
      this.renderProducts();
    });
  },

  renderFilter: function (filterProperty: IProductFilter) {
    const wrapper = document.querySelectorAll('.filters__wrapper-list');
    const sliderInput = document.querySelectorAll('.scrollbar__input');
    const resetFilters = document.querySelector('.filters__link_reset');
    const copyLink = document.querySelector('.filters__link_copy');
    const filter = new Filter(filterProperty);
    filter.calculateFilters();
    filter.filterProducts();
    wrapper.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if ((event.target as HTMLDivElement).tagName === 'INPUT') {
          filter.setCheckbox();
          filter.setSearchParameters();
          filter.filterProducts();
          filter.calculateFilters();
          this.renderProducts();
          //filter.saveLocalStorage();
        }
      });
    });
    sliderInput.forEach((elem) => {
      elem.addEventListener('click', () => {
        filter.setSliders();
        filter.setSearchParameters();
        filter.filterProducts();
        filter.calculateFilters();
        this.renderProducts();
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
      filter.filterProducts();
      filter.calculateFilters();
      this.renderProducts();
      const select = document.querySelector('.sort__selector') as HTMLSelectElement;
      select.value = 'sort-title';
      //filter.saveLocalStorage();
    });
    (copyLink as HTMLDivElement).addEventListener('click', () => {
      filter.copyToBuffer();
    });
  },
  renderProducts: function () {
    const listProd = document.querySelector('.list-products') as HTMLElement;
    listProd ? (listProd.innerHTML = '') : listProd;
    //clear product list area befor new drawing
    const sort = new Sort();
    sort.sortProduct();
    let products: IProduct[] = [];
    if (localStorage.getItem('currentProducts') !== null) {
      products = JSON.parse(localStorage.currentProducts);
    }
    if (products.length === 0) {
      const title = document.createElement('div');
      title.classList.add('product__title');
      title.textContent = 'No products found';
      listProd?.appendChild(title);
    } else {
      products.forEach((prod) => drawProdCart(prod));
      //draw all elements type Product of data array
    }

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
      img.classList.add('product__img');
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

      //const prodDescription = document.createElement('div');
      //prodDescription.classList.add('product__description');
      //prodDescription.innerText = product.description;
      //prod.appendChild(prodDescription);

      const prodWrapperPrice = document.createElement('div');
      prodWrapperPrice.classList.add('product__wrapper-price');
      const prodPrice = document.createElement('div');
      prodPrice.classList.add('product__price');
      prodPrice.innerText = product.price.toString();
      const prodAdd = document.createElement('div');
      prodAdd.classList.add('product__add');
      if (localStorage.getItem('cartProducts') !== null) {
        const cart = JSON.parse(localStorage.cartProducts);
        cart.forEach((elem: IProduct) => {
          if (elem.id === product.id) {
            prodAdd.classList.add('product__add_remove');
          }
        });
      }

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
      prod.addEventListener('click', (event) => {
        if (
          (event.target as HTMLDivElement).className !== 'product__add' &&
          (event.target as HTMLDivElement).className !== 'product__add product__add_remove'
        ) {
          window.history.pushState({}, `/description/${product.id}`, `/description/${product.id}`);
          descriptionPage.render(`${product.id}`);
        } else {
          let cart: IProduct[] = [];
          let hasProduct = false;
          if (localStorage.getItem('cartProducts') !== null) {
            cart = JSON.parse(localStorage.cartProducts);
          }
          cart.forEach((elem, ind) => {
            if (elem.id === product.id) {
              (prodAdd as HTMLDivElement).classList.remove('product__add_remove');
              cart.splice(ind, 1);
              hasProduct = true;
            }
          });
          if (!hasProduct) {
            (prodAdd as HTMLDivElement).classList.add('product__add_remove');
            product.amount = 1;
            cart.push(product);
          }
          localStorage.setItem('cartProducts', JSON.stringify(cart));
          const header = new Header();
          header.render();
        }
      });
    }

    sort.setFound(products.length);
    sort.render();
  },
};

export default storePage;
