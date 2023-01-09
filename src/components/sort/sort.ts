export class Sort {
  found: number;
  constructor() {
    this.found = 0;
  }
  setFound(amount: number) {
    this.found = amount;
  }

  render() {
    const foundAmount = document.querySelector('.sort__amount') as HTMLSpanElement;
    foundAmount.textContent = `${this.found}`;
  }
}

export default Sort;
