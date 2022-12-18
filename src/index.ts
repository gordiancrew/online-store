import App from './components/app/app';
import './styles.scss';
import { IProduct } from './types/product.interface';
console.log('we are start!');
const app = new App();
app.start();

//JSON.parse(localStorage.dataProducts).forEach((x: IProduct,index:number) => console.log(index+" - " + x.title));