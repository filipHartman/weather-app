import css from '../css/style.css';

import { App } from './app';
import { SearchComponent } from './search/search.component';
import { SearchHandler } from './search/searchHandler';
import { WeatherService } from './weather/weather.service';
import { WeatherDataFacade } from './weather/weather.facade';
import { config } from './config/config';
import { BackgroundComponent } from './background.component';
import { WeatherComponent } from './weather/weather.component';
import { exampleState } from './shared/testUtils';

const weatherFacade = new WeatherDataFacade(exampleState);
const weatherService = new WeatherService();

const background = BackgroundComponent({ id: config.componentId.background });

const search = SearchComponent({ id: config.componentId.search });
const weatherComponent = WeatherComponent({
  id: config.componentId.weather,
  weatherFacade: weatherFacade,
});

document.body.appendChild(
  background.create(search.create(), weatherComponent.create()),
);

const app = new App(background, search, weatherComponent);

const searchHandler = new SearchHandler();

searchHandler.addObserver(() => {
  weatherService
    .getWeatherDataByCityName(document.querySelector('.search-input').value)
    .then((data) => {
      if (!!data) {
        weatherFacade.updateWeatherState(data);
        app.updateApp();
      }
    });
});
