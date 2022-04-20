import Component from "./Component.js";

class Paragraph extends Component {
  constructor(parentElement, text) {
    super(parentElement, "p", "myParagraph");
    this.text = text;
    this.render();
  }

  render() {
    this.element.textContet = this.text;
  }
}

export default Paragraph;
