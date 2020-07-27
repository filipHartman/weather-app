import { compose } from 'stampit';
import { Component } from '../shared/component';
import { createElement } from '../shared/createElement';
import { config } from '../config/config';

export const TodayForecastComponent = compose(Component, {
  init(args) {
    this.weatherFacade = args.weatherFacade;
  },
  methods: {
    create() {
      const todayForecast = this.weatherFacade.getTodayForecast();

      const temp = createElement({ tag: 'span' });
      temp.innerText = todayForecast.temp;

      const tempContainer = createElement({
        tag: 'div',
        children: [temp],
      });

      const icon = createElement({ tag: 'img' });
      icon.src = config.url.icon(todayForecast.icon);

      const feelsLikeTemp = createElement({
        tag: 'span',
      });
      feelsLikeTemp.innerText = `Feels like: ${todayForecast.feelsLikeTemp}`;

      const windSpeed = createElement({
        tag: 'span',
      });
      windSpeed.innerText = `Wind: ${todayForecast.wind} m/s`;

      const humidity = createElement({
        tag: 'span',
      });
      humidity.innerText = `Humidity: ${todayForecast.humidity}%`;

      const additionalInfoContainer = createElement({
        tag: 'div',
        children: [icon, feelsLikeTemp, windSpeed, humidity],
      });
      const container = createElement({
        tag: 'div',
        id: this.id,
        children: [tempContainer, additionalInfoContainer],
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
