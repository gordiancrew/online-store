import Loader from "../loader/loaderData";

class App {
    loader: Loader = new Loader();
  

    start() {
        this.loader.load('GET', (data) => console.log(data));
    }
}

export default App;