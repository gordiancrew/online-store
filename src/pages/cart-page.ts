export const cartPage = {
  template: '<h1>Cart page<h1>',
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },
};

export default cartPage;
