export class App {
  constructor(...components) {
    this.components = components;
  }

  updateApp() {
    this.components
      .filter((component) => !!component.update)
      .forEach((component) => {
        component.update();
      });
  }
}
