
class ToDoList extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    // this.attachShadow({ mode: "open" });
    
    this.innerHTML = `${this.getAttribute("name")}`;
  }
}

window.customElements.define("list-item", ToDoList);

const listButton = document.querySelector(".list-button");
listButton.addEventListener("click", changeColor);