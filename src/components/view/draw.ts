import { Product } from '../../types/product.interface';

class Draw {

  listProd = document.querySelector('.list-products') as HTMLElement;
  checkBoxSmartphones = document.querySelector("#smartphones") as HTMLInputElement;
  checkBoxApple = document.querySelector("#apple") as HTMLInputElement;

  drawProducts(products: Array<Product>) {
    console.log('start draw products cards');
    this.listProd ? this.listProd.innerHTML = '' : this.listProd;
    //clear product list area befor new drawing

    if (this.checkBoxSmartphones.checked) {
      products = products.filter((p) => p.category === 'smartphones');
    }
    if (this.checkBoxApple.checked) {
      products = products.filter((p) => p.brand === 'Apple');
    }

    products.forEach((prod) => this.drawProdCart(prod));
    //draw all elements type Product of data array
  }

  drawProdCart(product: Product) {
    //draw new product card and append it to product list
    let prod = document.createElement('div');
    prod.style.border = '1px solid black';
    prod.style.borderRadius = '10px';
    prod.classList.add('product');

    let prodWrapperTitle = document.createElement('div');
    prodWrapperTitle.classList.add('product__wrapper-title');
    let prodTittle = document.createElement('div');
    prodTittle.innerText = product.title;

    let prodWrapperCategory = document.createElement('div');
    prodWrapperCategory.classList.add('product__wrapper-category');
    prodTittle.classList.add('product__title');

    let prodCategory = document.createElement('div');
    prodCategory.classList.add('product__category');
    prodCategory.innerText = product.category;
    let prodBrend = document.createElement('div');
    prodBrend.classList.add('product__brand');
    prodBrend.innerText = product.brand;
    prodWrapperCategory.appendChild(prodCategory);
    prodWrapperCategory.appendChild(prodBrend);
    prodWrapperTitle.appendChild(prodTittle);
    prodWrapperTitle.appendChild(prodWrapperCategory);
    prod.appendChild(prodWrapperTitle);

    let prodImg = document.createElement('div');
    prodImg.classList.add('product__wrapper-img');
    let img = document.createElement('img');
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

    this.listProd?.appendChild(prod);
  }
}

export default Draw;
