import { createElement } from '../shared/createElement';
import { compose } from 'stampit';
import { Component } from '../shared/component';

export const SearchComponent = compose(Component, {
  methods: {
    create() {
      const input = createElement({ tag: 'input', className: 'search-input' });
      const button = createElement({
        tag: 'button',
        className: 'search-button',
      });

      button.setAttribute('type', 'submit');
      button.innerText = 'Search';
      return createElement({
        tag: 'div',
        id: this.componentId,
        className: 'search-container',
        children: [input, button],
      });
    },

    update() {
      const input = document.querySelector('.search-input');
      input.value = '';
    },
  },
});
