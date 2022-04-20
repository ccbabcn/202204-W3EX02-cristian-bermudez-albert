import Component from "./Component.js";

class Button extends Component {
  action;

  constructor(parentElement, text, action) {
    super(parentElement, "button", "myButton");
    this.element.textContent = text;
    this.action = action;
    this.myListener();
  }

  myListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
