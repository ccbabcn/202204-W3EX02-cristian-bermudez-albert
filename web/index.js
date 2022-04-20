import Button from "./js/componentes/Button.js";
import Input from "./js/componentes/Input.js";
import Paragraph from "./js/componentes/Paragraph.js";
import { inputDelay } from "./js/componentes/ButtonAsync.js";

const testInput = new Input(document.body);

const testButton = new Button(document.body, "Test button", async () => {
  try {
    paraTest.element.textContent = await inputDelay(testInput.element.value);
  } catch (error) {
    console.log(Error.message);
  }
});
const paraTest = new Paragraph(document.body);

console.log(testButton);
