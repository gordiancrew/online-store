import { IFilterCheckbox } from '../../types/product.interface';

class Checkboxes {
  checkboxes: IFilterCheckbox[];
  i: number;
  block: string;
  constructor(filterCheckbox: IFilterCheckbox[], i: number, block: string) {
    this.checkboxes = filterCheckbox;
    this.i = i;
    this.block = block;
  }

  render() {
    const wrapper = document.querySelectorAll('.filters__wrapper-list');
    while (wrapper[this.i].firstChild) {
      wrapper[this.i].removeChild(wrapper[this.i].firstChild as HTMLElement);
    }
    this.checkboxes.forEach((elem, index) => {
      const li = document.createElement('li');
      if (elem.current > 0) {
        li.className = 'filters__item';
      } else {
        li.className = 'filters__item filters__item_disaibled';
      }
      const div = document.createElement('div');
      div.className = 'filters__wrapper-checkbox';
      const input = document.createElement('input');
      input.className = 'filters__checkbox filters__checkbox_cat';
      input.type = 'checkbox';
      input.id = `${this.block}${index}`;
      input.name = `${elem.name}`;
      input.value = 'true';
      if (elem.checked) {
        input.checked = true;
      } else {
        input.checked = false;
      }
      const label = document.createElement('label');
      label.className = 'filters__label';
      label.setAttribute('for', `${this.block}${index}`);
      label.textContent = `${elem.name}`;
      const span = document.createElement('span');
      span.textContent = `(${elem.current}/${elem.max})`;
      div.append(input, label);
      li.append(div, span);
      wrapper[this.i].append(li);
    });
  }
}
export default Checkboxes;
