import templateStorePage from './store-page_template';

export const storePage = {
  template: templateStorePage,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },
  renderFilter: function () {
    //
  },
  renderProducts: function () {
    //
  },
};

export default storePage;
