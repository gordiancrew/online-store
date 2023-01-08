import { IProduct } from '../types/product.interface';
import templateDescriptionPage from './description-page_template';

export const descriptionPage = {
  template: templateDescriptionPage,
  render: function (id: string) {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
    this.renderDescription(id);
  },
  renderProdNotFound() {
    console.log('prod not found');
    (document.querySelector('.main') as HTMLDivElement).innerHTML = this.template;
    this.renderNotFound();
  },

  renderDescription(id: string) {
    const prod: IProduct = JSON.parse(localStorage.dataProducts).filter((x: IProduct) => x.id == id)[0];
    const chitCategory = document.querySelector('.chit-category');
    chitCategory ? (chitCategory.textContent = prod.category) : '';
    const chitBrand = document.querySelector('.chit-brand');
    chitBrand ? (chitBrand.textContent = prod.brand) : '';
    const chitTitle = document.querySelector('.chit-title');
    chitTitle ? (chitTitle.textContent = prod.title) : '';
    const descriptionTitle = document.querySelector('.description-title');
    descriptionTitle ? (descriptionTitle.textContent = prod.title) : '';
    const descriptionDescription = document.querySelector('.description-description');
    descriptionDescription ? (descriptionDescription.textContent = prod.description) : '';
    const descriptionDiscount = document.querySelector('.description-discount');
    descriptionDiscount ? (descriptionDiscount.textContent = prod.discountPercentage.toString() + '%') : '';
    const descriptionRating = document.querySelector('.description-rating');
    descriptionRating ? (descriptionRating.textContent = prod.rating.toString()) : '';
    const descriptionStock = document.querySelector('.description-stock');
    descriptionStock ? (descriptionStock.textContent = prod.stock.toString()) : '';
    const descriptionBrand = document.querySelector('.description-brand');
    descriptionBrand ? (descriptionBrand.textContent = prod.brand) : '';
    const descriptionCategory = document.querySelector('.description-category');
    descriptionCategory ? (descriptionCategory.textContent = prod.category) : '';
    const descriptionPrice = document.querySelector('.description__price');
    descriptionPrice ? (descriptionPrice.textContent = prod.price.toString()) : '';

    const photoItems = document.querySelector('.description__photo-items');
    photoItems ? (photoItems.innerHTML = '') : '';
    let mainPhoto = document.querySelector('.description__photo-img') as HTMLImageElement;
    mainPhoto.src = prod.images[0];
    prod.images.forEach((x) => {
      const itemWraper = document.createElement('div');
      itemWraper.classList.add('description__photo-item-wrapper');
      const itemImg = document.createElement('img');
      itemImg.classList.add('description__photo-item-img');
      itemImg.src = x;
      itemWraper.appendChild(itemImg);
      photoItems?.appendChild(itemWraper);
      itemImg.onclick = function () {
        mainPhoto.src = itemImg.src;
      };
      let cartProducts: Array<IProduct> = JSON.parse(localStorage.cartProducts);
      const btnAdd = document.querySelector('.btn-add') as HTMLElement;
      if (((cartProducts.filter((y)=>y.id==id).length)>0)){
        btnAdd.classList.add('btn-reserv');
        btnAdd.innerText="DROP FROM CART"
      }
      btnAdd.onclick=function(){
        if (((cartProducts.filter((y)=>y.id==id).length)>0)) {
          console.log('remove press');
           cartProducts.filter((y)=>y.id==id)[0].amount=null;
           cartProducts=cartProducts.filter((x)=>x.amount);
           localStorage.cartProducts = JSON.stringify(cartProducts);
           btnAdd.classList.remove('btn-reserv');
           btnAdd.innerText="ADD TO CARD"
        }
        else{
          prod.amount = 1;
              cartProducts.push(prod);
              localStorage.cartProducts = JSON.stringify(cartProducts);
              console.log('add press');
              btnAdd.classList.add('btn-reserv');
              btnAdd.innerText="DROP FROM CART"
        }
      }
  
    });
  },
  renderNotFound() {
    const chits = document.querySelector('.description__chits') as HTMLElement;
    chits.innerHTML = '';
    const wrapper = document.querySelector('.cart-page__wrapper') as HTMLElement;
    wrapper ? (wrapper.innerHTML = '') : '';
    const content = document.createElement('div');
    content.classList.add('description__not-found');
    content.classList.add('tile');
    content.textContent = 'Product not found...';
    wrapper.appendChild(content);
  },
};

export default descriptionPage;
