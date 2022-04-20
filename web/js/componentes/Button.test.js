import Button from "./Button.js";

describe("Given a button class component", () => {
  describe("When the class is isntanced", () => {
    test("Then it should create a button element", () => {
      const newButton = new Button(document.body, "", () => {});
      const expectNode = "BUTTON";

      const nodeTestName = newButton.element.nodeName;

      expect(nodeTestName).toBe(expectNode);
    });
  });

  describe("When the class is instanced with text 'Buttonsaco'", () => {
    test("Then it should create a button with textContent 'Buttonsaco' ", () => {
      const newButton = new Button(document.body, "Buttonsaco", () => {});
      const expectText = "Buttonsaco";

      const buttonText = newButton.element.textContent;

      expect(buttonText).toBe(expectText);
    });
  });

  describe("When the class is instanced a body as it's parent", () => {
    test("Then it should create a button with body as it's parent", () => {
      const newButton = new Button(document.body, "", () => {});
      const expectparent = "BODY";

      const buttonParent = newButton.element.parentElement.nodeName;

      expect(buttonParent).toBe(expectparent);
    });
  });
});
