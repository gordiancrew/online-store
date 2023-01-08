export const descriptionPage = {
  template: '<h1>Description page<h1>',
  render: function (id: string) {
    console.log(id);
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
  },
  renderProdNotFound() {
    console.log('prod not found');
    //TODO
  },
};

export default descriptionPage;
