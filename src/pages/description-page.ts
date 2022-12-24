export const descriptionPage = {
  template: '<h1>Description page<h1>',
  render: function () {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },
};

export default descriptionPage;
