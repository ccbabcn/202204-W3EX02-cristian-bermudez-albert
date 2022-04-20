import Button from "./js/componentes/Button.js";
import Input from "./js/componentes/Input.js";
import Paragraph from "./js/componentes/Paragraph.js";

const testInput = new Input(document.body);
const testButton = new Button(document.body, "Test button", () => {
  paraTest.element.textContent = testInput.element.value;
});
const paraTest = new Paragraph(document.body);

console.log(testButton);
