import { IFilterSlider } from '../../types/product.interface';

class DualSlider {
  i: number;
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  constructor(filterSlider: IFilterSlider, i: number) {
    this.i = i;
    this.min = filterSlider.min;
    this.max = filterSlider.max;
    this.currentMin = filterSlider.currentMin;
    this.currentMax = filterSlider.currentMax;
  }
  render() {
    const textMin = document.querySelectorAll('.scrollbar__text_min')[this.i];
    const textMax = document.querySelectorAll('.scrollbar__text_max')[this.i];
    const inputMin = document.querySelectorAll('.scrollbar__input_min')[this.i] as HTMLInputElement;
    const inputMax = document.querySelectorAll('.scrollbar__input_max')[this.i] as HTMLInputElement;
    textMin.textContent = `${this.currentMin}`;
    textMax.textContent = `${this.currentMax}`;
    inputMin.min = `${this.min}`;
    inputMin.max = `${this.max}`;
    inputMin.value = `${this.currentMin}`;
    inputMax.min = `${this.min}`;
    inputMax.max = `${this.max}`;
    inputMax.value = `${this.currentMax}`;
    inputMin.addEventListener('input', () => {
      const from = parseInt(inputMin.value, 10);
      const to = parseInt(inputMax.value, 10);
      if (from < this.min) {
        inputMin.value = `${this.min}`;
        textMin.textContent = `${this.min}`;
      }
      if (from > to) {
        inputMin.value = `${to}`;
        textMin.textContent = `${to}`;
      } else {
        textMin.textContent = inputMin.value;
      }
    });

    inputMax.addEventListener('input', () => {
      const from = parseInt(inputMin.value, 10);
      const to = parseInt(inputMax.value, 10);
      if (to > this.max) {
        inputMax.value = `${this.max}`;
        textMax.textContent = `${this.max}`;
      }
      if (from > to) {
        inputMax.value = `${from}`;
        textMax.textContent = `${from}`;
      } else {
        textMax.textContent = inputMax.value;
      }
      if (+inputMax.value == this.min) {
        inputMax.style.zIndex = '10';
      } else {
        inputMax.style.zIndex = '0';
      }
    });
  }

  reset() {
    this.currentMin = this.min;
    this.currentMax = this.max;
    const textMin = document.querySelectorAll('.scrollbar__text_min')[this.i];
    const textMax = document.querySelectorAll('.scrollbar__text_max')[this.i];
    const inputMin = document.querySelectorAll('.scrollbar__input_min')[this.i] as HTMLInputElement;
    const inputMax = document.querySelectorAll('.scrollbar__input_max')[this.i] as HTMLInputElement;
    textMin.textContent = `${this.currentMin}`;
    textMax.textContent = `${this.currentMax}`;
    inputMin.min = `${this.min}`;
    inputMin.max = `${this.max}`;
    inputMin.value = `${this.currentMin}`;
    inputMax.min = `${this.min}`;
    inputMax.max = `${this.max}`;
    inputMax.value = `${this.currentMax}`;
  }

  setValue(currentMin: number, currentMax: number) {
    const textMin = document.querySelectorAll('.scrollbar__text_min')[this.i];
    const textMax = document.querySelectorAll('.scrollbar__text_max')[this.i];
    const inputMin = document.querySelectorAll('.scrollbar__input_min')[this.i] as HTMLInputElement;
    const inputMax = document.querySelectorAll('.scrollbar__input_max')[this.i] as HTMLInputElement;
    if (currentMin === -1) {
      textMin.textContent = `Products not found`;
      textMax.textContent = ``;
    } else {
      this.currentMin = currentMin;
      this.currentMax = currentMax;
      textMin.textContent = `${this.currentMin}`;
      textMax.textContent = `${this.currentMax}`;
      inputMin.value = `${this.currentMin}`;
      inputMax.value = `${this.currentMax}`;
    }
  }
}

export default DualSlider;
