import { compose } from 'stampit';
import { Component } from '../shared/component';
import { createElement } from '../shared/createElement';
import { CityDataComponent } from './city-data.component';
import { TodayForecastComponent } from './today-forecast.component';
import { ThreeNextDaysForecastComponent } from './three-next-days-forecast.component';

export const WeatherComponent = compose(Component, {
  init(args) {
    this.weatherFacade = args.weatherFacade;
    this.cityDataComponent = CityDataComponent({
      id: 'cityData',
      weatherFacade: this.weatherFacade,
    });
    this.todayComponent = TodayForecastComponent({
      id: 'todayForecast',
      weatherFacade: this.weatherFacade,
    });
    this.threeNextDaysComponent = ThreeNextDaysForecastComponent({
      id: 'threeDaysForecast',
      weatherFacade: this.weatherFacade,
    });
  },
  methods: {
    create() {
      return createElement({
        tag: 'div',
        id: this.id,
        className: 'weather-container',
        children: [
          this.cityDataComponent.create(),
          this.todayComponent.create(),
          this.threeNextDaysComponent.create(),
        ],
      });
    },

    update() {
      this.cityDataComponent.update();
      this.todayComponent.update();
      this.threeNextDaysComponent.update();
    },
  },
});
