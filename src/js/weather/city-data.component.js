import { compose } from 'stampit';
import { Component } from '../shared/component';
import { createElement } from '../shared/createElement';

export const CityDataComponent = compose(Component, {
  init(args) {
    this.weatherFacade = args.weatherFacade;
  },
  methods: {
    create() {
      const cityText = createElement({
        tag: 'h2',
        id: 'cityText',
        className: 'city-text',
      });
      cityText.innerText = `${this.weatherFacade.getCityData().city}, ${
        this.weatherFacade.getCityData().countrySymbol
      }`;

      const cityDate = createElement({
        tag: 'p',
        id: 'cityDate',
        className: 'cityDate',
      });

      cityDate.innerText = `${this.weatherFacade.getCityData().date}, ${
        this.weatherFacade.getCityData().time
      }`;

      const cityContainer = createElement({
        tag: 'div',
        id: this.id,
        className: 'city-container',
        children: [cityText, cityDate],
      });
      return cityContainer;
    },

    update() {
      const oldEl = document.getElementById(this.id);
      const parentEl = oldEl.parentNode;
      parentEl.replaceChild(this.create(), oldEl);
    },
  },
});
