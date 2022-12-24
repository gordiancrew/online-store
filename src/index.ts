import App from './components/app/app';
import './styles.scss';
import { IProduct } from './types/product.interface';
import initRouter from './components/router/router';
console.log('we are start!');
const app = new App();
app.start();
initRouter();
