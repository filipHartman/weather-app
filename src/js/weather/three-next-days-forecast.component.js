import { compose } from 'stampit';
import { Component } from '../shared/component';
import { createElement } from '../shared/createElement';
import { config } from '../config/config';

export const ThreeNextDaysForecastComponent = compose(Component, {
  init(args) {
    this.weatherFacade = args.weatherFacade;
  },
  methods: {
    create() {
      const forecasts = this.weatherFacade
        .getNextThreeDaysForecast()
        .map((day) => {
          const dayName = createElement({ tag: 'label' });
          dayName.innerText = day.dayName;

          const icon = createElement({ tag: 'img' });
          icon.src = config.url.icon(day.icon);
          const temp = createElement({ tag: 'span' });
          temp.innerText = day.temp;
          return createElement({ tag: 'div', children: [dayName, icon, temp] });
        });
      const container = createElement({
        tag: 'div',
        id: this.id,
        children: forecasts,
      });
      return container;
    },
    update() {
      const oldEl = document.getElementById(this.id);
      const parentEl = oldEl.parentNode;
      parentEl.replaceChild(this.create(), oldEl);
    },
  },
});
