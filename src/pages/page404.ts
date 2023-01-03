const templatePage404 = `
<div class="page-404__wrapper tile">
<div class="page-404__title">404</div>
<div class="page-404__img"></div>
<div class="page-404__text">OOOPS! Page not found</div>
</div>`;

export const page404 = {
  template: templatePage404,
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },
};

export default page404;
