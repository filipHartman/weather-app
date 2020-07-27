export class SearchHandler {
  constructor() {
    this.observers = [];
    this.addSearchSubmitListener();
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  addSearchSubmitListener() {
    const input = document.querySelector('.search-input');
    const button = document.querySelector('.search-button');

    button.addEventListener('click', ($event) =>
      this.handleEvent($event, input),
    );

    input.addEventListener('keypress', ($event) => {
      if ($event.code === 'Enter') this.handleEvent($event, input);
    });
  }

  handleEvent($event, input) {
    if (!input.value) {
      $event.preventDefault();
    } else {
      this.observers.forEach((observer) => observer());
    }
  }
}
