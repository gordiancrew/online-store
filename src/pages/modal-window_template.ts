export const templateModal = `
<div class="modal">
  <div class="modal__content">
      <form class="modal__form">
      <h2>Personal details</h2>
        <input class="modal__input" placeholder="Name" />
        <input class="modal__input" placeholder="Phone" />
        <input class="modal__input" placeholder="Adress"/>
        <input class="modal__input" placeholder="E-mail"/>
        <h2>Card details</h2>
        <input class="modal__input" placeholder="Card number" />
        <input class="modal__input" placeholder="Valid" />
        <input class="modal__input" placeholder="Cvv"/>
        <button type="submit" class="modal__button">CONFIRM</button>
      </form>
  </div>
</div>
`;
export default templateModal;