import { Filter } from '../../types/filter.interface';

class Filters {
  result: Filter = {
    smartphones: false,
    laptops: false,
    fragrance: false,
    scincare: false,
    groceries: false,
    homeDecoration: false,
    furniture: false,
    apple: false,
    samsung: false,
    OPPO: false,
    Huawei: false,
    brandMicrosoftSurface: false,
    infinix: false,
    HPPavilion: false,
  };

  constructor() {
    console.log('load filters');
    if (localStorage.filtres == true) {
      JSON.parse(localStorage.filters);
      this.result = JSON.parse(localStorage.filters);
    }
  }

  getMyFilter(): Filter {
    console.log('get my filters');
    return this.result;
  }

  setMyFilter(filter: Filter) {
    this.result = filter;
    localStorage.filters = JSON.stringify(filter);
  }
}

export default Filters;
