
class ToDoList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `${this.getAttribute("name")}`;
  }
}

window.customElements.define("list-item", ToDoList);

const liButton = document.querySelector(".button");
liButton.addEventListener("click", changeColor);