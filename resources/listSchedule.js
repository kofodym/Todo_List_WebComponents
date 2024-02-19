class Recur extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<button class="recur">${this.getAttribute(
      "name"
    )}</button>`;
  }
}

window.customElements.define("recurring-lists", Recur);
