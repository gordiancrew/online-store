import Draw from "../view/draw";


class Controller {
  startAction() {
    console.log('start action');
    let draw=new Draw();
    draw.drawProducts(JSON.parse(localStorage.dataProducts));
  }
}

export default Controller;
