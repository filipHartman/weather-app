import { compose } from 'stampit';
import { Component } from './shared/component';
import { createElement } from './shared/createElement';

export const BackgroundComponent = compose(Component, {
  methods: {
    create(...childrenElements) {
      return createBackground(childrenElements);
    },
    update() {},
  },
});

const createBackground = (childrenElements) => {
  return createElement({
    tag: 'div',
    className: 'background',
    children: childrenElements,
  });
};
