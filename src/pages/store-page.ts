import { IProductFilter } from './../types/product.interface';
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
  renderProducts: function () {
    //
  },
};

export default storePage;
