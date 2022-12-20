import { Product } from "../../types/product.interface";
import Draw from "../view/draw";


class Controller {
  startAction() {
    console.log('start action');
    let draw = new Draw();
    draw.drawProducts(JSON.parse(localStorage.dataProducts));
    //start default drawing products list

    let checkboxes = document.querySelectorAll(".filters__checkbox");
    checkboxes.forEach((x) => ((x.addEventListener('click', () => draw.drawProducts(JSON.parse(localStorage.dataProducts))))));
    //add onclick for all checkboxes
  }












}

export default Controller;
